import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ItemCard, ItemCardPlanets } from "./ItemCard";
const url = "https://www.swapi.tech/api";
export const Home = () => {
	const [characters, setCharaters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const getCharacters = async () => {
		const response = await fetch(`${url}/people`);
		if (response.ok) {
			const body = await response.json();
			setCharaters(body.results);
		}
	};
	const getPlanets = async () => {
		const response = await fetch(`${url}/planets`);
		if (response.ok) {
			const body = await response.json();
			setPlanets(body.results);
		}
	};
	const getVehicles = async () => {
		const response = await fetch(`${url}/vehicles`);
		if (response.ok) {
			const body = await response.json();
			setVehicles(body.results);
		}
	};
	useEffect(() => {
		getCharacters();
		getPlanets();
		getVehicles();
	}, []);

	return (
		<>
			<div className="container">
				<h2>Characters</h2>
				<div className="d-flex flex-nowrap flex-row overflow-auto">
					{characters.map((character, index) => {
						return <ItemCard key={index} item={character} resource={"people"} />;
					})}
				</div>
				<h2>Planets</h2>
				<div className=" d-flex flex-nowrap flex-row overflow-auto">
					{planets.map((planet, index) => {
						return <ItemCard key={index} item={planet} resource={"planets"} />;
					})}
				</div>
				<h2>Vehicles</h2>
				<div className="d-flex flex-nowrap flex-row overflow-auto">
					{vehicles.map((vehicle, index) => {
						return <ItemCard key={index} item={vehicle} resource={"vehicles"} />;
					})}
				</div>
			</div>
		</>
	);
};
