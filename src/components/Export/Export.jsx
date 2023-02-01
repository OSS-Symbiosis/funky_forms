import React from 'react'
import { useState } from 'react';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore'
import './Export.css';

export default function Export() {
	const [entries, setEntries] = useState([]);
	const handleFetch = async () => {
		await getDocs(collection(database, "join_us"))
			.then((querySnapshot) => {
				const newData = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));
				setEntries(newData);
				console.log(entries, newData);
			});
	}
	return (
		<div>
			<div className='entries'>
				<div className='each-entry'>
					<table className='table'>
						<tr>
							<th>Email</th>
							<th>Phone Number</th>
						</tr>
						{entries.map(item => (
							<tr>
								<td className='table-row' key={item.id}>{item.data.email}</td>
								<td className='table-row' key={item.id}>{item.data.phone}</td>
							</tr>
						))
						}
					</table>
				</div>
			</div>
			<button onClick={handleFetch}>Fetch</button>
		</div>
	)
}
