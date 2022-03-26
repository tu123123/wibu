import React from "react";
import Comment from '../content/comment'

export default class social extends React.Component{
    state={
        user:{
            id:1,
            img:"https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg",
    },
        content:"",
        comment:[
           
            { user:{
                id:1,
                img:"https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg",
        },
                id:1,
                cmt:"đẹp quá",
            }
            
        ]
    }
   
    onheight=(a)=>{
        document.querySelector(a).style.height="0px";
        document.querySelector(a).style.padding="0px";
                document.querySelector(a).style.height=`${ document.querySelector(a).scrollHeight}px`;
                document.querySelector(a).style.padding="10px";
            this.setState({
                content:document.querySelector(a).value
            })
           
            }
 
    newCmt=()=>{
      
        if(this.state.content!=""){
            
            this.setState({
                comment:[
                    ...this.state.comment,{ user:{
                        id:this.state.user.id,
                        img:this.state.user.img,
                },
                        id:1,
                        cmt:this.state.content,
                    },
                ]
            })
        }
        this.setState({
            content:""
        })
        document.querySelector(`.${this.props.text}`).value="";
        document.querySelector(`.${this.props.text}`).style.height="0px";
            document.querySelector(`.${this.props.text}`).style.padding="0px";
                    document.querySelector(`.${this.props.text}`).style.height=`${ document.querySelector(`.${this.props.text}`).scrollHeight}px`;
                    document.querySelector(`.${this.props.text}`).style.padding="10px";
       
    }
    render(){
        
        return(
            <div className="s-content" id={this.props.link}>
            <div className="s-user">
                <div className="s-av"><img src="https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg"/></div>
                <div className="name"><div>Admin</div>
                </div>
            </div>
            <p>
            {this.props.content}
            </p>
            <img className="img-c" src={this.props.img} />
            <div className="comment">
            {localStorage.getItem('user')&&
            <div className="input">
           
                <div><textarea onChange={()=>this.onheight(`.${this.props.text}`)} className={this.props.text}></textarea></div>
                <div><button onClick={()=>this.newCmt()}>Gửi</button></div></div>
        }
            
                {this.state.comment.map(i=>
                
                <Comment img={i.user.img} cmt={i.cmt}/>
                )}
         
            </div>
            
            </div>
            
          
        )
    }
}