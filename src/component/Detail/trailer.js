import React from "react";

class trailer extends React.Component{

    render(){
        return(
            <div className="trailer">
              <iframe src={this.props.src}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
            </div>
        )
    }
}
export default trailer;