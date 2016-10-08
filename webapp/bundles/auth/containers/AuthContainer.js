import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/index'

var AuthContainer = React.createClass( {
	componentDidMount: function(){

	},
	propTypes: {

	},
	render : function() {

		return (
		  <div className="authContainer" >
				I am the container
		  </div>
		)
	}
});

function mapStateToProps(state) {
  return {
			/* examplePropertie : state.example.examplePropertie */
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
