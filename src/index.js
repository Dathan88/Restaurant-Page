import { pageLayout } from './pageLayoutModule.mjs';
import { homeTab } from './homeTabModule.mjs';
import { menuTab } from './menuTabModule.mjs';
import { contactTab } from './contactTabModule.mjs';
import './style.css';
//const content = document.querySelector('#content');
homeTab();
menuTab();
contactTab();

document.addEventListener('DOMContentLoaded', pageLayout);
