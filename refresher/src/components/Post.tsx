import { useState } from 'react';

const names = ['cham', 'john'];

function Post() {
    const choesenName = Math.random() > 0.5 ? names[0] : names[1];
    
    return (
        <div>
            <p>{choesenName}</p>
            <p>React is awesome!</p>
        </div>
    );
}

export default Post;
