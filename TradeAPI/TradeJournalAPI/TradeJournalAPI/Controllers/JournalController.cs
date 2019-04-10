using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TradeJournalAPI.Models;

namespace TradeJournalAPI.Controllers
{
    public class JournalController : ApiController
    {
        private TradeJournalDBModel db = new TradeJournalDBModel();

        //TODO implement repository
        // GET: api/Journal
        public IQueryable<Journal> GetJournals()
        {
            return db.Journals.AsQueryable();
        }

        // GET: api/Journal/5
        [ResponseType(typeof(Journal))]
        public IHttpActionResult GetJournal(int id)
        {
            Journal journal = db.Journals.Find(id);
            if (journal == null)
            {
                return NotFound();
            }

            return Ok(journal);
        }

        // PUT: api/Journal/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJournal(int id, Journal journal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != journal.journal_id)
            {
                return BadRequest();
            }

            db.Entry(journal).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JournalExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Journal
        [ResponseType(typeof(Journal))]
        public IHttpActionResult PostJournal(Journal journal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Journals.Add(journal);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = journal.journal_id }, journal);
        }

        // DELETE: api/Journal/5
        [ResponseType(typeof(Journal))]
        public IHttpActionResult DeleteJournal(int id)
        {
            Journal journal = db.Journals.Find(id);
            if (journal == null)
            {
                return NotFound();
            }

            db.Journals.Remove(journal);
            db.SaveChanges();

            return Ok(journal);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JournalExists(int id)
        {
            return db.Journals.Count(e => e.journal_id == id) > 0;
        }
    }
}