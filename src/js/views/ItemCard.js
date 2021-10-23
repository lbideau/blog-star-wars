import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ItemCard = ({ item, resource }) => {
	return (
		<>
			<div className="container">
				<div className="card" style={{ width: "18rem" }}>
					<img
						src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
						style={style}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<Link to={`/single/${item.uid}/${resource}`} className="btn btn-primary">
							Ver Más
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
const style = {
	width: "350px",
	height: "200px"
};

ItemCard.propTypes = {
	item: PropTypes.object,
	resource: PropTypes.oneOf(["people", "planets", "vehicles"])
};
