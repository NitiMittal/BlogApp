import {ADD_BLOG, REMOVE_BLOG, ADD_BLOG_ERROR} from "../actions/actiontypes"

const INITIAL_DATA={
    isSuccess: false,
    error:""
}

const BlogReducer=(state=INITIAL_DATA,action)=>{
    switch(action.type){
        case ADD_BLOG:
            return {
                ...state,
                isSuccess:true
            };

        
            case REMOVE_BLOG:
                const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);

            case ADD_BLOG_ERROR:
                return {
                    ...state,
                    isSuccess:false,
                    error: action.payload
                };
            default:
            return state
    }
}
export default BlogReducer