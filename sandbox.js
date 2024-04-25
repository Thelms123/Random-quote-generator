function generateQuote(){
    const newQuote = "This is a new quote";
    document.getElementById("quote").innerHTML= newQuote;
}

    const quotesData =[
    {
    quote:"The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"

    },
    {
    quote:"In three words i can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost"    
    },

    {
    quote:"Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats"
    },

    {
    quote:"The only way to do great work is to love what you do.",
    author: "Steve Jobs"  
    },
    {
    quote:"Success is not final, failure is not fatal: It is the courage that counts.",
    author: "Winston Churchill"  
    },
    {
    quote:"Success is what you acheive by the person you become.",
    author: "Jim Rohn"  
    },
    {
    quote:"The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"  
    }
]


function generateQuote(){
    const randomIndex = Math.floor(Math.random()* quotesData.length);
    const selectedQuote = quotesData[randomIndex];
    document.getElementById("quote").innerHTML = selectedQuote.quote;
    document.getElementById("author").innerHTML = `-${selectedQuote.author}`;
}
setInterval(generateQuote,10000);