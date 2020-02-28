var modal = document.querySelector('.modal');
var cardList = document.querySelector('.cards__list');
var cardNumberInput = document.querySelector('.modal__input-number');
var cardDateInput = document.querySelector('.input-date');
var inputButton = document.querySelector('.input__button');
var cardsButton = document.querySelector('.cards__button');
var closeButton = document.querySelector('.modal__close-button');
var errorCard = document.querySelector('#error__card')
var errorText;


var escpCloser = function (evt){
	if (evt.keyCode === 27) {
		modal.classList.remove('modal-show');
		document.removeEventListener('keyup',escpCloser);
	}
};

cardsButton.addEventListener('click',function(){
	modal.classList.add('modal-show');

	document.addEventListener('keyup',escpCloser);
});

closeButton.addEventListener('click',function(){
	modal.classList.remove('modal-show');
	document.removeEventListener('keyup',escpCloser);
});

modal.addEventListener('click',function(evt){
	if (evt.target.matches('.modal')) {
		modal.classList.remove('modal-show');
		document.removeEventListener('keyup',escpCloser);
	}
});


inputButton.addEventListener('click', function(evt){
	evt.preventDefault();

	var cardNumberInputValue = cardNumberInput.value;
	var cardDateInputValue = cardDateInput.value;

	errorCard.style.padding = '10px';
	if ((cardNumberInputValue.length >= 16) && (cardDateInputValue.length >= 7)){
		inputButton.addEventListener('click',function(){
			
			var cardItem = document.createElement('a');
			cardItem.classList.add('cards__item', 'card');
			var cardNumber = document.createElement('p');
			cardNumber.classList.add('card__number');
			var cardExpiry = document.createElement('p');
			cardExpiry.classList.add('card__expiry');
			cardNumber.textContent = cardNumberInputValue;
			cardExpiry.textContent = 'Valid thru:' + cardDateInputValue;
			cardItem.appendChild(cardNumber);
			cardItem.appendChild(cardExpiry);
			cardList.appendChild(cardItem);
			alert('success');
			modal.classList.remove('modal-show');
			document.removeEventListener('keyup',escpCloser);

		});
	}
	else if(cardNumberInputValue.length < 16){
		errorText = 'Enter your card number';
		errorCard.innerHTML = errorText;
		return false;
	}
	else if(cardDateInputValue.length < 7){
		errorText = 'Enter your card expiry date';
		errorCard.innerHTML = errorText;
		return false;
	}
});
