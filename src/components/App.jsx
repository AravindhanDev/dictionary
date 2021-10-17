import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
	const [input, setInput] = useState("");
	const [word, setWord] = useState("think");

	const handleChange = (event) => {
		const val = event.target.value;
		setInput(val);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setWord(input);
		setInput("");
	};

	return (
		<div className="App">
			<header>
				<h2>Open Dictionary</h2>
			</header>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={handleChange}
						value={input}
						placeholder="type the word..."
					/>
					<button>Find</button>
				</form>
				<Card word={word} />
			</div>
			<footer>Copyright &copy; Noobie</footer>
		</div>
	);
}

export default App;
