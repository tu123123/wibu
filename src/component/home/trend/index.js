import React from "react";
import { Link } from "react-router-dom";
class trend extends React.Component{
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
            {
                
            }
        ]
    }
    componentDidMount(){
        
        fetch("http://localhost:8000/movie")
        .then(res=>{
            return res.json()
               })
        .then(res=>{
                this.setState({
                    data:res
                })
                
                   }) 
    
    }
    render(){
        setInterval(() => {
            var scroll2=document.querySelector(".list-trend");
        var x=scroll2.scrollLeft;
        if( x>scroll2.scrollWidth){
            scroll2.scrollLeft=0;
        }
        else{
            scroll2.scrollLeft=x+269; 
        }
       
        }, 3000);
        return(
            <div  class="trending">

            <div>Trending</div>
            <div onClick={()=>this.scrollTrend('.list-trend')} className="scrollTrend">
            {">"}
            </div>
            <div onClick={()=>this.scrollTrendLeft('.list-trend')} class="scrollTrend scrollLeft">
            {"<"}
            </div>
            <div class="list-trend">
            {this.state.data.map(i=>
               
            <div class="item-trend">
            <img src={i.img}/>
            <div class="detail-trend">
            <p><b>Tình trạng:</b> {i.tinhtrang}</p>
            <h2>{i.name}</h2>
            <p><b>Thể loại:</b> {i.theloai}</p>
            <Link to={{pathname:`/detail/${i.name}`}} ><button>MUA VÉ NGAY!</button> </Link>
            </div>
            </div>
           
            )}
            
            </div>
           
            </div>
        )
    }
}
export default trend;