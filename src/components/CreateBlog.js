import React, { Component } from 'react'
import axios from "axios"
import {connect} from "react-redux"
import { createBlog } from "../actions/actioncreator"
import {bindActionCreators} from 'redux'
import { withRouter } from "react-router-dom";

  class CreateBlog extends Component {
  constructor(props){
    super(props);
    this.state={
      title: "",
      description:"",
      author:"",
      start:"",
      tag:""
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    
    e.preventDefault();
    console.log(this.state);
    let blog={
      title: this.state.title,
      description:this.state.description,
      start:this.state.start,
      tag:this.state.tag
    };
    let blogUrl="http://localhost:7000/createBlog";
    this.props.createBlog(blog, this.props.history);
    // axios
    //         .post(blogUrl,blog)  
    //          .then(res=>{
    //              console.log("data posted successfully");
    //          })
    //          .catch(err=>{
    //              console.log(err);
    //          });
  }
  render() {
    return (
      <div className="add-blog">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Your Blog Here</h1>
            <small className="d-block pb-3">* = required field</small>
            <form action="#" onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="* Title" name="title" value={this.state.name} onChange={this.onChange} required />
              </div>
              <div className="form-group">
              <textarea className="form-control form-control-lg" placeholder="* Description" name="description" value={this.state.description} onChange={this.onChange} required></textarea>
                
              </div>
              
              <div className="form-group">
                <input type="date" className="form-control form-control-lg" onChange={this.onChange} value={this.state.start} name="start" />
              </div>
                
              <div className="form-group">
              <input type="text" className="form-control form-control-lg" onChange={this.onChange} value={this.state.tag} placeholder="Tag" name="tag" />
                
              </div>
              <input type="submit" value="Publish" className="btn btn-secondary btn-block mt-4"  />
            </form>
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}

const mapStateToProps = (dispatch) => {
  return bindActionCreators({
 createBlog
}, dispatch)
}
export default connect(mapStateToProps, {createBlog })(withRouter(CreateBlog)); 
