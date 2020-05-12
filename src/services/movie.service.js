import http from "../http-common";

class MovieDataService {
  getAll() {
    return http.get("/movie");
  }

  get(id) {
    return http.get(`/movie/${id}`);
  }

  create(data) {
    return http.post("/movie", data);
  }

  update(data) {
    return http.put("/movie", data);
  }

  delete(id) {
    return http.delete(`/movie/${id}`);
  }

  deleteAll() {
    return http.delete(`/movies`);
  }

  findByTitle(title) {
    return http.get(`/movies?title=${title}`);
  }
}

export default new MovieDataService();