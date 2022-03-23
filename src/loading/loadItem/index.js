import React from "react";
import { connect } from "react-redux";

class Load extends React.Component{
    autoScroll=()=>{
        let a=  document.querySelector('.social');
      
        a.scrollTop=a.scrollHeight;
    }
    componentDidMount(){
      
        setTimeout(() => {
            this.autoScroll();
         document.querySelector(`.${this.props.img}`).style.display="block";
         document.querySelector(`.${this.props.class}`).style.backgroundColor="lightgreen";
         document.querySelector(`.${this.props.class} h3`).innerHTML=this.props.trangthai;
            // eslint-disable-next-line no-restricted-globals
            location.href=`#${this.props.link}`;
        }, 1500);
        setTimeout(() => {
        
            document.querySelector(`.${this.props.class}`).style.animation="remove 2s";
           
           }, 3000);
        
           setTimeout(() => {
           
         
         
                this.props.removeLoad(this.props.class);
           
           
           }, 5000);
       
    }
    remove=()=>{
       let a= document.querySelector(`.${this.props.class}`);
        a.remove();
        
    }
    render(){
        console.log(this.props.trangthai)
        return(
            
            <div onClick={()=>this.remove()} className={`load-active ${this.props.class}`}>
            <div className={`load-img ${this.props.img}`}><img src="http://images5.fanpop.com/image/answers/2609000/2609354_1334476643699.22res_400_300.jpg"/></div>
              <h3>LOADDING</h3>
                <div className="load"></div>
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
        removeLoad:(a)=>dispatch({type:"RemoveLoad",payload:a})
    }
}
export default connect(getData,actionRedux)(Load)