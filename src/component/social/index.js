import React from "react";
import '../social/social.css';
import Thongbao from '../social/thongbao';
import Content from '../social/content';
export default class social extends React.Component{
    onheight=(a)=>{
        document.querySelector(a).style.height="0px";
        document.querySelector(a).style.padding="0px";
                document.querySelector(a).style.height=`${ document.querySelector(a).scrollHeight}px`;
                document.querySelector(a).style.padding="10px";
                this.setState({
                   newContent:{ content:document.querySelector(a).value,
                    id:`t${this.state.Content.length+1}`}
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
        file:null,
        newContent:{
            img:"",
            content:"",
            id:""
        },
        user:{
            id:1,
            name:"admin",
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSz8wBuJJTefVDZLyw0jNEXrEFRhHRFqnRixNzycZNDXimZyzTdrRzU9F49J8X61-yg5k&usqp=CAU",
        },
       Thongbao:[
            {   
                title:"ANOTHERWORD",
                content:"On the surface, high school students Naomi Katagaki and Ruri Ichigyou seem to be polar opposites. In contrast to Naomi's shy and timid personality, Ruri strikes fear in her classmates due to being rather cold and outspoken. Nevertheless, both Naomi and Ruri nourish a strong passion for reading, which gradually draws the two closer",
                img:"https://i.pinimg.com/originals/2a/5e/11/2a5e11514f1ce16fff1c2a5e93a79f5b.jpg"
            },
            {   
                title:"Doraemon: Nobita no Little Star Wars 2021",
                content:"Doraemon: Nobita no Little Wars 2021 là bộ phim điện ảnh Nhật Bản thứ 41 trong loạt phim điện ảnh Doraemon do Yamaguchi Susumu đạo diễn và Satō Dai viết kịch bản. Phim dự kiến khởi chiếu tại Nhật Bản vào ngày 4 tháng 3 năm 2022",
                img:"https://upload.wikimedia.org/wikipedia/vi/0/0e/Little_Star_Wars_2021.jpg"
            }
       ],
        Content:[
            {
                id:"t1",
                content:"HATSUNE MIKU Digital Stars 2022 💚  ➡️ https://otakumode.com/fb/hgM    Only available outside Japan at the TOM Shop - plus, you'll also score a coaster as a special bonus! ✨",
                img:"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/275853909_5583117571715752_5947335728538211080_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=yvY2ZNnQimMAX99_Lwg&_nc_oc=AQlTrcCfDeHAI_f-zDHAxhHdRRMVuM6oWSS8rID47LinEGEJwQWEiibPXfUIx6u1EOUIh_vfosnNYSB5yXY88Wp4&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8dfSZcBgghCQRgunKdgWOEqh9NXngznqC3qUAZ65mNYQ&oe=623754BA"
            },
            { id:"t2",
                content:"ăn cơm không biết ngày mai ra sao",
                img:"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/275853909_5583117571715752_5947335728538211080_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=yvY2ZNnQimMAX99_Lwg&_nc_oc=AQlTrcCfDeHAI_f-zDHAxhHdRRMVuM6oWSS8rID47LinEGEJwQWEiibPXfUIx6u1EOUIh_vfosnNYSB5yXY88Wp4&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8dfSZcBgghCQRgunKdgWOEqh9NXngznqC3qUAZ65mNYQ&oe=623754BA"
            }
        ]
    }

    newContent=()=>{
        if(this.state.content!=""){
            this.setState({
            
                Content:[...this.state.Content,this.state.newContent]
            })
        }
        this.setState({
            newContent:[]
        })
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
    onfileUpdate=()=>{
        const data= new FormData();
    }
    render(){
        return(<div className="social">
            <div className="create">
               <h4 className="name-click" onClick={()=>this.open()}>+</h4> 
                <div className="create-container">
                <input type='file' className="input-img"/>
                <h4>HÌNH ẢNH</h4>
                </div>
                <textarea className="text2" onChange={()=>this.onheight(".text2")}></textarea>
                <button onClick={()=>this.newContent()}>Đăng</button>
            </div>
        
            <div className="s-background">

            <img src="https://i.pinimg.com/originals/2a/5e/11/2a5e11514f1ce16fff1c2a5e93a79f5b.jpg"/></div>
            <div className="s-thongbao">
            <div onClick={()=>this.scrollTrend('.s-thongbao-c')} className="scrollTrend">
            {">"}
            </div>
            <div onClick={()=>this.scrollTrendLeft('.s-thongbao-c')} class="scrollTrend scrollLeft">
            {"<"}
            </div>
            <h2> Thông báo</h2>
            <div className="s-thongbao-c">
           
            {this.state.Thongbao.map(i=>
                <Thongbao content={i.content} img={i.img} title={i.title}/>
            )}
                
            </div>
            </div>
            {this.state.Content.map(i=>
                <Content content={i.content} img={i.img} text={i.id}/>
            )}
           
            
            
            </div>
          
        )
    }
}