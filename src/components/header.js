import React, { Component } from 'react';


import { Segment,Grid, Header,Icon } from 'semantic-ui-react'



class HeaderComponent extends Component
{
	render() {

    return(

    	<Segment raised style={{marginTop :"20px"}}>

			

			<Grid columns='equal'>

			    <Grid.Row>

			      <Grid.Column width={12}>
			        <Header as="h1" color="blue" style={{marginLeft:"20px"}}>Jupiter</Header>
			      </Grid.Column>

			      <Grid.Column >
			         <Header as='h3'>
					    <Icon name='user' />
					    <Header.Content>Veera</Header.Content>
					  </Header>
			      </Grid.Column>

			    </Grid.Row>

			    
			</Grid>

		</Segment>

    	

    	);
  }
}


export default HeaderComponent;