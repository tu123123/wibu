import React from "react";


export default class social extends React.Component{
    
   
    render(){
        return(
           
                <div className="c-i">
                <div className="s-av"><img src={this.props.img}/></div>
                <div className="comment-i">
                   {this.props.cmt}
                </div>
                </div>
            
            
         
            
          
        )
    }
}