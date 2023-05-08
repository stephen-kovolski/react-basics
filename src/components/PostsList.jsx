import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList(){
    return(
        <ul className={classes.posts}>
            <Post author='Steve' body='React gets confusing'/>
            <Post author='Joseph' body='I like dinosaurs'/>
        </ul>
    )
}

export default PostsList;
