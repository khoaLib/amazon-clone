//rfce
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
	return (
		<div className="header">
			<img
				className="header__logo"
				src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
				alt="amazon-img"
			/>

			<div className="header__search">
				<input className="header__searchInput" type="text"></input>
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello, </span>
					<span className="header__optionLineTwo">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Return</span>
					<span className="header__optionLineTwo">& Order</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
			</div>

			<div className="header__optionBasket">
				<ShoppingBasketIcon />
				<span className="header__optionLineTwo header__basketCount">0</span>
			</div>
		</div>
	);
}

export default Header;
