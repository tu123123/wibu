import React from "react";


export default class social extends React.Component{
  
    
    render(){
        return(
            <div className="thongbao-i-i">
            <div className="thongbao-i">
                <div className="s-i">
                <img src={this.props.img}/>
                </div>
                <div className="thongbao-dt">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
            </div>
           
          
        )
    }
}