import React from "react";
import Sessison from 'react-session-api';
import { Link } from "react-router-dom";
import {data} from '../../database/firebaseData';
class nav extends React.Component{
    state={
        user:{},
        log:false
    }
    componentDidMount(){
      // eslint-disable-next-line no-lone-blocks
      {
            data.collection('user').get().then(i=>{
                i.forEach(y=>{
                    if(y.id==localStorage.getItem('user')){
                        this.setState({
                            user:{
                                id:y.data().id,
                                name:y.data().name,
                                avatar:y.data().img,
                                cart:y.data().cart,

                                
                            }

                            
                        })
                    }
                })
            })
        
    }
    if(this.state.user.id){
        this.setState({
            log:true
        })
    }
}
    openMenu=()=>{
       document.querySelector('.nav-menu-2-1').style.width=="0px"?
            document.querySelector('.nav-menu-2-1').style.width="200px":document.querySelector('.nav-menu-2-1').style.width="0px";
          
           
        
    }
    closeMenu=()=>{
        document.querySelector('.nav-menu-2-1').style.width="0px"
    }
    openSetting=()=>{
        document.querySelector('.setting').style.display="block";
    }
    closeSetting=()=>{
        document.querySelector('.setting').style.display="none";
    }
    onLogout=()=>{
        localStorage.removeItem('user');
        window.location.href='/wibu';
    }
    render(){
     
      
        return(
            <div class="nav">
<div class="title">
<Link to="/"><div>
<p>
WibuCinema
</p>
</div></Link>

</div>
<div onMouseLeave={()=>this.closeMenu()} className="nav-menu-2">
    <div className="nav-menu-2-1">
    <ul >
<li><Link className="Link" to="/social">DIỄN ĐÀN</Link></li>
<li>LỊCH CHIẾU</li>
<li>PHIM SẮP RA MẮT</li>
<li>RẠP/GIÁ</li>
<li>GIỚI THIỆU </li>
<li>LIÊN HỆ</li>
</ul>
    </div>
    <div onClick={()=>this.openMenu()} className="nav-menu-2-2">
        <h2>{">"}</h2>
        </div>
</div>
<div className="nav-menu-1">
<ul >
<li><Link className="Link" to="/social">DIỄN ĐÀN</Link></li>
<li>LỊCH CHIẾU</li>
<li>PHIM SẮP RA MẮT</li>
<li>RẠP/GIÁ</li>
<li>GIỚI THIỆU </li>
<li>LIÊN HỆ</li>
</ul>
</div>
<div>

    <ul>{
       localStorage.getItem('user')?<><li onMouseLeave={()=>this.closeSetting()} onClick={()=>this.openSetting()}>
                            <div className="avatar"><img src={this.state.user.avatar} /></div>
                            <div className="setting"><ul>
                                <li>
                                    Thông tin
                                </li>
                                <li>
                                   Đơn hàng
                                </li>
                                <li onClick={()=>this.onLogout()}>
                                    Đăng xuất
                                </li>
                            </ul></div>
                            </li><li>{this.state.user.name}</li><li class="cart">Giỏ hàng<div>{this.state.user.cart}</div></li></>
:<><li><Link to="/dangnhap">Đăng Nhập</Link></li><li><Link to="/dangky">Đăng Ký</Link></li></>
    }

</ul>


</div>
</div>
        )
    }
}
export default nav;