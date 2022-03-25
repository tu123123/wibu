/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import React from "react";
import '../logn.css';
import Loading from '../../../loading';
import {connect} from 'react-redux';
import {data} from '../../../database/firebaseData';
class login extends React.Component{
    checkPass=(e)=>{
       let a= document.querySelector('.check');
       a.style.display="block";
        if(e.target.value==document.querySelector('.user-pass').value&&document.querySelector('.user-pass').value!=""){
                    a.innerHTML="OK"
                    a.style.backgroundColor="lightgreen";
        }
        else{
            a.style.display="block";
            a.innerHTML="X"
            a.style.backgroundColor="red";
        }
    }
    checkTaikhoan=(e)=>{
        
        let a= document.querySelector('.check-taikhoan');
        if(e.target.value==""){
        a.style.display="none";    
        }
        data.collection('user').get().then(i=>{
            i.forEach(y=>{
                if(y.data().id!=e.target.value&&e.target.value!=""){
                    a.style.display="block";
                    a.innerHTML="OK"
                    a.style.backgroundColor="lightgreen";
        }
        else if(e.target.value!=""){
            a.style.display="block";
            a.innerHTML="X"
            a.style.backgroundColor="red";
        }
            })
        })
     }
    handleClickAdd=()=>{
        let checked=true;
        let user={
            name:document.querySelector('.user-name').value,
            mail:document.querySelector('.user-mail').value,
            pass:document.querySelector('.user-pass').value,
            id:document.querySelector('.user-taikhoan').value,
          
        }
        let check=document.querySelectorAll(".l-f input");
        for(var i=0;i<check.length;i++){
            if(check[i].value==""){
                check[i].style.borderBottom="2px dotted red";
                checked=false;
            }
        }
     
       document.querySelector('.check').innerHTML=="OK"?
            checked=true:checked=false;
        
        setTimeout(() => {
            for(let i=0;i<check.length;i++){
            
                    check[i].style.borderBottom="2px dotted white";
                   
                }
            
        },1000);
        if(checked==true&&document.querySelector('.check-taikhoan').innerHTML=="OK"){
            data.collection('user').add(user).then(() =>{
                this.props.addLoading("Thành Công!");
                setTimeout(() => {
                    window.location.href="/dangnhap";
                }, 1500);
               
        })
            .catch(()=>this.props.addLoading("Thất bại!"))
            
            
        
    }}
    render(){
        console.log(this.props.dataRedux.Loading)
        return(
            <div className="l-f">
           
                <div className="form">
                    <div className="img-form"><img src="https://i.pinimg.com/564x/01/dc/0d/01dc0d9d867923b56fee21cac98873ef.jpg"/></div>
                    <div className="login-form">
                    <p>Tên hiển thị:</p>
                    <input  className="user-name"></input>
                    <br/> <br/>
                    <p>Tên đăng nhập:</p>
                    <div className="f-check-taikhoan">
                    <input onChange={(e)=>this.checkTaikhoan(e)} className="user-taikhoan"></input>
                    <div className="check-taikhoan"></div>
                    </div>  
                    <br/> <br/>
                    <p>gmail:</p>
                    <input className="user-mail"></input>
                    <br/> <br/>
                    <p>Mật khẩu:</p>
                    <input className="user-pass" type="password"></input>
                    <br/> <br/>
                    <p>Nhập lại mật khẩu:</p>
                   <div className="check-input"><input onChange={(e)=>this.checkPass(e)} type="password"></input><div className="check"></div></div> 
                    <br/> <br/>
                    <button onClick={()=>this.handleClickAdd()}>Đăng ký</button>
                    </div>
                 
                </div>
            <Loading/>
            </div>
          
        )
    }
}
const stateProps=(state)=>{
    return {
        dataRedux: state
    }
   
}
const actionProps=(dispatch)=>{
    return{
        addUser:(a)=> dispatch({type:"ADD_USER",payload:a}),
        addLoading:(a)=>dispatch({type:"ADD-Loading",payload:a})
    }
}
export default connect(stateProps,actionProps)(login);