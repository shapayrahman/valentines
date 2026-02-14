const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const messageText = document.getElementById('message-text');
const mainImage = document.getElementById('main-image');
const questionText = document.getElementById('question-text');

let clickCount = 0;
let yesSize = 1.2; // Initial font-size in rem

// Array of texts and images for the "No" button attempts
const responses = [
    { text: "wdym no, bruvv", img: "./images/cat5.jpg" },
    { text: "seriously, babe?", img: "./images/cat3.jpg" },
    { text: "you wanna play like that, huhh?", img: "./images/cat2.jpg" },
    { text: "I'm also stubborn, ykkk", img: "./images/cat6.jpg" }
];

noBtn.addEventListener('click', () => {
    // 1. Update text and image
    if (clickCount < responses.length) {
        messageText.innerText = responses[clickCount].text;
        mainImage.src = responses[clickCount].img;
    } else {
        // After the 3rd time, the text/image stay the same as the last entry
        messageText.innerText = responses[responses.length - 1].text;
    }

    // 2. Make the "Yes" button bigger
    yesSize += 0.5; 
    yesBtn.style.fontSize = `${yesSize}rem`;
    yesBtn.style.padding = `${yesSize * 10}px ${yesSize * 20}px`;

    clickCount++;
});

yesBtn.addEventListener('click', () => {
    // Final State
    questionText.innerText = "I knew you'd agree to be my valentine, babe";
    mainImage.src = "./images/cat4.jpg";
    
    // Hide the "No" button and the extra message
    noBtn.style.display = 'none';
    messageText.style.display = 'none';
    yesBtn.style.display = 'none';
});