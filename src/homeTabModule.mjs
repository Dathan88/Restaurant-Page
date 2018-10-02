const homeTabModule = (() => {
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

	homeInfo.setAttribute('id', 'homeInfo');
	homeInfo.style.margin = 'auto';
	homeInfo.style.position = 'relative';
	homeInfo.style.textAlign = 'justify';
	homeInfo.style.width = '60%';
	homeInfo.style.height = 'auto';
	homeInfo.style.fontSize = '1.9em';
	homeInfo.style.textIndent = '50px';
	homeInfo.style.whiteSpace = 'pre-wrap';

	homeInfo.textContent = `Est totam fugit. Accusantium consequatur nulla sit dignissimos quia deserunt beatae fugit ut. Quasi quasi nobis fugit sunt in laudantium odio rerum. Aliquam labore reprehenderit et ratione perferendis laborum. Et at consectetur labore. 
	Inventore dignissimos temporibus nisi. Nihil dolorem modi doloribus beatae quos quidem dolorem quia. Perferendis aliquid non illo rerum. In est id temporibus eos. 
	Quia eum impedit fuga. Tenetur voluptatem iusto non soluta esse labore nisi. Nisi quam maxime dignissimos laboriosam. Id omnis quas omnis assumenda. Ab nostrum illo fugit distinctio. Consequatur iusto laboriosam corporis magni hic recusandae et velit.
	Autem aut ab laboriosam est consectetur esse et. Quo rem qui occaecati harum. Aperiam quasi facere quas nam. Voluptates laudantium sed repellat quidem amet dolores odit eum beatae.`;

	tabContainer.appendChild(homeTab);
	infoContainer.appendChild(homeInfo);

	console.log('Home Tab');
	return { homeTab, contactTab, menuTab, homeInfo };
})();

export { homeTabModule };
