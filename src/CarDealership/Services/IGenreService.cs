using System.Collections.Generic;
using CarDealership.Models;

namespace CarDealership.Services
{
    public interface IGenreService
    {
        Genre FindGenre(int id);
        IList<Genre> ListGenres();
    }
}
