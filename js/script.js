const userId = document.getElementById("userId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const removeBtn = document.getElementById("removeBtn");

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	rootRef.child(userId.value).set({
		first_name: firstName.value,
		last_name: lastName.value,
		age: age.value,
	});
});

updateBtn.addEventListener('click', (e) =>{
	e.preventDefault();
	const newData = {
		age: age.value,
		first_name: firstName.value,
		last_name: lastName.value
	};
	rootRef.child(userId.value).update(newData);
});

removeBtn.addEventListener('click', (e) =>{
	e.preventDefault();
	rootRef.child(userId.value).remove()
	.then(()=>{
		window.alert('user removed from database !');
	})
	.catch(error =>{
		console.error(error);
	});
});

rootRef.orderByKey().on('value', snapshot =>{
	console.log(snapshot.val());
});
