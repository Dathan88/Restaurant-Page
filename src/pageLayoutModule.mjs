import Pic from './img/restaurantPic.jpg';
//Module for setting up restaurant page
const pageLayoutModule = (() => {
	const pageStyle = document.querySelector('html').style;
	const bodyStyle = document.querySelector('body').style;
	const content = document.querySelector('#content');
	const tabContainer = document.createElement('section');
	const infoContainer = document.createElement('section');
	const picContainer = document.createElement('section');
	const headline = document.createElement('h1');
	let myPic = document.createElement('img');

	pageStyle.maxWidth = '100vw';
	pageStyle.minWidth = '100vw';
	pageStyle.fontSize = '16px';
	pageStyle.backgroundColor = 'grey';

	bodyStyle.maxWidth = '100%';
	bodyStyle.height = '75em';
	bodyStyle.margin = '0px';
	bodyStyle.overflowX = 'hidden';

	content.style.width = '100%';
	content.style.position = 'relative';
	content.style.margin = 'auto';

	tabContainer.setAttribute('id', 'tabContainer');
	tabContainer.style.position = 'relative';
	tabContainer.style.fontSize = '32px';
	tabContainer.style.backgroundColor = 'lightgrey';
	tabContainer.style.height = '2em';
	tabContainer.style.maxHeight = '2em';

	headline.setAttribute('id', 'headline');
	headline.textContent = 'JS Restaurant';
	headline.style.position = 'absolute';
	headline.style.textAlign = 'center';
	headline.style.margin = 'auto';
	headline.style.top = '.4%';
	headline.style.left = '13.541em';
	headline.style.width = '6.25em';

	picContainer.setAttribute('id', 'picContainer');

	myPic = new Image();
	myPic.src = Pic;
	myPic.setAttribute('id', 'myPic');
	myPic.style.margin = 'auto';
	myPic.style.position = 'relative';
	myPic.style.height = '29em';
	myPic.style.width = '100%';
	myPic.style.zIndex = '1';
	myPic.style.borderTop = '1px solid black';

	infoContainer.setAttribute('id', 'infoContainer');
	infoContainer.style.position = 'relative';
	infoContainer.style.backgroundColor = 'grey';
	infoContainer.style.width = '100%';
	infoContainer.style.height = '100%';
	infoContainer.style.margin = 'auto auto';

	content.appendChild(tabContainer);
	tabContainer.appendChild(headline);
	content.appendChild(picContainer);
	picContainer.appendChild(myPic);
	content.appendChild(infoContainer);

	console.log('Page Layout');
	return {
		pageStyle,
		bodyStyle,
		content,
		headline,
		tabContainer,
		infoContainer,
		picContainer,
		headline,
	};
})();
export { pageLayoutModule };
