import React, { Component } from 'react';

import { Segment, Label, Grid, Header } from 'semantic-ui-react'
import { Form, Button,  Dropdown, Checkbox, TextArea} from 'semantic-ui-react'



class TaskComponent extends Component
{
	

	render() {

		const sourceOptions = [
		  {
		    key: 'Source 1',
		    text: 'Source 1',
		    value: 'Source 1'
		   
		  },
		  {
		    key: 'Source 2',
		    text: 'Source 2',
		    value: 'Source 2'
		  },

		  {
		    key: 'Source 3',
		    text: 'Source 3',
		    value: 'Source 3'
		  },

		  {
		    key: 'Source 4',
		    text: 'Source 4',
		    value: 'Source 4'
		  }
		
		]

	const targetOptions = [
		  {
		    key: 'Target 1',
		    text: 'Target 1',
		    value: 'Target 1'
		   
		  },
		  {
		    key: 'Target 2',
		    text: 'Target 2',
		    value: 'Target 2'
		  },

		  {
		    key: 'Target 3',
		    text: 'Target 3',
		    value: 'Target 3'
		  },

		  {
		    key: 'Target 4',
		    text: 'Target 4',
		    value: 'Target 4'
		  }
		
		]

    return(

    	<Segment raised style={{margin :"50px"}} color="blue">
    	
    		<Label as='a' color='blue' ribbon>
	          Task 1
	        </Label>

	         <Form style={{margin :"30px"}}>

	         <Grid columns={2} >

			    <Grid.Row style={{marginLeft :"20px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Source Name
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Dropdown
					    placeholder='Select source'
					    fluid
					    selection
					    options={sourceOptions}
					  />
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row style={{marginLeft :"20px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Enable Logging
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment compact>
				      <Checkbox />
				    </Segment>
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row style={{marginLeft :"20px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Provide SQL
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment compact>
				      <TextArea placeholder='Provide SQL Here' />
				    </Segment>
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row style={{marginLeft :"20px"}}>
			      <Grid.Column>
			        <Segment raised>
			        	<Header as='h4' textAlign='center'>
					      Target Results
					    </Header>
				      
				    </Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Dropdown
					    placeholder='Select source'
					    fluid
					    selection
					    options={targetOptions}
					  />
			      </Grid.Column>
			    </Grid.Row>
			  </Grid>
			    

			    <div style={{marginLeft: "100px"}}>
			    	<Button color='red' style={{margin: "20px"}}>Cancle</Button>
    				<Button color='blue' style={{margin: "20px"}}>submit</Button>
    				<Button color='orange' style={{margin: "20px"}}>Validate</Button>
			    </div>

			</Form>


    	</Segment>

    	);
  }
}


export default TaskComponent;