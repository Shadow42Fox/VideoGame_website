const favProductsBtn = document.querySelectorAll('.fav-product__btn');
const favProductsList = document.querySelector('.fav-content__list');
const fav = document.querySelector('.fav');
const favQuantity = fav.querySelector('.fav__quantity');
let priceFav = 0;

const randomIdFav = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpacesFav = (str) => {
	return str.replace(/\s/g, '');
};

const normalPriceFav = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};


const printQuantityFav = () => {
	let productsListLengthFav = favProductsList.querySelector('.simplebar-content').children.length;
    console.log(productsListLengthFav);
	favQuantity.textContent = productsListLengthFav;
};


const generatefavProduct = (img, title, price, id) => {
	return `
		
    <div class="for_fav_del">
        <div id="itemOfFavorite" data-id="${id}">
            <img id="pictFavoriteItem" style="grid-area: photo;" src="${img}">
            <div id="nameFavoriteItem" style="grid-area: nameOfItem;">${title}</div>
            <div id="costFavoriteItem" style="grid-area: costOfItem;">${normalPrice(price)} </div> 
            <div style="grid-area: Trash;"><img src="../../icons/trash.svg"></div>
        </div>
    </div>
	`;
};

const deleteProductsFav = (productParentFav) => {
	let id = productParentFav.querySelector('#itemOfFavorite').dataset.id;
	document.querySelector(`.game[data-id="${id}"]`).querySelector('.fav-product__btn').disabled = false;
	let Check_input = document.querySelector(`.game[data-id="${id}"]`).querySelector('.fav-product__btn').getElementsByTagName('input').item(0);
	Check_input.checked = false;
	
	productParentFav.remove();

	printQuantityFav();
};

favProductsBtn.forEach(el => {
	el.closest('.game').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.game');
		let id = parent.dataset.id;
		let img = parent.querySelector('.img_for_basket img').getAttribute('src');
		let title = parent.querySelector('#GameName').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.text_cost').textContent);

		console.log(parent);

		favProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generatefavProduct(img, title, priceString, id));
		printQuantityFav();

		self.disabled = true;
	});
});
favProductsList.addEventListener('click', (e) => {
	deleteProductsFav(e.target.closest('.for_fav_del'));
})
