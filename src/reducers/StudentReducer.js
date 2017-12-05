const students = [
{
		name: 'Jason',
		seat: 5
	},
	{
		name: 'Chris',
		seat: 6
	},
	{
		name: 'Saif',
		seat: 7
	},
	{
		name: 'Taylor',
		seat: 8
	}


];


export default function(state = students, action){
	if(action.type === "ADD_STUDENT"){
	console.log(action)
		let newStudents = state.slice();
		newStudents.push({
			name: action.payload
		})
		return newStudents;

	}
	return state;
}