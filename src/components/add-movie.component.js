import React, { Component } from "react";
import MovieDataService from "../services/movie.service";

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReview= this.onChangeReview.bind(this);
    this.onChangeImageUrl= this.onChangeImageUrl.bind(this);
    this.onChangecategoryId= this.onChangecategoryId.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.newMovie = this.newMovie.bind(this);

    this.state = {
      id: null,
      movieName: "",
      description: "",
      review:"",
      imageUrl:"",
      categoryId:"",
      
 
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      movieName: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeReview(e) {
    this.setState({
      review: e.target.value
    });
  }

  onChangeImageUrl(e) {
    this.setState({
      imageUrl: e.target.value
    });
  }

  onChangecategoryId(e) {
    this.setState({
      categoryId: e.target.value
    });
  }

  saveMovie() {
    var data = {
      movieName: this.state.movieName,
      description: this.state.description,
      review: this.state.review,
      imageUrl: this.state.imageUrl,
      categoryId: this.state.categoryId,
      
    };

    MovieDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          review: response.data.review,
          imageUrl:response.data.imageUrl,
          categoryId: response.data.categoryId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      console.log(data)
  }

  newMovie() {
    this.setState({
      id: null,
      movieName: "",
      description: "",
      review:"",
      imageUrl:"",
      categoryId:"",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title"><b>Title</b></label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.movieName}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description"><b>Description</b></label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="review"><b>Review</b></label>
                <input
                  type="text"
                  className="form-control"
                  id="review"
                  required
                  value={this.state.review}
                  onChange={this.onChangeReview}
                  name="review"
                />
              </div>

              <div className="form-group">
                <label htmlFor="imageUrl"><b>Image</b></label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  required
                  value={this.state.imageUrl}
                  onChange={this.onChangeImageUrl}
                  name="Image URL"
                />
              </div>

              <div className="form-group">
                <label htmlFor="categoryId"><b>CategoryId</b></label>
                <p>Horor : 85856230-86c2-11ea-bbec-d1cfc9b33a32</p>
                                  <p>Action : 8540df20-86c2-11ea-bbec-d1cfc9b33a32</p>
                                  <p>Romance : 8597ffd0-86c2-11ea-bbec-d1cfc9b33a32</p>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  required
                  value={this.state.categoryId}
                  onChange={this.onChangecategoryId}
                  name="categoryId"
                />
              </div>
  
              <button onClick={this.saveMovie} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}