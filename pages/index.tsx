import {useEffect} from "react";
import Router from "next/router";
import Layout from '../components/Layout'

const IndexPage = () => {
  console.log(Router)
  useEffect(()=>{
    if(Router.pathname === "/") {
      Router.push("/blog")
    }
  },[])
  return (<Layout title="">
    
  </Layout>)
}


export default IndexPage
