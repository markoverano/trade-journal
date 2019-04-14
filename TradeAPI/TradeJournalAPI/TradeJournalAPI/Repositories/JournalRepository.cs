using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TradeJournalAPI.Interfaces;
using TradeJournalAPI.Models;

namespace TradeJournalAPI.Repositories
{
    public class JournalRepository : Repository<Journal>, IJournalRepository
    {
        public JournalRepository(TradeJournalDBModel context) : base(context)
        {
        }

        public IEnumerable<Journal> GetTotalEquity()
        {
            return _ctx.Journals.Where(x => x.gain_percentage > 0);
        }

        public IEnumerable<Journal> GetAllJournals()
        {
            return _ctx.Journals.AsQueryable();
        }
    }
}