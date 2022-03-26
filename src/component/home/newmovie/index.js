import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../../database/firebaseData";
class newmovie extends React.Component{
    scrollTrend=(a)=>{
        var scroll2=document.querySelector(""+a+"");
        var x=scroll2.scrollLeft;
        scroll2.scrollLeft=x+269;
        
    }
    scrollTrendLeft=(a)=>{
        var scroll2=document.querySelector(""+a+"");
        var x=scroll2.scrollLeft;
        scroll2.scrollLeft=x-269;
        
    }
    state={
        data:[
           
        ]
    }
    componentDidMount(){
     data.collection('movie').get().then((i)=>{
         i.forEach(y=>{
             this.setState({
                 data:[...this.state.data,y.data()]
             })
         })
     })
    }
    render(){
        return(
            <div class="newMovie">
<div>PHIM ĐANG CHIẾU</div>
<div onClick={()=>this.scrollTrend('.newMovie .list-trend')} className="scrollTrend">
            {">"}
            </div>
            <div onClick={()=>this.scrollTrendLeft('.newMovie .list-trend')} class="scrollTrend scrollLeft">
            {"<"}
            </div>
<div class="list-trend">
{this.state.data.map(i=>
i.tinhtrang!="Chưa chiếu"?

            <div class="item-trend">
            <img src={i.img}/>
            <div class="detail-trend">
            <h2>{i.name}</h2>
            <p><b>Tình trạng:</b> {i.tinhtrang}</p>
            
            <p><b>Thể loại:</b> {i.theloai}</p>
            <Link to={{pathname:`/detail/${i.name}`}} ><button>MUA VÉ NGAY!</button></Link>
            </div>
            </div>  :""
          )}

</div>
</div>

        )
    }
}
export default newmovie;