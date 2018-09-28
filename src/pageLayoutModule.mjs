import Pic from './img/restaurant-pic.jpg';
//Module for setting up restaurant page
const pageLayout = (() => {
	const pageStyle = document.querySelector('html').style;
	const bodyStyle = document.querySelector('body').style;
	const content = document.querySelector('#content');
	const headlineContainer = document.createElement('section');
	const tabContainer = document.createElement('section');
	const infoContainer = document.createElement('section');
	const picContainer = document.createElement('section');
	const headline = document.createElement('h1');
	const info = document.createElement('p');
	let myPic = document.createElement('img');

	pageStyle.maxWidth = '100%';
	pageStyle.position = 'relative';
	pageStyle.fontSize = '16px';
	pageStyle.backgroundColor = 'grey';

	bodyStyle.maxWidth = '100%';
	bodyStyle.margin = '0px';
	bodyStyle.position = 'relative';

	headlineContainer.setAttribute('id', 'headlineContainer');
	headline.setAttribute('id', 'headline');

	content.style.width = '100%';
	content.style.position = 'relative';
	content.style.margin = 'auto';

	tabContainer.setAttribute('id', 'tabContainer');
	tabContainer.setAttribute(
		'style',
		'background-color: lightgrey; height: 4em;'
	);

	picContainer.setAttribute('id', 'picContainer');

	myPic = new Image();
	myPic.src = Pic;
	myPic.setAttribute('id', 'myPic');
	myPic.setAttribute(
		'style',
		'margin: auto; position: relative; height: auto; width: 100%; border-top: 3px solid black;'
	);

	infoContainer.setAttribute('id', 'infoContainer');
	infoContainer.setAttribute(
		'style',
		'background-color: grey; width: 100%; height: 100%; margin: 2em auto auto;'
	);

	info.setAttribute('id', 'info');
	info.style.margin = 'auto';
	info.style.position = 'relative';
	info.style.textAlign = 'justify';
	info.style.width = '60%';
	info.style.height = 'auto';
	info.style.fontSize = '2em';
	info.style.textIndent = '50px';
	info.style.whiteSpace = 'pre-wrap';

	info.textContent = `Est perspiciatis dolores atque alias assumenda voluptates possimus. Sequi rerum hic molestiae officia sunt voluptatibus. Qui tempora dolorem sunt nihil quam totam totam. Quaerat harum enim eius qui. Dicta quasi magnam debitis quaerat est perspiciatis et et. 
	Eos fugit molestias corporis distinctio. Perferendis facere quaerat expedita. Voluptates beatae quidem repellat harum dolore eveniet officiis debitis. Vel magni enim aliquid provident sit. Molestiae ut et autem incidunt sapiente odio facilis molestiae. Minima rerum et eveniet ipsum.
	Doloribus est ut maiores aliquam ut quia. Excepturi recusandae officiis ut exercitationem reprehenderit dolores quam aut at. Nemo quis rerum et vel.`;

	content.appendChild(tabContainer);
	content.appendChild(picContainer);
	picContainer.appendChild(myPic);
	content.appendChild(infoContainer);
	infoContainer.appendChild(info);

	console.log('Page Layout');
	return { myPic, tabContainer, info };
})();
export { pageLayout };

/* 
function myTabStyles() {
	for (let i = 0; i < tabStyles.length; i++) {
		tabStyles[i].style.fontSize = '32px';
		tabStyles[i].style.width = '4em';
		tabStyles[i].style.height = '2em';
		tabStyles[i].style.backgroundColor = 'white';
		tabStyles[i].style.margin = 'auto .2em auto';
		tabStyles[i].style.position = 'relative';
		tabStyles[i].style.display = 'inline-flex';
		tabStyles[i].style.justifyContent = 'center';
		tabStyles[i].style.alignItems = 'center';
		tabStyles[i].style.borderRadius = '25px 25px 0px 0px';
		tabStyles[i].style.top = '12px';
		tabStyles[i].style.float = 'right';
		tabStyles[i].style.outline = 'none';
		tabStyles[i].style.borderColor = 'black';
	}
}
*/
