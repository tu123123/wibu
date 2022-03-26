import React from "react";
import '../social/social.css';
import Thongbao from '../social/thongbao';
import '../../loading/loading.css'
import Content from '../social/content';
import { connect } from "react-redux";
import Load from "../../loading/index";
class social extends React.Component{
    onheight=(a)=>{
        document.querySelector(a).style.height="0px";
        document.querySelector(a).style.padding="0px";
                document.querySelector(a).style.height=`${ document.querySelector(a).scrollHeight}px`;
                document.querySelector(a).style.padding="10px";
                this.setState({
                   newContent:{ content:document.querySelector(a).value,
                   img:this.state.newContent.img,
                   id:`t${this.props.dataRedux.Content.length+1}`}
                }) 
        }
    open=()=>{
        
       let a=document.querySelector('.create div');
        if(document.querySelector('.name-click').innerHTML=="+")
        {document.querySelector('.create').style.borderRadius="0%";
        document.querySelector('.name-click').innerHTML="-";
        document.querySelector('.create').style.height="auto";
        document.querySelector('.create').style.width="400px";
        a.style.transfrom="scaleX(1)";
        document.querySelector('.create-container').style.display="block";

    }
        else{document.querySelector('.name-click').innerHTML="+";
            document.querySelector('.create').style.borderRadius="50%";
                document.querySelector('.create').style.height="90px";
                document.querySelector('.create').style.width="90px";
                document.querySelector('.create-container').style.display="none";
                a.style.transfrom="scaleX(0)";
        }
}
    state={

        file:{
            file:null,
            src:""
        },
        newContent:{
            img:"",
            content:"",
            id:`t${this.props.dataRedux.Content.length+1}`
        },

       
      
    }

    newContent=()=>{
       
        if(this.state.newContent.content!=""){
            this.props.addContent(this.state.newContent);
            this.props.addLoading("Thành Công!")
        }
        this.setState({
            file:{
                file:null,
                src:""
            },
            newContent:{
            content:"",
            img:"",
            id:""}
        })
        this.open();
        document.querySelector(`.text2`).value="";
       
    }
    
    scrollTrend=(a)=>{
        
        var scroll2=document.querySelector(""+a+"");
        var b=document.querySelector(".thongbao-i-i");
        var x=scroll2.scrollLeft;
        scroll2.scrollLeft=x+b.scrollWidth+50;
        
    }
    scrollTrendLeft=(a)=>{
        var scroll2=document.querySelector(""+a+"");
        var b=document.querySelector(".thongbao-i-i");
        var x=scroll2.scrollLeft;
        scroll2.scrollLeft=x-b.scrollWidth-50;
        
    }
    onfileUpdate=(e)=>{
        let img=e.target.files[0];
        let reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState===2){
                this.setState({
                    file:{
                       src:reader.result
                    },
                    newContent:{
                        content:this.state.newContent.content,                       
                        img:reader.result
                    }
            }
                )
        }
           
        
    }
    reader.readAsDataURL(img)
}
    
    render(){
        console.log(this.props.dataRedux.Loading)
        return(<div className="social">
    {localStorage.getItem('user')&&
    <div className="create">
               <h4 className="name-click" onClick={()=>this.open()}>+</h4> 
                <div className="create-container">
                {
                    this.state.file.src!=""?  <img src={this.state.file.src}/>:""
                }
              
                <input multiple  onChange={(e)=>this.onfileUpdate(e)} type='file' className="input-img" accept="image/*"/>
                <h4>HÌNH ẢNH</h4>
                </div>
                <textarea className="text2" onChange={()=>this.onheight(".text2")}></textarea>
                <button onClick={()=>this.newContent()}>Đăng</button>
            </div>
    }
           
        
            <div className="s-background">
            <div className="title-s">KIOKU</div>
            <img src="https://c.wallhere.com/photos/73/9b/city_The_Garden_of_Words_Makoto_Shinkai-90504.jpg!d"/></div>
            <div className="s-thongbao">
            <div onClick={()=>this.scrollTrend('.s-thongbao-c')} className="scrollTrend">
            {">"}
            </div>
            <div onClick={()=>this.scrollTrendLeft('.s-thongbao-c')} class="scrollTrend scrollLeft">
            {"<"}
            </div>
            <h2> Thông báo</h2>
            <div className="s-thongbao-c">
           
            {this.props.dataRedux.Thongbao.map(i=>
                <Thongbao content={i.content} img={i.img} title={i.title}/>
            )}
                
            </div>
            </div>
            {this.props.dataRedux.Content.map(i=>
                <Content content={i.content} img={i.img} text={i.id} link={i.id}/>
            )}
           
            
            <Load/>
            </div>
          
        )
    }
}
const getData=(state)=>{
    return{ 
        dataRedux:state
    }
}
const actionRedux=(dispatch)=>{
    return{
        addContent:(a)=>dispatch({type:"ADD-Content",payload:a}),
        addLoading:(a)=>dispatch({type:"ADD-Loading",payload:a})
    }

}
export default connect(getData,actionRedux)(social)