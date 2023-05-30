import dropMenu from 'components/drop-menu';
import FaqBlock from 'components/accordion';

const index = () => {
	dropMenu();
	const $triggers = document.querySelectorAll('.js-faq-item-head');
	const acc = new FaqBlock({
		triggers: $triggers, // eslint-disable-line
		activeStateName: 'faq_item--open_state', // eslint-disable-line
	}).init();
};

export default index;
