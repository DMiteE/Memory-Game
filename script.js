const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;
let matchedCard = 0;

function flipCard(e){
   let clickedCard = e.target;
   if(clickedCard !== cardOne && !disableDeck){
    clickedCard.classList.add("flip");
    if(!cardOne){
        return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
    matchCard(cardOneImg, cardTwoImg);
   }
}

function matchCard(img1, img2){
    matchedCard++
    if(matchedCard === 20){
      setTimeout(()=>{
      return   shuffleCard();
      },1000)
    }
    if(img1 === img2){
        cardOne.removeEventListener("click", flipCard);
        cardOne = ""
        cardTwo.removeEventListener("click", flipCard);
        cardTwo = ""
        return disableDeck = false;
    }

    setTimeout(() => {

    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");

    },400)

    setTimeout(() => {
        cardTwo.classList.remove("shake", "flip");
        cardTwo = ""
        cardOne.classList.remove("shake", "flip");
        cardOne = ""
        disableDeck = false
        },1200)

}

function shuffleCard(){
    matchedCard = 0; 
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr= [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);  
    cards.forEach((card,index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `img/img${arr[index]}.png`;
        card.addEventListener("click", flipCard);
    })
}


shuffleCard();
cards.forEach(card =>{
    card.addEventListener("click", flipCard);
})
