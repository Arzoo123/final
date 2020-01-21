import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CardList from './Cardlist/card_details'
import './../css/style_button.css'
import './../css/style.css'

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {'data': [
            {
              "id": 1,
              "first_name": "Scarlett",
              "last_name": "D'Souza",
              "email": "sc123@gmail.com",
              "gender": "Female",
              "ip_address": "190.25.39.10"
            },
            {
              "id": 2,
            "first_name": "Beatriz",
            "last_name": "Linna",
            "email": "Blinnaxyz@rediff.com",
            "gender": "Female",
            "ip_address": "39.54.4.77"
            },
            {
              "id": 3,
              "first_name": "Josephine",
              "last_name": "Faina",
              "email": "jeffaina@yahoo.com",
              "gender": "Female",
              "ip_address": "120.21.56.98"
            },
            {
              "id": 4,
              "first_name": "Apollonia ",
              "last_name": "Francis",
              "email": "francisapollo@gmail.com",
              "gender": "Female",
              "ip_address": "140.32.45.67"
            },
            {
              "id": 5,
            "first_name": "Kinley",
            "last_name": "McGrath",
            "email": "kinley24@yahoo.com",
            "gender": "Male",
            "ip_address": "178.45.78.98"
            },
          
          {
            "id": 6,
          "first_name": "Amara",
          "last_name": "penelope",
          "email": "amarap123@yahoo.com",
          "gender": "Female",
          "ip_address": "123.67.98.345"
         },
        {
          "id": 7,
          "first_name": "Nairobi",
          "last_name":"Berlin",
          "email": "nairober567@abc.com",
          "gender": "Female",
          "ip_address": "199.47.88.44"  
        }]}
    }

    render() {
        return (
            <div>
            <div>{this.state.data.map((user) =>   <ul>
              
                
                {/* <li>{user.first_name}</li>
                <li>{user.last_name}</li>
                <li>{user.gender}</li>
                <li>{user.email}</li>
                <li>{user.ip_address}</li> */}
                 <CardList userData={user}/>
                 {/* <li><Link to={`user/${user.id}/`}>CLICK HERE TO KNOW MORE</Link></li> */}
                </ul>)}

                </div>
                <button class="button button--ujarak main--btn"><Link className='link' to ='/' >HOME</Link></button>
          </div>
        )
    }
}


export default Users;
