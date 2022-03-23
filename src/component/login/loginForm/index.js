/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import React from "react";
import '../logn.css';
import {connect} from 'react-redux';
class login extends React.Component{
    handleClickAdd=()=>{
        let user={
            name:document.querySelector('.user-name').value,
            mail:document.querySelector('.user-mail').value,
            pass:document.querySelector('.user-pass').value,
            taikhoan:document.querySelector('.user-taikhoan').value,
            id:`${document.querySelector('.user-name').value}-${Math.round(Math.random(1,9000))}`
        }
        this.props.addUser(user)
    }
    render(){
        console.log(this.props.dataRedux)
        return(
            <div className="l-f">
           
                <div className="form">
                    <div className="img-form"><img src="https://i.pinimg.com/564x/01/dc/0d/01dc0d9d867923b56fee21cac98873ef.jpg"/></div>
                    <div className="login-form">
                    <p>Tên hiển thị:</p>
                    <input  className="user-name"></input>
                    <br/> <br/>
                    <p>Tên đăng nhập:</p>
                    <input className="user-taikhoan"></input>
                    <br/> <br/>
                    <p>gmail:</p>
                    <input className="user-mail"></input>
                    <br/> <br/>
                    <p>Mật khẩu:</p>
                    <input className="user-pass" type="password"></input>
                    <br/> <br/>
                    <p>Nhập lại mật khẩu:</p>
                    <input type="password"></input>
                    <br/> <br/>
                    <button onClick={()=>this.handleClickAdd()}>Đăng ký</button>
                    </div>
                 
                </div>
              
            </div>
          
        )
    }
}
const stateProps=(state)=>{
    return {
        dataRedux: state.user
    }
   
}
const actionProps=(dispatch)=>{
    return{
        addUser:(a)=> dispatch({type:"ADD_USER",payload:a})
    }
}
export default connect(stateProps,actionProps)(login);