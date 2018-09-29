const contactTab = (() => {
	const contactTab = document.createElement('button');
	const contactInfo = document.createElement('p');

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

	contactTab.addEventListener('click', function() {
		homeTab.style.backgroundColor = 'white';
		homeTab.style.color = 'black';

		menuTab.style.backgroundColor = 'white';
		menuTab.style.color = 'black';

		contactTab.style.backgroundColor = 'black';
		contactTab.style.color = 'white';

		infoContainer.removeChild(infoContainer.firstChild);
		infoContainer.appendChild(contactInfo);
	});

	contactInfo.setAttribute('id', 'contactInfo');
	contactInfo.style.margin = 'auto';
	contactInfo.style.position = 'relative';
	contactInfo.style.textAlign = 'center';
	contactInfo.style.width = '60%';
	contactInfo.style.height = 'auto';
	contactInfo.style.fontSize = '2em';
	contactInfo.style.textIndent = '50px';
	contactInfo.style.whiteSpace = 'pre-line';

	contactInfo.textContent = '1-800-EAT-RSLF';

	tabContainer.appendChild(contactTab);

	console.log('Contact Tab');
	return { contactTab, contactInfo };
})();

export { contactTab };
