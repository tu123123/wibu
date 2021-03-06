import React from "react";
import { Link } from "react-router-dom";
import {data} from "../../../database/firebaseData";
class coming extends React.Component{
    scrollTrendbottom=()=>{
        var scroll2=document.querySelector(".list-item");
        var x=scroll2.scrollTop;
        scroll2.scrollTop=x+100;
        
    }
    scrollTrendtop=()=>{
        var scroll2=document.querySelector(".list-item");
        var x=scroll2.scrollTop;
        scroll2.scrollTop=x-100;
       
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
            <div class="comingSoon">
            <div>PHIM SẮP CHIẾU</div>
            <div class="list-item">
            <div onClick={()=>this.scrollTrendbottom()} class="scrollTrend scrollbottom">
            <div>{">"}</div>
            </div>
            <div onClick={()=>this.scrollTrendtop()} class="scrollTrend scrolltop">
            <div>{">"}</div>
            </div>
            {
                this.state.data.map(i=>
              i.tinhtrang=="Chưa chiếu"?
            <Link to={{pathname:`/detail/${i.name}`}} ><div class="items">
            <div class="img-coming"><img src={i.img} />
            </div>
            <div class="detail">
            <h3>{i.name}</h3>
            <p>Thời gian dự kiến: {i.time}</p>
            
            </div>
            </div></Link>
            :""  
                )
            }
            
            
          
            </div></div>
        )
    }
}
export default coming;