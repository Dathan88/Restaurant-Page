const homeTab = (() => {
	const homeTab = document.createElement('button');
	const contactTab = document.querySelector('#contactTab');
	const menuTab = document.querySelector('#menuTab');
	const homeInfo = document.createElement('p');

	homeTab.setAttribute('id', 'homeTab');
	homeTab.className = 'tabs';

	homeTab.textContent = ' Home';
	homeTab.style.fontSize = '32px';
	homeTab.style.width = '4em';
	homeTab.style.height = '2em';
	homeTab.style.backgroundColor = 'black';
	homeTab.style.color = 'white';
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

	homeTab.addEventListener('click', function() {
		homeTab.style.backgroundColor = 'black';
		homeTab.style.color = 'white';

		infoContainer.removeChild(infoContainer.firstChild);
		infoContainer.appendChild(homeInfo);

		contactTab.style.backgroundColor = 'white';
		contactTab.style.color = 'black';

		menuTab.style.backgroundColor = 'white';
		menuTab.style.color = 'black';
	});

	homeInfo.setAttribute('id', 'homeInfo');
	homeInfo.style.margin = 'auto';
	homeInfo.style.position = 'relative';
	homeInfo.style.textAlign = 'justify';
	homeInfo.style.width = '60%';
	homeInfo.style.height = 'auto';
	homeInfo.style.fontSize = '1.9em';
	homeInfo.style.textIndent = '50px';
	homeInfo.style.whiteSpace = 'pre-wrap';

	homeInfo.textContent = `Est perspiciatis dolores atque alias assumenda voluptates possimus. Sequi rerum hic molestiae officia sunt voluptatibus. Qui tempora dolorem sunt nihil quam totam totam. Quaerat harum enim eius qui. Dicta quasi magnam debitis quaerat est perspiciatis et et. 
	Eos fugit molestias corporis distinctio. Perferendis facere quaerat expedita. Voluptates beatae quidem repellat harum dolore eveniet officiis debitis. Vel magni enim aliquid provident sit. Molestiae ut et autem incidunt sapiente odio facilis molestiae.`;

	tabContainer.appendChild(homeTab);
	infoContainer.appendChild(homeInfo);

	console.log('Home Tab');
	return { homeTab, contactTab, menuTab, homeInfo };
})();

export { homeTab };
