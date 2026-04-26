import React from 'react'
import styles from '../blogs/blogs.module.css'
import BlogList from '../../components/blogList/BlogList'
// {``}
// {`${}`}

function Blogs() {
  return (
    <div className={`container mt-3`}>
      <div className={`row ${styles["blogs-row-1"]}`}>
        <div className={`col-12 ${styles["blogs-title"]}`}><h2>Güncel Bloglar</h2></div>
      </div>
      <div className={`row ${styles["blogs-row-2"]}`}>
        <div className={`col`}>
          <BlogList />
        </div>
      </div>
    </div>
  )
}

export default Blogs