const navBtn = document.querySelector(".navbarRight__burgerBtn");

const burger = '<img src="./src/img/icon-hamburger.svg">'
const cross = '<img src="./src/img/icon-close.svg">'

const modal = document.querySelector(".modal");

// open/close the modal by clicking on the burger
navBtn.onclick = () => {
	if (navBtn.innerHTML === cross) {
		navBtn.innerHTML = burger;
		modal.style.display = "none";
		document.body.style.position = '';
		document.body.style.top = '';
	} else {
		navBtn.innerHTML = cross;
		modal.style.display = "flex";
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
	}
}

const productBtn = document.querySelector(".modal__product__btn");
const productMenu = document.querySelector(".modal__product__content");
const productBtnStyle = document.head.appendChild(document.createElement("style"));
const product = {button: productBtn, buttonPath: ".modal__product__btn", menu: productMenu, style: productBtnStyle};
//product.menu.style.display = "none"

const companyBtn = document.querySelector(".modal__company__btn");
const companyMenu = document.querySelector(".modal__company__content");
const companyBtnStyle = document.head.appendChild(document.createElement("style"));
const company = {button: companyBtn, buttonPath: ".modal__company__btn", menu: companyMenu, style: companyBtnStyle};
//company.menu.style.display = "none";

const connectBtn = document.querySelector(".modal__connect__btn");
const connectMenu = document.querySelector(".modal__connect__content");
const connectBtnStyle = document.head.appendChild(document.createElement("style"));
const connect = {button: connectBtn, buttonPath: ".modal__connect__btn", menu: connectMenu, style: connectBtnStyle};
//connect.menu.style.display = "none";


const openM = (elmnt) => {
	elmnt.menu.style.display = "flex";
	elmnt.style.innerHTML = `${elmnt.buttonPath}::after {display: inline-block;margin: 0 0.5em;content: url("./src/img/icon-arrow-dark.svg");transform: rotate(0deg);}`;
}

const closeM = (elmnt) => {
	elmnt.menu.style.display = "none";
	elmnt.style.innerHTML = `${elmnt.buttonPath}::after {display: inline-block;margin: 0 0.5em;content: url("./src/img/icon-arrow-dark.svg");transform: rotate(180deg);}`;
}

product.button.onclick = () => {
	if (product.menu.style.display === "flex") {
		closeM(product);
	} else {
		openM(product);
		closeM(company);
		closeM(connect);
	}
}

company.button.onclick = () => {
	if (company.menu.style.display === "flex") {
		closeM(company);
	} else {
		openM(company);
		closeM(product);
		closeM(connect);
	}
}

connect.button.onclick = () => {
	if (connect.menu.style.display === "flex") {
		closeM(connect);
	} else {
		openM(connect);
		closeM(product);
		closeM(company);
	}
}
