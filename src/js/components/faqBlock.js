const faqBlock = () => {
	const SELECTORS = {
		item: '.js-faq-item',
		body: '.js-faq-body',
	};

	const CLASSES = {
		itemOpen: 'faq_item--open_state',
	};

	const $items = document.querySelectorAll(SELECTORS.item);
	if (!$items.length) return;

	const closeAcc = (el, body) => {
		el.classList.remove(CLASSES.itemOpen);
		body.style.maxHeight = null; // eslint-disable-line no-param-reassign
	};

	const openAcc = (el, body) => {
		$items.forEach(($item) => {
			$item.classList.remove(CLASSES.itemOpen);
			const $body = $item.querySelector(SELECTORS.body);
			if (!$body) return;
			$body.style.maxHeight = null; // eslint-disable-line no-param-reassign
		});
		setTimeout(() => {
			el.classList.add(CLASSES.itemOpen);
			body.style.maxHeight = body.scrollHeight + 'px'; // eslint-disable-line
		}, 100);
	};

	$items.forEach(($item) => {
		$item.addEventListener('click', (el) => {
			const $body = $item.querySelector(SELECTORS.body);
			if (!$body) return;

			if ($item.closest(`.${CLASSES.itemOpen}`)) {
				closeAcc($item, $body);
			} else {
				openAcc($item, $body);
			}
		});
	});
};

export default faqBlock;
