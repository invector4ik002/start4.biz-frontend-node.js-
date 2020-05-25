import { PROPOSAL_CHANGE_STEP, 
	PROPOSAL_CHANGE_SUCCESS, 
	PROPOSAL_FORM_SHOW, 
	PROPOSAL_FORM_HIDE,
	PROPOSAL_REQUEST_STARTED,
	PROPOSAL_REQUEST_SUCCESS,
	PROPOSAL_REQUEST_FAILURE,
 } from "./../types";

export const proposalChangeStep = (newStep) =>{
	return {
		type: PROPOSAL_CHANGE_STEP,
		payload: newStep
	}
}

export const proposalChangeSuccess = (success) =>{
	return {
		type: PROPOSAL_CHANGE_SUCCESS,
		payload: success
	}
}

export const proposalFormShow = () =>{
	return {
		type: PROPOSAL_FORM_SHOW,
	}
}

export const proposalFormHide = () =>{
	return {
		type: PROPOSAL_FORM_HIDE,
	}
}

// export const proposalRequest = (formData) =>{
// 	// return dispatch => {
// 	// 	dispatch(addTodoStarted());
	
// 	// 	axios
// 	// 	  .post(`https://jsonplaceholder.typicode.com/todos`, {
// 	// 		title,
// 	// 		userId,
// 	// 		completed: false
// 	// 	  })
// 	// 	  .then(res => {
// 	// 		dispatch(addTodoSuccess(res.data));
// 	// 	  })
// 	// 	  .catch(err => {
// 	// 		dispatch(addTodoFailure(err.message));
// 	// 	  });
// 	//   };
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(formData),
// 	}
// 	return dispatch => {
// 		fetch('http://api.bastronva.beget.tech/request', options).then(response=>{
// 			console.log(response);
// 		})
// 	}
// }

// export const proposalRequest = async (url, method = "POST", data = null) => {
// 	try {
// 		const headers = {};
// 		let body

// 		if(data) {
// 			headers['Content-Type'] = 'application/json';
// 			body = JSON.stringify(data);
// 		}

// 		const response = await fetch(url, {
// 			method,
// 			headers,
// 			body
// 		});
// 		return await response.json();
// 	} catch (e) {
// 		console.warn('Error', e.message);
// 	}
// }

// export const proposalRequest = async (formData) => {
// 	try {
// 		console.log("run request");
// 		const options = {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(formData),
// 		}

// 		const response = await fetch('http://api.bastronva.beget.tech/request', options);
// 		return await response.json();
// 	} catch (e) {
// 		console.warn('Error', e.message);
// 	}
// }

export const proposalRequest = (formData) => {
	console.log("run request ", formData);
	// const body = {
	// 	status: false,
	// 	data: formData,
	// }
	
	const options = {
		method: 'POST',
//		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			// 'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
//			'Access-Control-Allow-Methods': "POST",
			// 'Accept': 'application/json',
			// 'Accept': '*/*',
			// 'Connection': 'keep-alive',
		},
		body: JSON.stringify(formData),
		// redirect: 'follow',
	}

	console.log("data ", options.body);

	return dispatch => fetch('/api/auth/register', options)
	.then(response => {
		console.log(response);
		if (response.status === 200) {
			dispatch(proposalChangeSuccess(true));
		} else {
			console.log(response)
			// alert ("Произошла ошибка при отправке данных!");
		}
	})
    .catch(error => console.log("Error ", error))

}

const proposalRequestStarted = () => {
	return {
		type: PROPOSAL_REQUEST_STARTED
	}
}

const proposalRequestSuccess = () => {
	return {
		type: PROPOSAL_REQUEST_SUCCESS
	}
}

const proposalRequestFailure = () => {
	return {
		type: PROPOSAL_REQUEST_FAILURE
	}
}