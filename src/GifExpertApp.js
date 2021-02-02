import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);
	return (
		<div>
			<h2 className="animate__animated animate__fadeIn">GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<div>
				{categories.map((item) => {
					return <GifGrid category={item} key={item} />;
				})}
			</div>
		</div>
	);
};

export default GifExpertApp;
