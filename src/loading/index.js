import React from "react";
import {connect} from 'react-redux';
import Load from '../loading/loadItem'
class Loading extends React.Component{
    render() {
        return (
            <div className="loading">
            {this.props.dataRedux.Loading&&this.props.dataRedux.Loading.map(i => i.trangthai?
             <Load img={i.img} class={i.id} trangthai={i.trangthai} link={`t${this.props.dataRedux.Content.length}`}/>:""
            )}
            </div>
        );
    }
}
const getData=(state)=>{
    return{ 
        dataRedux:state
    }
}


export default connect(getData)(Loading)