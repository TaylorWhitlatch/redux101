import React, {Component} from 'react';
import { connect } from 'react-redux';


class Students extends Component{

	render(){
		console.log(this.props.students)
		var studentArray = this.props.students.map((student, index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat}</li>)
		})
		return(
			<div>
				<h1>Students Component</h1>
				{studentArray}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		students: state.students
	}
}

export default connect(mapStateToProps)(Students)