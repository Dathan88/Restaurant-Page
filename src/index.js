import { pageLayout } from './pageLayoutModule.mjs';
import { contactTab } from './contactTabModule.mjs';
import { menuTab } from './menuTabModule.mjs';
import { homeTab } from './homeTabModule.mjs';
homeTab, menuTab, contactTab;
const myTabs = document.getElementsByClassName('tabs');

for (let i = 0; i < myTabs.length; i++) {
	console.log(myTabs[i]);
	//alert(this);
	myTabs[i].onclick = checkTabs;
}

document.addEventListener('DOMContentLoaded', pageLayout);

function checkTabs(event) {
	console.log('hello', this.childNode, this.node);
	myTabs.style.backgroundColor = 'white';
	myTabs.style.color = 'black';

	this.style.backgroundColor = 'black';
	this.style.color = 'white';

	infoContainer.removeChild(infoContainer.firstChild);
	infoContainer.appendChild();

	/*
    contactTab.style.backgroundColor = 'white';
    contactTab.style.color = 'black';

    menuTab.style.backgroundColor = 'white';
    menuTab.style.color = 'black'; */
}
/* console.log(myTabs.id);

myTabs.childNodes.forEach(function(currentValue, currentIndex, listObj) {
	console.log(currentValue + ', ' + currentIndex + ', ' + this);
}); */

/* 
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
 */
