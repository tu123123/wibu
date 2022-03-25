import React,{useState,useEffect} from "react";
import Head from "../head";
import Trend from "../trend";
import Coming from "../coming";
import Newmovie from '../newmovie';
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import {data} from '../../../database/firebaseData';
class main extends React.Component{
   
    
render(){
    
    
   
    return(
        <div className="body" >
    
        <Head/>
        <div className="container">
            <Trend/>
            <Coming/>
        </div>
        <Newmovie/>
        </div>
    )
}

}

export default main;