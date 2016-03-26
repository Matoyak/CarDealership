using System.Collections.Generic;
using CarDealership.Models;

namespace CarDealership.Services
{
    public interface IGuestbookService
    {
        IList<GuestbookEntry> ListEntries();
        void SaveEntry(GuestbookEntry entry);
    }
}
