import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getItems, updateItems, deleteItems } from '../services/api-greeting';

/*The GretingsList Component .]
 This GretingsList component will be made up of three smaller GretingsList*/


/*a method to return all the greetings from the database
 and pass in an array to the GretingsList as a prop and each 
 of the GretingsList components will just map this array to a list*/
const GreetingsList = () => {
	const [items, setItems] = useState();
	//const [itemId, setItemId] = useState(null);

	/*this method retrieve all greetings from the API */

	const fetchGreetings = async() => {
		getItems().then((response) => {
			setItems(response.data);
			//console.log(response.data)
		})
		
	}

	const deleteGreeting = (itemId) => {
		deleteItems()
		            .then(console.log("Deleted"))
		            .catch(err => console.log(err));
	}

	//setItems(prevState => prevState.filter(id !== itemId));

	const renderDeletedItems = () => {
		<div>
		    {items && items.map(item => {
		          return 
		            <div key={item.id}>
		              <button 
		                className="btn danger" 
		                onClick={() => deleteGreeting(item.id)}
		              > Delete
		              </button>
		            </div>;
		        })};
		     renderGreetings();

		</div>
	}




	const renderGreetings = () => {

		return(
			<div>
		      {items && items.map(item => {
		          return <div key={item.id}>{item.content}</div>;
		        })}
		    </div>
		);
	}

	useEffect(() => {
		fetchGreetings()
	}, [])

	return (
		<div>
		    <li className="col">
		       {renderGreetings()}
			</li>
		</div>
	);
};

export default GreetingsList;