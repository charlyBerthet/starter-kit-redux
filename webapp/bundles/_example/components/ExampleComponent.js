import React, { PropTypes, Component } from 'react'


var ExampleComponent = React.createClass( {
	componentDidMount: function(){

	},
	propTypes: {
    /*propertieX : PropTypes.array.isRequired*/
	},
	getInitialState : function(){
		return {

		};
	},
	render : function() {
		return (
		  <div className="exampleComponent" >
				I am an example
		  </div>
		)
	}
});



export default ExampleComponent
