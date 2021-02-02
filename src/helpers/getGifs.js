export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=aDIDBV2rSf3xMm39d5KJX3MZRCkpR8i9`;
	const response = await fetch(url);
	const { data } = await response.json();
	const gifs = data.map((item) => {
		return {
			id: item.id,
			title: item.title,
			url: item.images?.downsized_medium.url,
		};
	});
	return gifs;
};
