import React from "react";
import '../logn.css';
class login extends React.Component{
    click=()=>{
        document.querySelector('.lo-f').style.height='100%';
    }
    render(){
        return(
            <div className="l-f">
            <div className="lo-f">
            <div> <fieldset>
                    <legend>Tài khoản</legend>
                    <input onClick={()=>this.click()} className="pass"></input>
                </fieldset></div></div>
              <div className="lo-f"> <div><fieldset>
                    <legend>Mật khẩu</legend>
                    <input onClick={()=>this.click()} className="id"></input>
                </fieldset></div></div>
                <div className="lo-d">  <button>ĐĂNG NHẬP</button></div>
              
            </div>
          
        )
    }
}
export default login;