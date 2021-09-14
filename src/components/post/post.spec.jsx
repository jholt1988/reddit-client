import React from 'react';
import {render} from '@testing-library/react';
import Post from  './Post'
const post = fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => json = post => post.data)

console.log(post)


it('renders posts correctly', ()=>{
    render(
    <Post post={post.data}>

    </Post>
    
    )
})