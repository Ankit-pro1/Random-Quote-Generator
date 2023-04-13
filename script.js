// taking all the required variables

let quoteTxt = document.querySelector('.quote'),
    btn = document.querySelector(".btn"),
    author = document.querySelector('.author'),
    soundBtn = document.querySelector('.sound'),
    copyBtn = document.querySelector('.copy'),
    twitterBtn = document.querySelector('.twitter');


// When btn clicks then this function will execute
 function randomQuote(){
    btn.innerHTML = "loading..";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(function (result) {
        // console.log(result);
        quoteTxt.innerHTML = result.content;
        author.innerHTML = result.author;
        btn.innerHTML = "New Quote";
    })
}


// When sound icon clicked
soundBtn.addEventListener('click',()=>{
    let utterence = new SpeechSynthesisUtterance(`${quoteTxt.innerHTML} by ${author.innerHTML}`);
    speechSynthesis.speak(utterence);
})

// When copy icon clicked
copyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(quoteTxt.innerHTML); 
})

// When twitter icon clicked
twitterBtn.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteTxt.innerText}`;
    window.open(tweetUrl, "_blank");
  })

  
btn.addEventListener('click', randomQuote);

