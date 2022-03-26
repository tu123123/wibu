/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import React from "react";
import { createHashHistory } from 'history'
import '../dangnhap/log.css';
import Session from 'react-session-api';
import {data} from '../../database/firebaseData';
 class Dangnhap extends React.Component{
    login=()=>{
      
        let a=document.querySelector('.loading-dangnhap');
        let b=document.querySelector('.ten-dangnhap-i').value;
        let c=document.querySelector('.matkhau-dangnhap-i').value;
        data.collection('user').get().then((i)=>{
            i.forEach(y=>{
                if(y.data().id==b && y.data().pass==c)
                {   localStorage.setItem('user',y.id)
                    a.style.display="block";
                    setTimeout(() => {
                        window.location.href = "/wibu"
                    }, 2000);
                }
                else{
                    a.style.display="block";
                }
            })
        })
        setTimeout(() => {
            a.style.display="none";
        }, 4000);
    }
    
    render(){
      console.log(Session.get('user'))
        return(
            <div className="log-f">
            <div className="dangnhap-f">
            <div className="loading-dangnhap"></div>
                <div>
                    <p>Tên đăng nhập:</p>
                    <input className="ten-dangnhap-i"></input>
                </div>
                <div>
                    <p>Mật khẩu:</p>
                    <input type='password' className="matkhau-dangnhap-i"></input>
                </div>
                <div>
                <button>Quên mật khẩu</button>
                    <button onClick={()=>this.login()}>Đăng nhập</button>
                   
                </div>
            </div>

            </div>
          
        )
    }
}
export default Dangnhap