const contactTabModule = (() => {
	const contactTab = document.createElement('button');
	const contactInfo = document.createElement('p');
	const mapContainer = document.createElement('div');

	contactTab.setAttribute('id', 'contactTab');
	contactTab.className = 'tabs';
	contactTab.textContent = ' Contact';

	contactTab.style.fontSize = '32px';
	contactTab.style.width = '4em';
	contactTab.style.height = '2em';
	contactTab.style.backgroundColor = 'white';
	contactTab.style.margin = 'auto .6em auto .2em';
	contactTab.style.position = 'relative';
	contactTab.style.display = 'inline-flex';
	contactTab.style.justifyContent = 'center';
	contactTab.style.alignItems = 'center';
	contactTab.style.borderRadius = '25px 25px 0px 0px';
	contactTab.style.top = '12px';
	contactTab.style.float = 'right';
	contactTab.style.outline = 'none';
	contactTab.style.borderColor = 'black';

	contactInfo.setAttribute('id', 'contactInfo');
	contactInfo.style.margin = 'auto';
	contactInfo.style.position = 'relative';
	contactInfo.style.textAlign = 'center';
	contactInfo.style.width = '60%';
	contactInfo.style.height = 'auto';
	contactInfo.style.fontSize = '2em';
	contactInfo.style.whiteSpace = 'pre';

	contactInfo.textContent = 'Call:' + '\r\n';
	contactInfo.textContent += '1-800-EAT-RSLF' + '\r\n';
	contactInfo.textContent += '-\r\n';
	contactInfo.textContent += 'Email:' + '\r\n';
	contactInfo.textContent += 'Laboriosam@fuga.inventore' + '\r\n';
	contactInfo.textContent += '-\r\n';
	contactInfo.textContent += 'Address:' + '\r\n';
	contactInfo.textContent += 'House 6, Street 9 ' + '\r\n';
	contactInfo.textContent += 'New Taimani, KL 1005' + '\r\n';
	contactInfo.textContent += 'Afghanistan';

	mapContainer.setAttribute('id', 'mapContainer');
	mapContainer.style.height = '100%';
	mapContainer.style.width = '100%';

	function mapFunction() {
		const mapConfig = {
			center: new google.maps.LatLng(34.551444, 69.148611),
			zoom: 8,
		};
		const myMap = new google.maps.Map(
			document.getElementById('mapContainer'),
			mapConfig
		);
		return mapConfig, myMap;
	}

	tabContainer.appendChild(contactTab);
	contactInfo.appendChild(mapContainer);
	//mapContainer.appendChild(myMap);

	console.log('Contact Tab');
	return { contactTab, contactInfo, mapContainer, mapFunction };
})();

export { contactTabModule };

//AIzaSyBUjw3b_xcqOnsmzUfZ7ayWzqrNjnMKcAo;
