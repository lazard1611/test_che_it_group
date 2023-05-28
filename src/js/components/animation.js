import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const animation = () => {
	const SELECTORS = {
		section: '.js-animation',
		item: '.js-fade',
		picEl: '.js-fade-pic',
	};

	const $sections = document.querySelectorAll(SELECTORS.section);
	if (!$sections.length) return;

	gsap.registerPlugin(ScrollTrigger);
	const tl = gsap.timeline({
		paused: true,
	});

	$sections.forEach(($section) => {
		const $items = $section.querySelectorAll(SELECTORS.item);
		const $picEl = $section.querySelector(SELECTORS.picEl);

		ScrollTrigger.create({
			trigger: $section,
			start: 'top-=100 top',
			end: 'bottom bottom',
			// markers: true,
			animation: tl,
		});

		tl.to('body', { opacity: 1 });

		tl.fromTo(
			$section,
			{
				opacity: 0,
				overflow: 'hidden',
			},
			{
				opacity: 1,
				delay: 0.1,
			},
		);

		if ($picEl) {
			tl.fromTo(
				$picEl,
				{
					opacity: 0,
					xPercent: 100,
				},
				{
					opacity: 1,
					xPercent: 0,
					delay: 0.2,
				},
			);
		}

		tl.fromTo(
			$items,
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				delay: 0.2,
				stagger: 0.4,
				duration: 0.4,
				ease: 'power2.out',
			},
		);
	});
};

export default animation;
