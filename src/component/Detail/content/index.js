import React from "react";

class ct extends React.Component{
    state={
        movie:[{
            id:200000
        }]
     
    }
    bt=()=>{
        document.querySelector('.trailer').style.display="none"
        document.querySelector('.b-t').style.display="flex";
    }
    openTrailer=()=>{
        document.querySelector('.trailer').style.display=="block"?
        document.querySelector('.trailer').style.display="none":
        document.querySelector('.trailer').style.display="block";
    }
    add=async()=>{
         await fetch('http://localhost:8000/movie/b',{
            method:'PUT',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                S:"this.state.movie"
            }
               
            )
        })
        .then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
    }
render(){
    return(

<div class="content">
<p><b>Tên phim: </b>{this.props.name}</p>
<p><b>Tác giả:  </b>{this.props.tacgia}</p>
<p><b>Nội dung:  </b>{this.props.detail}</p>
<button onClick={()=>this.bt()}> Đặt vé</button><button  onClick={()=>this.openTrailer()}>TRAILER</button>
</div>


    )
}
}
export default ct;