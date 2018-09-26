import Pic from './img/restaurant-pic.jpg';

const pageLayout = () => {
	const content = document.querySelector('#content');
	let headline = document.createElement('h2');
	let info = document.createElement('div');
	let myPic = document.createElement('img');

	headline.setAttribute('id', 'headline');
	headline.textContent = 'Javascript Restaurant';

	info.setAttribute('id', 'info');
	info.textContent = 'Nostrum eum hic nesciunt necessitatibus harum ea sed.';

	myPic = new Image();
	myPic.src = Pic;
	myPic.setAttribute('id', 'myPic');

	content.appendChild(headline);
	content.appendChild(info);
	content.appendChild(myPic);

	console.log('Page Layout');
	return myPic, headline, info;
};
export { pageLayout };
