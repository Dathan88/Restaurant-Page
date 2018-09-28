const menuTab = (() => {
	const menuTab = document.createElement('button');

	menuTab.setAttribute('id', 'menuTab');
	menuTab.className = 'tabs';
	menuTab.textContent = ' Menu';

	menuTab.style.fontSize = '32px';
	menuTab.style.width = '4em';
	menuTab.style.height = '2em';
	menuTab.style.backgroundColor = 'white';
	menuTab.style.margin = 'auto .2em auto';
	menuTab.style.position = 'relative';
	menuTab.style.display = 'inline-flex';
	menuTab.style.justifyContent = 'center';
	menuTab.style.alignItems = 'center';
	menuTab.style.borderRadius = '25px 25px 0px 0px';
	menuTab.style.top = '12px';
	menuTab.style.float = 'right';
	menuTab.style.outline = 'none';
	menuTab.style.borderColor = 'black';

	tabContainer.appendChild(menuTab);
	console.log('Menu Tab');
})();

export { menuTab };
