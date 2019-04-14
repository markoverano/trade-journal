using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeJournalAPI.Models;

namespace TradeJournalAPI.Interfaces
{
    public interface IJournalRepository: IRepository<Journal>
    {
        IEnumerable<Journal> GetTotalEquity();
        IEnumerable<Journal> GetAllJournals();
    }
}
