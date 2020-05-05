import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Segment, Label } from 'semantic-ui-react'
import { Form, Input, Button, Grid,Header} from 'semantic-ui-react'



class ProfileComponent extends Component
{
	state = {
	    startDate: new Date()
	  };
	 
	  handleChange = date => {
	    this.setState({
	      startDate: date
	    });
	  };

	render() {

	

    return(

    	<Segment raised style={{margin :"50px"}} color="blue">
    		
    		<Label as='a' color='blue' ribbon>
	          Profile Info
	        </Label>

	        <Form style={{margin :"50px"}}>

	        	<Grid columns={2} >
	        		
	        		<Grid.Row style={{marginLeft :"50px"}}>
				    	<Grid.Column>
					        <Segment raised>
					        	<Header as='h4' textAlign='center'>
							      Username
							    </Header>
						    </Segment>
					    </Grid.Column>
					    <Grid.Column>
				        	<Input icon='user' iconPosition='left' max={30} placeholder="username" />
					  	</Grid.Column>
					</Grid.Row>

				    <Grid.Row style={{marginLeft :"50px"}}>
				      <Grid.Column>
				        <Segment raised>
				        	<Header as='h4' textAlign='center'>
						      Date Of Birth
						    </Header>
					      
					    </Segment>
				      </Grid.Column>
				      <Grid.Column>

				      	<DatePicker 
				      		 dateFormat="yyyy/MM/dd"
					        selected={this.state.startDate}
					        onChange={this.handleChange}
					     />
				        
					      
					    
				      </Grid.Column>
				    </Grid.Row>

				    <Grid.Row style={{marginLeft :"50px"}}>
				      <Grid.Column>
				        <Segment raised>
				        	<Header as='h4' textAlign='center'>
						      Profession 
						    </Header>
					      
					    </Segment>
				      </Grid.Column>
				      <Grid.Column>
				        
					      <Input icon='address book' iconPosition='left' max={30} placeholder='Profession'/>
					    
				      </Grid.Column>
				    </Grid.Row>

				    <Grid.Row style={{marginLeft :"50px"}}>
				      <Grid.Column>
				        <Segment raised>
				        	<Header as='h4' textAlign='center'>
						      Designation 
						    </Header>
					      
					    </Segment>
				      </Grid.Column>
				      <Grid.Column>
				        
					      <Input icon='address book outline' iconPosition='left' max={30} placeholder='Designation' />
					    
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


export default ProfileComponent