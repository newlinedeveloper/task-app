import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Segment, Label,Header , Icon} from 'semantic-ui-react'


import { Grid } from 'semantic-ui-react'


import ProfileComponent from './profile'
import NotificationComponent from './notification'
import TaskComponent from './task'



class HomeComponent extends Component
{
	render() {

    return(

    	

		    <Grid>
		    	<Router>
			    <Grid.Column width={4}>

			     	<Segment raised style={{margin :"10px"}}>
    	
					   <Label as='a' color='red' ribbon>
			              Profile
			            </Label>

			            

			            
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
			            

					   
					 
			    	</Segment>

			    </Grid.Column>

			    <Grid.Column width={12}>

			    	

			    		<Switch>

		    			  
				          <Route path="/profile">
				            <ProfileComponent/>
				          </Route>

				          <Route path="/notifications">
				            <NotificationComponent />
				          </Route>

				          <Route path="/task">
				            <TaskComponent />
				          </Route>

				          <Route path="/">
				            <ProfileComponent/>
				          </Route>

				        </Switch>

			    	

			      
			      
			      

			    </Grid.Column>

			    </Router>
		    
		  	</Grid>

    		

    	

    	);
  }
}


export default HomeComponent;