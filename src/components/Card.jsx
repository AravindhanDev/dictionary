import React, { useState, useEffect, useRef } from "react";

const Card = ({ word }) => {
	const audioRef = useRef();
	const [items, setItems] = useState([]);
	let audio = `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${word}--_gb_1.mp3`;
	useEffect(() => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setItems(data);
			})
			.catch((err) => alert("Please enter valid word"));
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.load();
			audioRef.current.play();
		}
	}, [word]);

	return (
		<div className="Card">
			<div className="part1">
				<div className="word">
					<strong>Word: </strong>
					<span> {items[0]?.word} </span> <br />
				</div>
				<div className="phone">
					<strong>Phonetic: </strong>
					<span>{items[0]?.phonetics[0].text}</span>
				</div>
			</div>
			<div className="part2">
				<div className="origin">
					<strong>Origin: </strong>
					<span>{items[0]?.origin}</span>
				</div>
				<div className="def">
					<strong>Definition: </strong>
					<span>{items[0]?.meanings[0].definitions[0].definition}</span>
				</div>
				<audio controls autoPlay ref={audioRef}>
					<source src={audio} type="audio/mpeg" />
				</audio>
			</div>
		</div>
	);
};

export default Card;
