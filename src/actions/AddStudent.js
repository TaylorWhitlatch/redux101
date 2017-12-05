export default function AddStudent(studentName){
	console.log("Add Students action is running")
	return{

		type: 'ADD_STUDENT',
		payload: studentName
	}
}