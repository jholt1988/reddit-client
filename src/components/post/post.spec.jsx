import React from 'react';
import {render} from '@testing-library/react';
import Post from  './Post'


it('renders posts correctly', ()=>{
    render(<Post></Post>)
})