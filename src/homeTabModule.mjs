const homeTab = (() => {
	const homeTab = document.createElement('button');

	homeTab.setAttribute('id', 'homeTab');
	homeTab.className = 'tabs';

	homeTab.textContent = ' Home';
	homeTab.style.fontSize = '32px';
	homeTab.style.width = '4em';
	homeTab.style.height = '2em';
	homeTab.style.backgroundColor = 'white';
	homeTab.style.margin = 'auto .2em auto';
	homeTab.style.position = 'relative';
	homeTab.style.display = 'inline-flex';
	homeTab.style.justifyContent = 'center';
	homeTab.style.alignItems = 'center';
	homeTab.style.borderRadius = '25px 25px 0px 0px';
	homeTab.style.top = '12px';
	homeTab.style.float = 'right';
	homeTab.style.outline = 'none';
	homeTab.style.borderColor = 'black';

	tabContainer.appendChild(homeTab);

	console.log('Home Tab');
	return { homeTab };
})();

export { homeTab };
