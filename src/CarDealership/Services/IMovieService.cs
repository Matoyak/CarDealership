using System.Collections.Generic;
using CarDealership.Models;

namespace CarDealership.Services
{
    public interface IMovieService
    {
        void DeleteMovie(int id);
        Movie FindMovie(int id);
        IList<Movie> ListMovies();
        void SaveMovie(Movie movie);
    }
}
