import React from "react";
import './detail.css';
import { withRouter } from "react-router-dom";
import Content from '../content';
import BuyTicker from '../buyTicker';
import Trailer from '../trailer';
import {data} from '../../../database/firebaseData'
class main extends React.Component{
    state={
        data:[]
    }
    componentDidMount(){
        data.collection('movie').get().then((i)=>{
            i.forEach(y=>{
                if(y.data().name==this.props.match.params.id){
                    this.setState({
                        data:[...this.state.data,y.data()]
                    })
                }
                
            })
        })
        
    
    }
   
render(){
    console.log(this.state.data)
  
    return(
        <>
<div class="containerDetail">
{
    this.state.data.map(i=>
        <><img class="bg" src={i.bg}/><div class="containerContent">
        <BuyTicker src={i.img} name={i.name} xuatchieu={i.xuatchieu} soghe={i.soghe}/>
            <div class="imgDetail">
                <img src={i.img} />
            </div>
            
            <Content name={i.name} detail={i.detail} tacgia={i.tacgia} />

        </div>
        <Trailer src={i.trailer}/>
        </>    )
}

</div>
</>
    )
}
}
export default withRouter(main);