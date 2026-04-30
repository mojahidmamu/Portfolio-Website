import React from "react";
import { Helmet } from "react-helmet-async";
// import BannerSection from "../Banner/BannerSection"; 
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio | Blog</title>
      </Helmet>
      {/* <BannerSection></BannerSection> */}
      <BlogCard></BlogCard>
    </div>
  );
};

export default  Blog;
