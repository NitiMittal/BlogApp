import axios from "axios"
import {ADD_BLOG, REMOVE_BLOG,SHOW_ALL, ADD_BLOG_ERROR, ADD_BLOG_INIT} from "./actiontypes"
import jwt_decode from "jwt-decode";

export const createBlog= (blogData, history)=>{

    return dispatch=>{
        dispatch({
            type: ADD_BLOG_INIT
        })
        axios
            .post("http://localhost:7000/createBlog", blogData)
            .then(res=>{
                debugger;
                console.log("data posted successfully");
                console.log(res);
                dispatch({
                    type: ADD_BLOG,
                    res
                })
            })
            .catch(err=>{
                debugger;
                dispatch({
                    type: ADD_BLOG_ERROR,
                    payload:err
                    
                })
                console.log(err);
            });
    }
}

export const deleteBlog= ()=>{
    return dispatch=>{
        axios
            .delete("http://localhost:7000/blog/:blogId")
            .then(res=>{
                console.log("data deleted successfully");
                dispatch({
                    type: REMOVE_BLOG
                })
            })
            .catch(err=>{
                console.log(err);
            });
    }
}

