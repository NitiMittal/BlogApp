import React, { Component } from 'react'
import axios from "axios"
import {apiUrl} from "../config"
import TextFieldGroup from "./shared/TextFieldGroup"

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    checkValidations(event){
      switch(event.name){
          case "name":
              if(event.value==null || event.value==""){
                  this.setState({
                      errors: {[event.name]:"Name is a required field"}
                  });
              }
              else{
                  this.setState({
                      errors:{[event.name]:undefined}
                  });
              }
              break;
              case "email":
                if(event.value==null || event.value==""){
                    this.setState({
                        errors: {[event.name]:"Email is a required field"}
                    });
                }
                else if(event.value!=="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"){
                  this.setState({
                    errors: {[event.name]:"Please enter correct email address"}
                });
                }
                else{
                    this.setState({
                        errors:{[event.name]:undefined}
                    });
                }
          
              break;
              default:
                  break;
      }
  }

    onChange(e){
        this.checkValidations(e.target);
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        let register={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        };
        let userUrl=`${apiUrl.baseUrl}${apiUrl.user}`;
    
    axios
            .post(userUrl,register)  
             .then(res=>{
                 console.log("Profile has been created successfully");
             })
             .catch(err=>{
                 console.log(err);
             });
  }
    
    render() {
      const {errors}=this.state;
      let NameInputs=(
        <TextFieldGroup
        placeholder="* Author Name"
        name="name"
        onChange={this.onChange}
        error={errors.name}
        />);

    let EmailInputs=(
        <TextFieldGroup
        placeholder="* Email Address"
        name="email"
        type="email"
        onChange={this.onChange}
        error={errors.email}
        />
    );

    let PasswordInputs=(
        <TextFieldGroup
        placeholder="* Password"
        name="password"
        onChange={this.onChange}
        error={errors.password}
        type="password"
        />);

    let ConfirmPasswordInputs=(
        <TextFieldGroup
        placeholder="* Confirm Password"
        name="password2"
        error={errors.password2}
        onChange={this.onChange}
        type="password"
        />
    );
        return (
            <div>
                <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Sign Up</h1>
          <p class="lead text-center">Create your travel Blogger account</p>
          <small className="d-block pb-3">* = required field</small>
          <form action="create-profile.html" onSubmit={this.onSubmit}>
          {NameInputs}
                                    {EmailInputs}
                                    {PasswordInputs}
                                    {ConfirmPasswordInputs}
            <input type="submit" class="btn btn-secondary btn-block mt-4" disabled={!this.state.password,!this.state.password2, !this.state.name, !this.state.email} />
          </form>
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}
