import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddStudent from '../actions/AddStudent'
 

class Students extends Component{
	constructor(){
		super();
		this.addNewStudent = this.addNewStudent.bind(this)
		
	}


	addNewStudent(){
		const name = document.getElementById('student-name').value
		this.props.addStudent(name)
	}

	render(){
		
	console.log(this.props);
	
		var studentArray = this.props.students.map((student, index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat}</li>)
		});
		return(
			<div>
				<input  id="student-name" type="text" placeholder="Name of Student" />
				<button onClick={this.addNewStudent}>Add Student</button>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addStudent: AddStudent
	}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
