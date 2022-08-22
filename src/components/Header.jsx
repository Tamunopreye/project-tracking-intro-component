import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../images/icon-hamburger.svg";
import closeHamburger from "../images/icon-close.svg";
const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<header className="header">
			<nav className="nav">
				<Link to="/" className="logo">
					<img src={logo} alt="logo" />
				</Link>

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link
							to="/product"
							className="nav-link"
							onClick={() => setClick(false)}
						>
							Product
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/features"
							className="nav-link"
							onClick={() => setClick(false)}
						>
							Features
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/pricing"
							className="nav-link"
							onClick={() => setClick(false)}
						>
							Pricing
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-link"
							onClick={() => setClick(false)}
						>
							<hr className="hr" />
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/login"
							className="nav-link login"
							onClick={() => setClick(false)}
						>
							Login
						</Link>
					</li>
				</ul>
				<div onClick={handleClick} className="hamburger-menu">
					{click ? (
						<img src={closeHamburger} alt="close-hamburger" />
					) : (
						<img src={hamburger} alt="hamburger" />
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
