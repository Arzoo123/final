import React from 'react';

import {Link} from 'react-router-dom';


class CardMain extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
        <div >
              
        Name =( `{this.props.userData.first_name} {this.props.userData.last_name}`)
          <Link to={`user/${this.props.userData.id}/`}>CLICK HERE TO KNOW MORE</Link>
         
      </div>)
    }
}
export default CardMain;