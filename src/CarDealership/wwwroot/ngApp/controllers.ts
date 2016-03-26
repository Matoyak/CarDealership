namespace CarDealership.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService:CarDealership.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class DealershipController {
        public models;
        public makes;
        public selectedMake;
        public makeModels;
        public modelData;
        public search;
        public searchResults = [];

        constructor(private $http: ng.IHttpService) {
            $http.get("/api/cars").then((response) => {
                this.models = response.data;
                //console.log(this.models); //DEBUG
            });
            $http.get("/api/makes").then((response) => {
                this.makes = response.data;
                //console.log(this.makes); //DEBUG
            });
        }

        public getModels() {
            //console.log(this.selectedMake);
            this.makeModels = this.models.filter((model) => {
                //console.log(model, this.selectedMake); //DEBUG
                return model.carMakeId === this.selectedMake.id
            });
            //console.log(this.makeModel); //DEBUG
        }

        public getDetails(model) {
            this.$http.get(`/api/cars/${model.id}`).then((response) => {
                this.modelData = response.data;
                //console.log(this.modelData); //DEBUG
            });
        }

        public searchFilter() {
            this.searchResults = [];
            let car;
            if (this.search.charAt(this.search.length - 1) === "\\") {
                this.search = this.search.slice(0, this.search.length - 1);
            }
            for (car of this.models) {
                //console.log(this.search);
                if (car.shortDescription.toLowerCase().search(this.search) !== -1) { this.searchResults.push(car);}
                if (this.search === "") { this.searchResults = [];}
            }
        }
    }

    export class ModalController {

    }

    //export class BtnController {

    //}
}
