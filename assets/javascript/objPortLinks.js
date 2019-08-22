function Port(id, name, link, image, description) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.image = image;
    this.description = description;
    this.card = function () {
        var cardImage = $("<img>");
        var pictImage = this.image;
        cardImage.attr("style", "height:150px;width:auto");
        cardImage.attr("src", pictImage);
        cardImage.attr("class", "card-image-top");
        var cardBody = $("<div>");
        cardBody.attr("class", "card-body");
        cardTitle = $("<h5>");
        cardTitle.attr("class", "card-title");
        cardTitle.text(this.name);
        cardBody.append(cardTitle);
        cardText = $("<p>");
        cardText.attr("class", "card-text");
        cardText.text(this.description);
        cardBody.append(cardText);
        var card = $("<div>");
        card.attr("id", this.id);
        card.attr("class", "card border-secondary mb-3 card-body text-secondary m-3 p-1");
        card.attr("type", "button");
        card.append(cardImage);
        card.append(cardBody);
        $("#cardDeck").prepend(card);
    };
    this.button = function () {
        var pageLink = this.link;
        var pageId = this.id;
        $(document).on("click", "#" + pageId, function () {
            window.open(pageLink);
        });
    };
}

var trainSched = new Port(
    1,
    "Train Schedualer",
    "https://martucazpo.github.io/trainSchedualor/",
    "assets/images/Screenshot (5).png",
    "An imaginary train schedualer, using firebase"
);

var psychicGame = new Port(
    2,
    "Psychic Game",
    "https://martucazpo.github.io/psychicGame/",
    "assets/images/scott-rodgerson-375874-unsplash.jpg",
    "A simple letter guessing game, javascript"
);


var crystalCol = new Port(
    3,
    "Crystal Collector",
    "https://martucazpo.github.io/unit-4-game",
    "assets/images/1-CrystalCollector.jpg",
    "A game played by adding randomly generated numbers to equal a randomly generated total, javascript"
);

var getGiph = new Port(
    4,
    "Get Giphy With It",
    "https://martucazpo.github.io/getGiphyWiphIt",
    "assets/images/Screenshot (4).png",
    "A type of search site for animal gifs, using giphy API, AJAX and jquery"
);

var videoSearch = new Port(
    5,
    "Group one Project: Video Search",
    "https://cmoconnor0823.github.io/Group-Project-One/",
    "assets/images/Screenshot (6).png",
    "A video game search, using two APIs. AJAX, SASS, and JQuery"
);

var gitHub = new Port(
    6,
    "Git Hub Profile and Repositories",
    "https://github.com/martucazpo",
    "assets/images/Screenshot (7).png",
    "A link to my Git Hub pages"
);

var liriBot = new Port(
    7,
    "Liri-Bot",
    "https://martucazpo.github.io/Liri-node-app/",
    "assets/images/Screenshot (12).png",
    "A node.js application"
);

var friendlyFriend = new Port(
    8,
    "Friendly-Friends!",
    "https://fierce-chamber-13363.herokuapp.com/",
    "assets/images/Screenshot (1).png",
    "A full stack friend finder"
);

var burgers = new Port(
    9,
    "Burgers!",
    "https://salty-cove-20056.herokuapp.com/",
    "assets/images/Screenshot (2).png",
    "A full stack burger app using handlebars, OMV, ORM and mysql"
);

var sequelizedBurger = new Port(
    10,
    "Sequelize My Burger Please",
    "https://quiet-crag-21817.herokuapp.com/",
    "assets/images/sequelizedBurger.png",
    "The Burgers! app but with sequelize"
);

var groupProjectTwo = new Port(
    11,
    "Opinionated",
    "https://mlmm-project2.herokuapp.com",
    "assets/images/opinionated.png",
    "A review app for movies/books/video games. Express, Sequel, JQuery, MySQL, Handlebars"
);

$(document).ready(function () {
    trainSched.card();
    trainSched.button();
    psychicGame.card();
    psychicGame.button();
    crystalCol.card();
    crystalCol.button();
    getGiph.card();
    getGiph.button();
    videoSearch.card();
    videoSearch.button();
    gitHub.card();
    gitHub.button();
    liriBot.card();
    liriBot.button();
    friendlyFriend.card();
    friendlyFriend.button();
    burgers.card();
    burgers.button();
    sequelizedBurger.card();
    sequelizedBurger.button();
    groupProjectTwo.card();
    groupProjectTwo.button();
});