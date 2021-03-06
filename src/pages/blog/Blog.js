import { BrowserRouter as Router, Route, a, Switch,useParams, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//component
import BlogCard from './component/BlogCard';
import BlogWebNav from './component/BlogWebNav';
import BlogMobNav from './component/BlogMobNav ';

//CSS
import './blogBanner.css';



function Blog(props){

    const[blog,setBlog]=useState([])
     
    
    const fetchBlog = async () => {
        //向遠端伺服器get資料
        const response = await fetch('https://hosue-coffee-backend.herokuapp.com/blog')
        const data = await response.json()
        // 載入資料後設定到狀態中
        // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
        setBlog(data)
    
        
    }
    console.log(blog);
    
      // didMount
      useEffect(() => {
        fetchBlog()
      }, [])


  return(
    <>
   <section className="blogSection">
        <div className="blogBanner"></div>
    
        <div className="blogBannerWord">
        <h2 >
        <Link to={"/blog"} >
        咖啡手札
        </Link>
        </h2>
        </div>

       {/* //行動裝置板選單  */}
        <div className="blogType container">
           <BlogMobNav/>
        </div>


        <div className="blogNav justify-content">
            <BlogWebNav/>
        </div>



        <div className="blogCardZone container">
            <div className="row  blogRow row-cols-1 row-cols-md-2">
              <BlogCard blog={blog}/>
            </div>
        </div>
    </section>

    </>
  );
}

export default Blog