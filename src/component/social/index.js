import React from "react";
import '../social/social.css';

export default class social extends React.Component{
   onheight=(a)=>{
    document.querySelector(a).style.height="0px";
            document.querySelector(a).style.height=`${ document.querySelector(a).scrollHeight}px`;
    }
    open=()=>{
        
       let a=document.querySelector('.create div');
        if(document.querySelector('.create').style.height=="90px")
        {document.querySelector('.create').style.borderRadius="0%";
        document.querySelector('.name-click').innerHTML="-";
        document.querySelector('.create').style.height="auto";
        document.querySelector('.create').style.width="400px";
        a.style.transfrom="scaleX(1)";

    }
        else{document.querySelector('.name-click').innerHTML="+";
            document.querySelector('.create').style.borderRadius="50%";
                document.querySelector('.create').style.height="90px";
                document.querySelector('.create').style.width="90px";

                a.style.transfrom="scaleX(0)";
        }
}
    render(){
        return(<div className="social">
            <div className="create">
               <h4 className="name-click" onClick={()=>this.open()}>+</h4> 
                <div className="create-container">
                <h4>HÌNH ẢNH</h4>
                </div>
                <textarea className="text2" onChange={()=>this.onheight(".text2")}></textarea>
                <button>Đăng</button>
            </div>
        
            <div className="s-background">

            <img src="https://i.pinimg.com/originals/2a/5e/11/2a5e11514f1ce16fff1c2a5e93a79f5b.jpg"/></div>
            <div className="s-thongbao">
            <h2> Thông báo</h2>
            <div className="s-thongbao-c">
            <div className="thongbao-i">
                <div className="s-i">
                <img src="https://i.pinimg.com/originals/2a/5e/11/2a5e11514f1ce16fff1c2a5e93a79f5b.jpg"/>
                </div>
                <div className="thongbao-dt">
                    <h3>ANOTHERWORD</h3>
                    <p>On the surface, high school students Naomi Katagaki and Ruri Ichigyou seem to be polar opposites. In contrast to Naomi's shy and timid personality, Ruri strikes fear in her classmates due to being rather cold and outspoken. Nevertheless, both Naomi and Ruri nourish a strong passion for reading, which gradually draws the two closer.</p>
                </div>
            </div>
            </div>
            </div>
            <div className="s-content">
            <div className="s-user">
                <div className="s-av"><img src="https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg"/></div>
                <div className="name"><div>Admin</div>
                </div>
            </div>
            <p>
            HATSUNE MIKU Digital Stars 2022 💚
➡️          https://otakumode.com/fb/hgM
            Only available outside Japan at the TOM Shop - plus, you'll also score a coaster as a special bonus! ✨
            </p>
            <img className="img-c" src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/275853909_5583117571715752_5947335728538211080_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=yvY2ZNnQimMAX99_Lwg&_nc_oc=AQlTrcCfDeHAI_f-zDHAxhHdRRMVuM6oWSS8rID47LinEGEJwQWEiibPXfUIx6u1EOUIh_vfosnNYSB5yXY88Wp4&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8dfSZcBgghCQRgunKdgWOEqh9NXngznqC3qUAZ65mNYQ&oe=623754BA" />
            <div className="comment">
            <div className="input">
                <div><textarea onChange={()=>this.onheight(".text")} className="text"></textarea></div>
                <div><button>Gửi</button></div></div>
                <div className="c-i">
                <div className="s-av"><img src="https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg"/></div>
                <div className="comment-i">
                    Hình đẹp quá
                </div>
                </div>
            </div>
            
            </div>
            </div>
          
        )
    }
}