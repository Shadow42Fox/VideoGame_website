const productsBtn = document.querySelectorAll('.product__btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = cart.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0;
let realCost = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	 price -= currentPrice;
	 if (price < 0){
		price = 0;
	 }
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} $`;
	console.log(fullPrice.textContent)
};

const generateCartProduct = (img, title, price, id) => {
	return `
		
    <div class="for_bsk_del">
        <div id="itemOfBusket" data-id="${id}">
            <img id="pictBusketItem" style="grid-area: photo;" src="${img}">
            <div id="nameBuskItem" style="grid-area: nameOfItem;">${title}</div>
            <div id="costBuskItem" style="grid-area: costOfItem;">${normalPrice(price)} </div> 
            <button class="trash" style="grid-area: Trash;"><img src="../../icons/trash.svg"></button>
        </div>
    </div
	`;
};

const deleteProducts = (productParent) => {
	let id = productParent.querySelector('#itemOfBusket').dataset.id;
	document.querySelector(`.game[data-id="${id}"]`).querySelector('.product__btn').disabled = false;
	document.querySelector(`.game[data-id="${id}"]`).querySelector('.product__btn').ariaChecked = false;
	
	let currentPrice = realCost;
	console.log(productParent);
	console.log(currentPrice);
	
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();
};

productsBtn.forEach(el => {
	el.closest('.game').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.game');
		let id = parent.dataset.id;
		let img = parent.querySelector('.img_for_basket img').getAttribute('src');
		let title = parent.querySelector('#GameName').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.text_cost').textContent);
		let priceNumber = parseFloat(priceWithoutSpaces(parent.querySelector('.for_bsk').textContent));

		plusFullPrice(priceNumber);
		console.log(parent.querySelector('.for_bsk'));
		console.log(parent.querySelector('.for_bsk').textContent);
		console.log(parseFloat(parent.querySelector('.for_bsk').textContent));
		realCost = parseFloat(parent.querySelector('.for_bsk').textContent);
		console.log(realCost);
		console.log(parent);
		printFullPrice();

		cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();

		self.disabled = true;
		return realCost += realCost;
	});
});

cartProductsList.addEventListener('click', (e) => {
	console.log(realCost);
	deleteProducts(e.target.closest('.for_bsk_del'));
})