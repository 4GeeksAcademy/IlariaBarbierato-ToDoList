import { func } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [list, setList] = useState([]);
	const [taskHover, setTaskHover] = useState(null);

	const enterPressed = (e) => {
		if (e.key === "Enter") {
			setList(list.concat([inputValue]));
			setInputValue("")
		}
	}

	const deleteTask = (taskIndex) => {
		let listWithoutTask = []
		listWithoutTask = list.filter((task, index) => {
			if (index !== taskIndex) {
				return task
			}
		})
		setList(listWithoutTask)
	}

	return (
		<div className="container mt-5">
			<h1 className="d-flex justify-content-center">todos</h1>
			<div className="card">
					<input type="text" value={inputValue} placeholder="What needs to be done?" onChange={(e) => setInputValue(e.target.value)} onKeyDown={enterPressed} className="card-header border border-0 ps-5" />
				<ul className="list-group list-group-flush">
					{list.map((task, index) =>
						<li className="list-group-item ps-5 d-flex" key={index} onMouseEnter={() => setTaskHover(index)} onMouseLeave={() => setTaskHover(null)}>
							<p className="me-auto mb-0">{task}</p>	
							{taskHover === index ?  <button className="redDeleteButton" onClick={() => deleteTask(index)}> x </button> : ""}
						</li>
					)}
					{list.length === 0 ? <li className="list-group-item ps-5 noTasks">No tasks, add a task</li> : ""}
					<li className="list-group-item fontSizeSmall">{list.length} item left</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
