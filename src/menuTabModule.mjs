const menuTab = (() => {
	const menuTab = document.createElement('button');
	const menuInfo = document.createElement('p');

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

	menuTab.addEventListener('click', function() {
		homeTab.style.backgroundColor = 'white';
		homeTab.style.color = 'black';

		menuTab.style.backgroundColor = 'black';
		menuTab.style.color = 'white';

		infoContainer.removeChild(infoContainer.firstChild);
		infoContainer.appendChild(menuInfo);

		contactTab.style.backgroundColor = 'white';
		contactTab.style.color = 'black';
	});

	menuInfo.setAttribute('id', 'menuInfo');
	menuInfo.style.margin = 'auto';
	menuInfo.style.position = 'relative';
	menuInfo.style.textAlign = 'center';
	menuInfo.style.width = '60%';
	menuInfo.style.height = 'auto';
	menuInfo.style.fontSize = '2em';
	menuInfo.style.textIndent = '50px';
	menuInfo.style.whiteSpace = 'pre-line';

	menuInfo.textContent = 'Burgers, Pizza, Spaghetti';

	tabContainer.appendChild(menuTab);

	console.log('Menu Tab' + ' ' + menuInfo.textContent);
	return { menuTab, menuInfo };
})();

export { menuTab };
