import React from "react";
import { Link } from "react-router-dom";
class head extends React.Component{

    render(){
        return(
        <div class="slide-movie">
        <img src="https://venturology.files.wordpress.com/2017/01/2-1024x631.jpg"/>
        <div class="detail">
        <div class="detail-movie">
<p><b>Tình trạng:</b> Đang công chiếu</p>
<h2>Your Name</h2>
<p><b>Thể loại:</b> Tình cảm, siêu nhiên</p>
<Link to={{pathname:`/detail/Your Name`}} ><button>MUA VÉ NGAY!</button></Link>
</div>
</div>
</div>
        )
    }
}
export default head;