const contactTabModule = (() => {
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

	tabContainer.appendChild(contactTab);

	return { contactTab, contactInfo };
})();

export { contactTabModule };
