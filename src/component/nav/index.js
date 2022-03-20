import React from "react";
import { Link } from "react-router-dom";
class nav extends React.Component{
    state={
        user:[],
        log:true
    }
    componentDidMount(){
      // eslint-disable-next-line no-lone-blocks
      {
            fetch('http://localhost:8000/user/1')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                   user:res
                })
            })
        
    }
}
    
    render(){
        console.log(this.state.user)
        return(
            <div class="nav">
<div class="title">
<Link to="/"><div>
<p>
WibuCinema
</p>
</div></Link>

</div>
<div>
<ul>
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
        this.state.log==true?<><li>
                            <div class="avatar"><img src={this.state.user.avatar} /></div></li><li>{this.state.user.name}</li><li class="cart">Giỏ hàng<div>{this.state.user.id}</div></li></>
:<><li><Link to="/log">Đăng Nhập</Link></li><li><Link to="/log">Đăng Ký</Link></li></>
    }

</ul>


</div>
</div>
        )
    }
}
export default nav;