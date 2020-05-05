import React, { Component } from 'react';

import { Segment, Label, Grid, Header } from 'semantic-ui-react'
import { Form, Button, Radio } from 'semantic-ui-react'



class NotificationComponent extends Component
{
	render() {

    return(

    	<Segment raised style={{margin :"50px"}} color="blue">
    		
    		<Label as='a' color='blue' ribbon>
	          Notification settings
	        </Label>

	         <Form style={{margin :"50px"}}>

	         <Grid columns={2} >

			    <Grid.Row style={{marginLeft :"50px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Send all alerts
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment compact>
				      <Radio toggle />
				    </Segment>
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row style={{marginLeft :"50px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Alerts Only Task Success
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment compact>
				      <Radio toggle />
				    </Segment>
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row style={{marginLeft :"50px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Alerts Only For Failed Tasks 
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment compact>
				      <Radio toggle />
				    </Segment>
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row style={{marginLeft :"50px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      I Don't Want Any Alerts 
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment compact>
				      <Radio toggle />
				    </Segment>
			      </Grid.Column>
			    </Grid.Row>
			  </Grid>
			    

			    <div style={{marginLeft: "200px"}}>
			    	<Button color='red' style={{margin: "20px"}}>Cancle</Button>
    				<Button color='blue' style={{margin: "20px"}}>submit</Button>
			    </div>

			</Form>

    	</Segment>

    	);
  }
}

export default NotificationComponent