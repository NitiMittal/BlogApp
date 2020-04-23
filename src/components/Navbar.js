import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                  <Link className="navbar-brand" to="/">Home</Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                      <li class="nav-item">
                        <form class="form-inline">
                          <Link  className="btn btn-primary btn-lg" to ="/createBlog">New Post</Link>
                        </form>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/profiles">Login</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <div class="col-md-12 text-right">
                        <a class="navbar-brand" href="https://www.facebook.com/"><i class="fab fa-facebook"> </i></a>
                        <a class="navbar-brand" href="https://www.instagram.com/"><i class="fab fa-instagram"> </i></a>
                        <a class="navbar-brand" href="https://www.pinterest.com/"><i class="fab fa-pinterest"> </i></a>
                        <a class="navbar-brand" href="https://www.twitter.com/"><i class="fab fa-twitter"> </i></a></div>
                    </ul>
      
                   </div> 
                </div>
</nav>
<br/>
            </div>
        )
    }
}
