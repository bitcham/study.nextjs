import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

interface PostsListProps {
    isPosting: boolean;
    onStopPosting: () => void;
}
function PostsList({ isPosting, onStopPosting }: PostsListProps) {
    const [posts, setPosts] = useState<{ body: string, author: string }[]>([]);

    function addPostHandler(postData: { body: string, author: string }) {
        setPosts([postData, ...posts]);
    }

    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author="Max" body="First post!"></Post>
            </ul>
        </>
    );
}

export default PostsList;
