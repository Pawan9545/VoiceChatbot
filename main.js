let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Elvis", "Hi, I am a Chitti", "Hello, My name is Elvis"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let nam = ["satish","ramesh", "ganesh","vijay"];
let city = ["I am from Pune","I am from Maharashtra", "I am from Hinjewadi","I am from Dekkan"];
let prog = ["My program is ARM 1.0","Chitti 1.0","ARMA 1.1"];
let abc = ["Doctor Sir Deshpande","Deshpande Sir","The great Man Deshpande Sir"];
let xyz = ["hello sir"];


let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
	if(message.includes('where are you from' || '')){
        let finalresult = city[Math.floor(Math.random() * city.length)];
        speech.text = finalresult;
    }
	
	if(message.includes('good' || 'goods')){
        let finalresult = nam[Math.floor(Math.random() * nam.length)];
        speech.text = finalresult;
    }
	
	if(message.includes('your program' || 'your programs')){
        let finalresult = prog[Math.floor(Math.random() * prog.length)];
        speech.text = finalresult;
    }
	
	if(message.includes('who is vice chancellor' || 'vice chancellor')){
        let finalresult = abc[Math.floor(Math.random() * abc.length)];
        speech.text = finalresult;
    }

    if(message.includes('hello')){
        let finalresult = xyz[Math.floor(Math.random() * xyz.length)];
        speech.text = finalresult;
    }
	

	
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
	
	
	
   
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
