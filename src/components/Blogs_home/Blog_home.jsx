import React, { PureComponent } from 'react';
import BlogHomeCard from './Blog_home_card';
const Blog_home = () => {
  return (
    <div className='w-full mt-6'>
      <h1 className='text-7xl font-bold font-mono'>Our Blogs</h1>
        <BlogHomeCard />
    </div>
  )
}

export default Blog_home;