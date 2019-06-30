
var trainSched = {
    name : "Train Schedualer",
    link : "https://martucazpo.github.io/trainSchedualor/",
    image : "assets/images/Screenshot (5).png",
    description: "An imaginary train schedualer, using firebase"
};

var psychicGame = {
    name : "Psychic Game",
    link : "https://martucazpo.github.io/psychicGame/",
    image : "assets/images/scott-rodgerson-375874-unsplash.jpg",
    description : "A simple letter guessing game, javascript"
};

var crystalCol = {
    name : "Crystal Collector",
    link : "https://martucazpo.github.io/unit-4-game",
    image : "assets/images/1-CrystalCollector.jpg",
    description : "A game played by adding randomly generated numbers to equal a randomly generated total, javascript"
};

var getGiph = {
    name : "Get Giphy With It",
    link : "https://martucazpo.github.io/getGiphyWiphIt",
    image : "assets/images/Screenshot (4).png",
    description : "A type of search site for animal gifs, using giphy API, AJAX and jquery"
}; 

var videoSearch = {
    name : "Group one Project: Video Search",
    link : "https://cmoconnor0823.github.io/Group-Project-One/",
    image : "assets/images/Screenshot (6).png",
    description : "A video game search, using two APIs. AJAX, SASS, and JQuery"
};

var portArr = [trainSched,psychicGame,crystalCol,getGiph,videoSearch];

for (var i = 0 ; i < portArr.length ; i++){
    console.log(portArr[i].name);
    
    var anchor = $("<a>");
    var anchorLink = portArr[i].link;
    anchor.attr("href",anchorLink);

    var cardImage = $("<img>");
    var pictImage = portArr[i].image;
    cardImage.attr("src",pictImage);
    cardImage.addClass("card-image-top");
    cardImage.append(anchor);

    var card = $("<div>");
    card.attr("id",portArr[i]);
    card.addClass("card")

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    cardTitle = $("<h5>");
    cardTitle.addClass("card-title");
    cardTitle.text(portArr[i].name);
    cardBody.append(cardTitle);

    cardText = $("<p>");
    cardText.addClass("card-text");
    cardBody.append(cardText)

    var card = $("<div>");
    card.attr("id",portArr[i]);
    card.addClass("card")
    card.append(cardImage);
    card.append(cardBody);

    $("#card-deck").prepend(card);
}