import React, { Component } from 'react';

import { Segment, Label,Header , Icon} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";




class NavBarComponent extends Component
{
	render() {

    return(

    	<Segment raised style={{margin :"10px"}}>
    	
		   <Label as='a' color='red' ribbon>
              Profile
            </Label>

            <Router>

            
                <Segment raised color='blue'>
                    <Link to="/profile">
                        <Header as='h4' textAlign='center'>
                            <Icon name='settings' />
                            <Header.Content>Settings</Header.Content>
                        </Header>
                    </Link>
                </Segment>
            

            
                <Segment raised color='blue'>
                    <Link to="/notifications">
                        <Header as='h4' textAlign='center'>
                            <Icon name='alarm' />
                            <Header.Content>Notifications</Header.Content>
                        </Header>
                    </Link>
                </Segment>
            

            

            <Label as='a' color='red' ribbon>
              My Tasks
            </Label>

            
            <Segment raised color='blue'>
                <Link to="/task">
                    <Header as='h4' textAlign='center'>
                        <Icon name='tasks' />
                        <Header.Content>Task 1</Header.Content>
                    </Header>
                </Link>
            </Segment>
           

            
            <Segment raised color='blue'>
                <Link to="/task">
                    <Header as='h4' textAlign='center'>
                        <Icon name='tasks' />
                        <Header.Content>Task 2</Header.Content>
                    </Header>
                </Link>
            </Segment>
            

		   </Router>
		 
    	</Segment>

    	);
  }
}


export default NavBarComponent