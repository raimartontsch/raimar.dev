import { NavContainer } from './UI/Nav.Container.styled';
import { NavButton } from './UI/NavButton.styled';
import { AnimatePresence, useAnimationControls, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavList } from './UI/NavList.styled';
import { NavItem } from './UI/NavItem.styled';
import TheSVG from './SVGs';

export default function Nav() {
	const navOpen = {
		hover: {
			scale: 1.2,
			color: '#ff7fa5',
			textShadow: '0px 0px 8px rgb(255, 255, 255)',
			boxshadow: '0px 0px 8px rgb(255, 255, 255)',
		},
		showButton: {
			x: 0,
			y: 0,
			transition: { duration: 0.3 },
		},
		hideButton: {
			opacity: 0,
			transition: { duration: 0.3 },
		},
		tapIt: { scale: 0.95 },
	};

	const navClose = {
		hover: {
			scale: 1.2,
			color: '#ff7fa5',
			textShadow: '0px 0px 8px rgb(255, 255, 255)',
			boxshadow: '0px 0px 8px rgb(255, 255, 255)',
		},
		openNav: {
			x: [230, 0],
			opacity: 1,
			transition: { duration: 0.5, ease: 'easeIn' },
		},
		closeNav: {
			x: [0, 230],
			opacity: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
		tapIt: { scale: 0.95 },
	};

	const itemNav = {
		hidden: { opacity: 0 },
		hover: {
			scale: 1.1,
			color: '#eac912',
			textShadow: '0px 0px 8px rgb(255, 255, 255)',
			boxshadow: '0px 0px 8px rgb(255, 255, 255)',
		},
		itemSelect: {
			opacity: 1,
			transition: { delay: 0.1, type: 'spring' },
		},
	};

	const [openNav, setOpenNav] = useState(true);

	const handleNav = () => {
		if (openNav) {
			setOpenNav(false);
		} else setOpenNav(true);
	};

	return (
		<div>
			<NavButton
				onClick={handleNav}
				initial={false}
				variants={navOpen}
				whileHover="hover"
				whileTap="tapIt"
				animate={openNav ? 'showButton' : 'hideButton'}
			>
				<TheSVG variant="navMenu" size="2em" />
			</NavButton>
			<AnimatePresence>
				<NavContainer
					variants={navClose}
					initial="closeNav"
					animate={!openNav ? 'openNav' : 'closeNav'}
				>
					<NavButton
						onClick={handleNav}
						variants={navClose}
						whileHover="hover"
						whileTap="tapIt"
					>
						<TheSVG variant="closeNavMenu" size="2em" />
					</NavButton>
					<NavList>
						<NavItem
							variants={itemNav}
							initial="hidden"
							animate="itemSelect"
							whileHover="hover"
							onClick={() => {
								setOpenNav(true);
							}}
						>
							<a href="/#">Start</a>
						</NavItem>
						<NavItem
							variants={itemNav}
							initial="hidden"
							animate="itemSelect"
							whileHover="hover"
							onClick={() => {
								setOpenNav(true);
							}}
						>
							<a href="/#AboutMe">About me</a>
						</NavItem>
						<NavItem
							variants={itemNav}
							initial="hidden"
							animate="itemSelect"
							whileHover="hover"
							onClick={() => {
								setOpenNav(true);
							}}
						>
							<a href="/#Projects">Projects</a>
						</NavItem>
						<NavItem
							variants={itemNav}
							initial="hidden"
							animate="itemSelect"
							whileHover="hover"
							onClick={() => {
								setOpenNav(true);
							}}
						>
							<a href="/#Social">SocialMedia</a>
						</NavItem>
						<NavItem
							variants={itemNav}
							initial="hidden"
							animate="itemSelect"
							whileHover="hover"
							onClick={() => {
								setOpenNav(true);
							}}
						>
							<a href="/#Social">Contact</a>
						</NavItem>
					</NavList>
				</NavContainer>
			</AnimatePresence>
		</div>
	);
}
