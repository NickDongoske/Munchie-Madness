//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
var snackItem = document.querySelector('#snack-item');
var snackDesc = document.querySelector('#snack-desc');
var addSnack = document.querySelector('.add-snack');
var groceryList = document.querySelector('.grocery-list');


addSnack.addEventListener('click', createCard);
groceryList.addEventListener('click', deleteCard);


function createCard(event) { 
	groceryList.insertAdjacentHTML('afterbegin',
`<section class="created-card">
				 <p class="snack-item-two" contenteditable= "true">${snackItem.value}</p>
          <p class="snack-desc-two" contenteditable= "true">${snackDesc.value}</p>
          <button id="button" type="button" value="DELETE">DELETE</button>
 </section>`);

 event.preventDefault();
  };

  function clickCard() {
    if (event.target.classList.contains('#button')) {
      deleteCard();
    };
  }


  function deleteCard(event) {
    event.target.closest('.created-card').remove();
  }

  function validateInput () {
    if (snackItem.value.length || snackDesc.value.length === 0) {
      addSnack.disabled = true;
  }
  					
						// event.preventDefault(createCard);



  }
//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM


//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled


//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card