import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>Hey, This is blog</h1>
      {children}
    </div>
  );
};

export default BlogLayout;
