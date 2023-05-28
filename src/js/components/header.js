import { onWindowScroll, exist } from '../utils';

const header = () => {
	const SELECTORS = {
		header: '.header',
		headerNavLink: '.header__nav_list_link',
		headerSidebar: '.js-header-sidebar',
		headerSidebarLink: '.js-header-sidebar-link',
		headerSidebarSubmenuClose: '.js-header-sidebar-submenu-close',
		menuTrigger: '.js-header-trigger',
	};

	const CLASSNAMES = {
		bodyOpenMenuState: 'body--open_menu_state',
		headerScrollState: 'header--scroll_state',
		submenuOpenState: 'submenu--open_state',
	};

	const $body = document.body;
	const $header = document.querySelector(SELECTORS.header);
	const $sidebar = document.querySelector(SELECTORS.headerSidebar);
	const $menuTriggers = document.querySelectorAll(SELECTORS.menuTrigger);
	if (!exist([$header, $sidebar])) return;
	const $btnSubmenuClose = $sidebar.querySelector(SELECTORS.headerSidebarSubmenuClose);

	let isMenuOpen = false;

	const openSubMenu = (e) => {
		const $submenu = e.target.nextElementSibling;
		if ($submenu) {
			e.preventDefault();
			if (e.target.closest(SELECTORS.headerSidebarLink)) {
				$submenu.classList.add(CLASSNAMES.submenuOpenState);
			}
		}
	};

	const closeSubMenu = (e) => {
		if (!$btnSubmenuClose) return;
		const $submenu = $btnSubmenuClose.closest('.submenu');
		if (e.target.closest(SELECTORS.headerSidebarSubmenuClose)) {
			$submenu.classList.remove(CLASSNAMES.submenuOpenState);
		}
	};

	$sidebar.addEventListener('click', (e) => {
		openSubMenu(e);
		closeSubMenu(e);
	});

	const handleTriggerClick = () => {
		if (!isMenuOpen) {
			$body.classList.add(CLASSNAMES.bodyOpenMenuState);
			isMenuOpen = true;
		} else {
			$body.classList.remove(CLASSNAMES.bodyOpenMenuState);
			isMenuOpen = false;
		}
	};

	// let prevScrollPos = window.pageYOffset;
	//
	// const headerScroll = (windowScrollTop) => {
	// 	const newScrollVal = window.pageYOffset;
	//
	// 	if (
	// 		prevScrollPos < newScrollVal &&
	// 		newScrollVal > 100 &&
	// 		!$header.classList.contains(CLASSNAMES.headerScrollState)
	// 	) {
	// 		$header.classList.add(CLASSNAMES.headerScrollState);
	// 	} else if (
	// 		$header.classList.contains(CLASSNAMES.headerScrollState) &&
	// 		(newScrollVal < prevScrollPos || newScrollVal <= 100)
	// 	) {
	// 		$header.classList.remove(CLASSNAMES.headerScrollState);
	// 	}
	//
	// 	prevScrollPos = newScrollVal;
	// };
	//
	// onWindowScroll(headerScroll);

	if (!exist($menuTriggers)) return;

	$menuTriggers.forEach(($trigger) => {
		$trigger.addEventListener('click', () => {
			handleTriggerClick();
		});
	});
};

export default header;
