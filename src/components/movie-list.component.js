import React, { Component } from "react";
import MovieDataService from "../services/movie.service";
import DataTable from "./data-table";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {movieCollection:[]};
  }

  componentDidMount() {
    MovieDataService.getAll()
      .then(res => {
        this.setState({movieCollection: res.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  dataTable() {
    return this.state.movieCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  }

  render() {
    return (
        // <div className="wrapper-users">
        //     <div className="container">
        //         <table className="table table-striped table-dark">
        //             <thead className="thead-dark">
        //                 <tr>
        //                     {/* <td>ID</td> */}
        //                     {/* <td>Name</td>
        //                     <td>Description</td>
        //                     <td>Review</td>
        //                     <td>image</td>
        //                     <td>category</td> */}
        //                 </tr>
        //             </thead>
        <div>
          <h1>Movie List</h1>
          <div class="row">
          {this.dataTable()}
        </div>
        </div>
        
        //         </table>
        //     </div>
        // </div>
    )
  }  
}