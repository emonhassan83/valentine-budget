//use addEventListener and calculate kitkat total amount
document.getElementById('kitkat__buy__btn').addEventListener('click', function(){
    //console.log('kitkat btn click'); //check
    const kitkatQuantity = getInputValue('kitkat__quantity');

    const kitkatCost = kitkatQuantity * 200;
    //console.log(kitkatCost); //total amount of kitkat
    setInnerText('chocolate', kitkatCost); //set & show total amount of kitkat
    totalPrice();

})

//use addEventListener and calculate rose total amount
document.getElementById('rose__buy__btn').addEventListener('click', function(){
    const roseQuantity = getInputValue('rose__quantity');

    const roseCost = roseQuantity * 100;
    //console.log(kitkatCost); //total amount of kitkat
    setInnerText('rose', roseCost); //set & show total amount of kitkat
    totalPrice();
})

//use addEventListener and calculate dairy total amount
document.getElementById('diary__buy__btn').addEventListener('click', function(){
    //console.log('kitkat btn click'); //check
    const diaryQuantity = getInputValue('diary__quantity');
    const diaryCost = diaryQuantity * 100;
    //console.log(kitkatCost); //total amount of kitkat
    setInnerText('diary', diaryCost); //set & show total amount of kitkat
    totalPrice();
})


//common function define which set & show total amount
function setInnerText(idName, value){
    document.getElementById(idName).innerText = value;
}


//common function to use get input value
function getInputValue(idName) {
    const inputField = document.getElementById(idName);
    const quantity = parseInt(inputField.value);
    inputField.value = ''; //clear input value

    return parseInt(quantity);
}


//common function to use sum of total item
function totalPrice(){
    const chocolatePrice = getTextElementValue('chocolate');
    const rosePrice = getTextElementValue('rose');
    const diaryPrice = getTextElementValue('diary');

    const totalPrice = parseInt(chocolatePrice) + parseInt(rosePrice) + parseInt(diaryPrice); 
    //console.log(totalPrice); //for check
    //document.getElementById('total').innerText = totalPrice; //set the total value
    setInnerText('total', totalPrice); //use common function
}


//define common function to get text value by id
function getTextElementValue(idName) {
    const itemPrice = document.getElementById(idName).innerText;
    return itemPrice;
}


//use add event listener to use promo code and calculate and discount
document.getElementById('promo__app__btn').addEventListener('click', function(){
    const promoCode = getInputValue('promo__code'); //use common function
    //console.log(promoCode); //check
    if (promoCode == 101) {
        const totalPrice = getTextElementValue('total');
        const discountPrice = totalPrice - parseInt(totalPrice) * 0.1;
        //console.log(discountPrice); //get discount price
        setInnerText('all__total', discountPrice);
    } else {
        alert('please use valid promo code.')
    }
})