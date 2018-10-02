import { pageLayoutModule } from './pageLayoutModule.mjs';
import { contactTabModule } from './contactTabModule.mjs';
import { menuTabModule } from './menuTabModule.mjs';
import { homeTabModule } from './homeTabModule.mjs';
const myTabs = document.querySelectorAll('.tabs');

myTabs.forEach(element => {
	element.addEventListener('click', e => {
		switch (element.id) {
			case 'homeTab':
				console.log('home');
				homeTab.style.backgroundColor = 'black';
				homeTab.style.color = 'white';

				infoContainer.removeChild(infoContainer.firstChild);
				infoContainer.appendChild(homeTabModule.homeInfo);

				contactTab.style.backgroundColor = 'white';
				contactTab.style.color = 'black';

				menuTab.style.backgroundColor = 'white';
				menuTab.style.color = 'black';
				break;
			case 'menuTab':
				console.log('menu');
				homeTab.style.backgroundColor = 'white';
				homeTab.style.color = 'black';

				infoContainer.removeChild(infoContainer.firstChild);
				infoContainer.appendChild(menuTabModule.menuInfo);

				menuTab.style.backgroundColor = 'black';
				menuTab.style.color = 'white';

				contactTab.style.backgroundColor = 'white';
				contactTab.style.color = 'black';
				break;
			case 'contactTab':
				console.log('contact');
				homeTab.style.backgroundColor = 'white';
				homeTab.style.color = 'black';

				infoContainer.removeChild(infoContainer.firstChild);
				infoContainer.appendChild(contactTabModule.contactInfo);

				menuTab.style.backgroundColor = 'white';
				menuTab.style.color = 'black';

				contactTab.style.backgroundColor = 'black';
				contactTab.style.color = 'white';
				break;
		}
	});
});
