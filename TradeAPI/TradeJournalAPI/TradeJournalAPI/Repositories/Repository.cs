using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using TradeJournalAPI.Interfaces;
using TradeJournalAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace TradeJournalAPI.Repositories
{
    public class Repository<T> : IRepository<T> where T: class
    {
        protected readonly TradeJournalDBModel _ctx;

        public Repository(TradeJournalDBModel context)
        {
            _ctx = context;
        }

        public T Get(int id)
        {
            // Here we are working with a DbContext, not PlutoContext. So we don't have DbSets 
            // such as Courses or Authors, and we need to use the generic Set() method to access them.
            return _ctx.Set<T>().Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            // Note that here I've repeated _ctx.Set<T>() in every method and this is causing
            // too much noise. I could get a reference to the DbSet returned from this method in the 
            // constructor and store it in a private field like _entities. This way, the implementation
            // of our methods would be cleaner:
            // 
            // _entities.ToList();
            // _entities.Where();
            // _entities.SingleOrDefault();
            // 
            // I didn't change it because I wanted the code to look like the videos. But feel free to change
            // this on your own.
            return _ctx.Set<T>().ToList();
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
        {
            return _ctx.Set<T>().Where(predicate);
        }

        public T SingleOrDefault(Expression<Func<T, bool>> predicate)
        {
            return _ctx.Set<T>().SingleOrDefault(predicate);
        }

        public void Add(T entity)
        {
            _ctx.Set<T>().Add(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
            _ctx.Set<T>().AddRange(entities);
        }

        public void Remove(T entity)
        {
            _ctx.Set<T>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            _ctx.Set<T>().RemoveRange(entities);
        }
    }
}