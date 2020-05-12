import React, { Component } from "react";
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Popup from "reactjs-popup";
import MovieDataService from "../services/movie.service";

export default class DataTable extends Component {

  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReview= this.onChangeReview.bind(this);
    this.onChangeImageUrl= this.onChangeImageUrl.bind(this);
    this.onChangecategoryId= this.onChangecategoryId.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      id: this.props.obj.id ,
      movieName: "",
      description: "",
      review:"",
      imageUrl:"",
      categoryId:"",
      
 
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

  updateMovie() {
    var data = {
      id: this.state.id,
      movieName: this.state.movieName,
      description: this.state.description,
      review: this.state.review,
      imageUrl: this.state.imageUrl,
      categoryId: this.state.categoryId,
      
    };

    MovieDataService.update(data)
      .then((data) => {
        console.log(data)
      })
      .catch(e => {
        console.log(e);
      });
      console.log(data)
  }

  deleteMovie() {
    var id = this.state.id;
    return MovieDataService.delete(id);
    //console.log(id)
    //alert("hai");
    
}



  newMovie() {
    this.setState({
      id: "",
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
    console.log(this.props.obj.description);
   
    return ( 
          <div class="col-lg-4">  
            <div class="card">
            <div class="card-header">  
              <i className="fa fa-align-justify"></i> <b>{this.props.obj.movieName}</b>
            </div>  
              <div class="card-body">
                <div className="table-responsive" width="300px">
                  <table className="table">
                    <tbody>
                      <tr>  
                        <td>
                        <img 
                          src={this.props.obj.imageUrl}
                          alt="new"
                          width="300" height="150"/></td>
                      </tr>
                      <tr>
                        <td>Judul : {this.props.obj.movieName}</td>
                      </tr>
                      <tr>
                        <td>Deskripsi : {this.props.obj.description}</td> 
                      </tr>
                      <tr>
                        <td>Kategori : {this.props.obj.category.categoryName}</td> 
                      </tr>
                      <tr>
                        <td>
                          <Popup trigger={<button className="badge"> 
                            Review</button>}>
                              <div style={{textAlign: "center",}}>
                                <h5>{this.props.obj.movieName}</h5>
                                <div>Review : {this.props.obj.review}</div>
                              </div>
                          </Popup>
                          <Popup trigger={<button className="badge"> 
                            Delete</button>}>
                              <div style={{textAlign: "center",}}>
                                <h5>Delete</h5>
                                <button onClick= {this.deleteMovie} className="btn btn-success">Delete</button>
                              </div>
                          </Popup>
                          <Popup trigger={<button className="badge"> 
                            Update</button>}>
                              <div style={{textAlign: "Left",}}>
                                <div>{"Update "+this.props.obj.movieName}</div>
                                {/* <div className="form-group">
                                  <label htmlFor="id">id</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    required
                                    value={this.props.obj.id}
                                    onChange={this.onChangeId}
                                    name="id"
                                  />
                                </div> */}
                                <div className="form-group" width="70px">
                                  <label htmlFor="moviename"><b>Name</b></label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="movieName"
                                    required
                                    value={this.state.movieName}
                                    onChange={this.onChangeTitle}
                                    name="movieName"
                                  />
                                </div>
                              </div>
                              
                              <div className="form-group">
                                  <label htmlFor="description"><b>Description</b></label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="desription"
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
                                  <label htmlFor="Image"><b>Image</b></label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="image"
                                    required
                                    value={this.state.imageUrl}
                                    onChange={this.onChangeImageUrl}
                                    name="image"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="category"><b>Category</b></label>
                                  <p>Horor : 85856230-86c2-11ea-bbec-d1cfc9b33a32</p>
                                  <p>Action : 8540df20-86c2-11ea-bbec-d1cfc9b33a32</p>
                                  <p>Romance : 8597ffd0-86c2-11ea-bbec-d1cfc9b33a32</p>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    required
                                    value={this.state.categoryId}
                                    onChange={this.onChangecategoryId}
                                    name="desription"
                                  />
                                  
                                </div>
                                <button onClick={this.updateMovie} className="btn btn-success">
                                  Submit
                                </button>
                          </Popup>
                        </td> 
                      </tr>
                    </tbody>
                    </table>
                  </div>
            </div>
          </div>
        </div>
          
    );
  }
}
