import React from 'react';

import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './../css/style_button.css'


class UserDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {'data': [{
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
          } ],
          'showme':           {
            "id": null,
            "first_name": null,
            "last_name": null,
            "email": null,
            "gender": 'm',
            "ip_address": null
          }
        };
    }

    componentWillMount(){
        let id = this.props.match.params.Id;
        
        for (let i=0; i<this.state.data.length; i++){
            if (this.state.data[i].id == id){
                this.setState({'showme': this.state.data[i]})
            }
            else{
                console.log('not found')
            }
        }
    }

    render() {
        return (
          <div>
            <div className='container user' >
                <Card style={{ width: '30rem' }}  className='jumbotron'>
                <Card.Body>
                <Card.Title>NAME={this.state.showme.first_name} {this.state.showme.last_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">EMAIL={this.state.showme.email}</Card.Subtitle>
                <Card.Text>
                    GENDER={this.state.showme.gender}<br />
                    IP ADDRESS={this.state.showme.ip_address}
                </Card.Text>
                <button class="button button--ujarak"><Link className='link' to ='/' >HOME</Link></button>
              
                  <button class="button button--ujarak"> <Link className='link' to ='/user' >BACK</Link></button>
            
                </Card.Body>
                </Card>              
              </div>
            
              
           
       
            </div>
        )
    }

}


export default Details;