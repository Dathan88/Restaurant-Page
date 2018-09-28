const contactTab = (() => {
	const contactTab = document.createElement('button');

	contactTab.setAttribute('id', 'contactTab');
	contactTab.className = 'tabs';
	contactTab.textContent = ' Contact';

	contactTab.style.fontSize = '32px';
	contactTab.style.width = '4em';
	contactTab.style.height = '2em';
	contactTab.style.backgroundColor = 'white';
	contactTab.style.margin = 'auto .2em auto';
	contactTab.style.position = 'relative';
	contactTab.style.display = 'inline-flex';
	contactTab.style.justifyContent = 'center';
	contactTab.style.alignItems = 'center';
	contactTab.style.borderRadius = '25px 25px 0px 0px';
	contactTab.style.top = '12px';
	contactTab.style.float = 'right';
	contactTab.style.outline = 'none';
	contactTab.style.borderColor = 'black';

	tabContainer.appendChild(contactTab);
	console.log('Contact Tab');
})();

export { contactTab };
