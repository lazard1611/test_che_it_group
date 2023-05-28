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

	const openAcc = (el, body) => {
		setTimeout(() => {
			el.classList.add(CLASSES.itemOpen);
			body.style.maxHeight = body.scrollHeight + 'px'; // eslint-disable-line
		}, 100);
	};

	const closeAcc = (el, body) => {
		el.classList.remove(CLASSES.itemOpen);
		body.style.maxHeight = null; // eslint-disable-line no-param-reassign
	};

	$items.forEach(($item) => {
		const $body = $item.querySelector(SELECTORS.body);
		if (!$body) return;

		$item.addEventListener('click', (e) => {
			if ($item.classList.contains(CLASSES.itemOpen)) {
				closeAcc($item, $body);
			} else {
				openAcc($item, $body);
			}
		});
	});
};

export default faqBlock;
