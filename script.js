const descriptions = {
	squirtle: "Squirtle reminds us to protect sea turtles from plastic waste. Scan the QR code to learn more!",
	psyduck: "Psyduck warns about the dangers of water pollution. Scan the QR code to discover ways to help!",
	poliwag: "Poliwag says wetlands are vital for life. Scan the QR code to support wetland conservation!",
	gyarados: "Gyarados roars against overfishing. Scan the QR code to explore sustainable fishing practices!",
	oshawott: "Oshawott highlights the melting ice caps. Scan the QR code to help fight climate change!",
	quagsire: "Quagsire loves healthy ecosystems. Scan the QR code to protect coastal habitats!",
	vaporeon: "Vaporeon warns about coral reef bleaching. Scan the QR code to keep reefs vibrant and alive!",
	greninja: "Greninja wants you to save water. Scan the QR code to learn water conservation tips!"
};
const qrLinks = {
	squirtle: "https://www.projects-abroad.org/blog/how-we-can-help-save-sea-turtles/",
	psyduck: "https://www.nrdc.org/stories/water-pollution-everything-you-need-know",
	poliwag: "https://www.epa.gov/wetlands/why-are-wetlands-important#:~:text=Many%20species%20of%20birds%20and,be%20an%20additional%20wetlands%20function.",
	gyarados: "https://www.seafoodwatch.org/seafood-basics/sustainable-solutions/avoid-overfishing",
	oshawott: "https://www.worldwildlife.org/pages/why-are-glaciers-and-sea-ice-melting",
	quagsire: "https://www.seadocsociety.org/what-is-ecosystem-health#:~:text=A%20healthy%20ecosystem%20is%20one,to%20withstand%20change%20and%20stressors.",
	vaporeon: "https://coral.org/en/blog/what-is-coral-bleaching-and-why-should-you-care/?utm_term=coral%20reef%20bleaching&utm_campaign=CORAL:+Blog&utm_source=adwords&utm_medium=ppc&hsa_acc=7804351857&hsa_cam=20969464292&hsa_grp=158150829516&hsa_ad=688785053994&hsa_src=g&hsa_tgt=kwd-142006712&hsa_kw=coral%20reef%20bleaching&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAu8W6BhC-ARIsACEQoDBGjKTGQCzWUAQVFYcNQcbIEM017ZMBtjipkxbsjLM9ZoI58kJbqbUaAjO6EALw_wcB",
	greninja: "https://friendsoftheearth.uk/sustainable-living/13-best-ways-save-water"
};
let selectedPokemon = null;
function showDescription(pokemon) {
	selectedPokemon = pokemon;
	const description = descriptions[pokemon];
	document.getElementById("description").textContent = description;
	document.getElementById("popup").style.display = "flex";
	const qrImage = document.getElementById('qr-image');
	qrImage.src = `${pokemon}.png`;
	qrImage.alt = pokemon;
	clearQRCode();
}
function closePopup() {
	document.getElementById("popup").style.display = "none";
}
function generateQRCode() {
	if (!selectedPokemon) {
    	alert("Please select a Pokémon first!");
    	return;
	}
	const qrCanvas = document.getElementById('qrcode');
	const qrContent = qrLinks[selectedPokemon];
	clearQRCode();
	QRCode.toCanvas(qrCanvas, qrContent, {
    	width: 200,
    	margin: 2,
    	color: {
        	dark: "#000",
        	light: "#fff" 
    	}
	}, function (error) {
    	if (error) console.error(error);
	});
}
function clearQRCode() {
	const qrCanvas = document.getElementById('qrcode');
	const context = qrCanvas.getContext('2d');
	context.clearRect(0, 0, qrCanvas.width, qrCanvas.height);
}
