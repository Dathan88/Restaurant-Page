const menuTabModule = (() => {
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

	menuInfo.setAttribute('id', 'menuInfo');
	menuInfo.style.margin = 'auto';
	menuInfo.style.padding = '0px';
	menuInfo.style.position = 'relative';
	menuInfo.style.textAlign = 'center';
	menuInfo.style.width = '60%';
	menuInfo.style.height = 'auto';
	menuInfo.style.fontSize = '2em';
	menuInfo.style.whiteSpace = 'pre';

	menuInfo.textContent = 'Ostrich Burgers $5.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Road-Kill Pizza $7.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Octopus Arms Spaghetti $6.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Lobster Lips $12.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Fish Fries $4.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Buzzard Beaks $9.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Crow Eggs $5.99 \r\n';
	menuInfo.textContent += '- \r\n';
	menuInfo.textContent += 'Salamander Sausages $8.99 \r\n';

	tabContainer.appendChild(menuTab);

	console.log('Menu Tab');
	return { menuTab, menuInfo };
})();

export { menuTabModule };
