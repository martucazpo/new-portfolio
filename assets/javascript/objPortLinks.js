function Port(id, name, link, image, description,gitHubLink) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.image = image;
    this.description = description;
    this.gitHubLink = gitHubLink;
    this.card = function () {
        var cardImage = $("<img>");
        var pictImage = this.image;
        cardImage.attr("style", "height:150px;width:auto");
        cardImage.attr("src", pictImage);
        cardImage.attr("alt","Card image");
        cardImage.attr("class", "card-img-top");
        cardImage.attr("id", this.id);
        cardImage.attr("type","button");
        var cardHeader = $("<div>");
        cardHeader.attr("class", "card-header");
        cardHeader.text("Click on image to see project");
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
        var cardButton = $("<a>");
        cardButton.attr("role","button");
        cardButton.attr("class","btn btn-outline-secondary");
        cardButton.attr("href", this.gitHubLink);
        cardButton.text("View on GitHub");
        cardBody.append(cardButton);
        var card = $("<div>");
        card.attr("class", "card border-secondary mb-3 card-body text-secondary m-3 p-1");
        card.append(cardHeader);
        card.append(cardImage);
        card.append(cardBody);
        $("#cardDeck").prepend(card);
    };
    this.imageButton = function () {
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
    "An imaginary train schedualer, using firebase: unstructured databases, JQuery",
    "https://github.com/martucazpo/trainSchedualor"
);

var psychicGame = new Port(
    2,
    "Psychic Game",
    "https://martucazpo.github.io/psychicGame/",
    "assets/images/scott-rodgerson-375874-unsplash.jpg",
    "A simple letter guessing game, javascript: vanilla javascript, game logic",
    "https://github.com/martucazpo/psychicGame"
);


var crystalCol = new Port(
    3,
    "Crystal Collector",
    "https://martucazpo.github.io/unit-4-game",
    "assets/images/1-CrystalCollector.jpg",
    "A game played by adding randomly generated numbers to equal a randomly generated total, javascript: javascript/jquery, gaming logic, 'on-click' events",
    "https://github.com/martucazpo/unit-4-game"
);

var getGiph = new Port(
    4,
    "Get Giphy With It",
    "https://martucazpo.github.io/getGiphyWiphIt",
    "assets/images/Screenshot (4).png",
    "A type of search site for animal gifs, using giphy API, AJAX and jquery: APIs. JQuery, 'on-click'",
    "https://github.com/martucazpo/getGiphyWiphIt"
);

var videoSearch = new Port(
    5,
    "Group one Project: Video Search",
    "https://cmoconnor0823.github.io/Group-Project-One/",
    "assets/images/Screenshot (6).png",
    "A video game search, using two APIs. AJAX, SASS, and JQuery",
    "https://github.com/Cmoconnor0823/Games-For-All"
);

var gitHub = new Port(
    6,
    "Git Hub Profile and Repositories",
    "https://github.com/martucazpo",
    "assets/images/Screenshot (7).png",
    "A link to my Git Hub pages",
    "https://github.com/martucazpo"
    
);

var liriBot = new Port(
    7,
    "Liri-Bot",
    "https://martucazpo.github.io/Liri-node-app/",
    "assets/images/Screenshot (12).png",
    "A node.js application: Node.js and the command-line, npm",
    "https://github.com/martucazpo/Liri-node-app"
);

var friendlyFriend = new Port(
    8,
    "Friendly-Friends!",
    "https://fierce-chamber-13363.herokuapp.com/",
    "assets/images/Screenshot (1).png",
    "A full stack friend finder: radio-buttons, server and routing",
    "https://github.com/martucazpo/Friendly-Friends-"
);

var burgers = new Port(
    9,
    "Burgers!",
    "https://salty-cove-20056.herokuapp.com/",
    "assets/images/Screenshot (2).png",
    "A full stack burger app using handlebars, OMV, ORM and mysql: a server and routing with handlebars, database, creating proto-middleware",
    "https://github.com/martucazpo/Burgers"
);

var sequelizedBurger = new Port(
    10,
    "Sequelize My Burger Please",
    "https://quiet-crag-21817.herokuapp.com/",
    "assets/images/sequelizedBurger.png",
    "The Burgers! app but with sequelize: middleware with routing, handlebars, database",
    "https://github.com/martucazpo/sequelizeMyBurgerPlease"
);

var groupProjectTwo = new Port(
    11,
    "Opinionated",
    "https://mlmm-project2.herokuapp.com",
    "assets/images/opinionated.png",
    "A review app for movies/books/video games. Express, Sequel, JQuery, MySQL, Handlebars",
    "https://github.com/mwright8929/Project-2"
);

var newsOfTheWired = new Port(
    12,
    "News of the Wired",
    "https://agile-mesa-63380.herokuapp.com/articles",
    "assets/images/wired.png",
    "A Node.js Web Scraper using Mongoose, Mongodb and Handlebars-Express: routing using Mongodb and Mongoose, a genuine full stack app",
    "https://github.com/martucazpo/newsOfTheWired"
);

var clickyGame = new Port(
    13,
    "Clicky Game",
    "https://fierce-ocean-38330.herokuapp.com",
    "assets/images/clicky.png",
    "A react.js game: introduction to react; components and event handlers",
    "https://github.com/martucazpo/ClickyGame"
);

var googleSearchReact = new Port(
    14,
    "Google Search React",
    "https://shrouded-inlet-36558.herokuapp.com",
    "assets/images/google.png",
    "A react.js REST app plus Node.js server: routing, compontents, event handlers, react-router-dom and componentDidMount",
    "https://github.com/martucazpo/GoogleBooksReact"
);

var mortgageOptions = new Port(
    15,
    "Mortgage Genie",
    "https://lit-sea-68567.herokuapp.com",
    "assets/images/mortgageOptions.png",
    "A react.js REST app with a Node.js Server: routing,components, event handlers, Axios, react-router-dom, async API calls. Our third group project",
    "https://github.com/martucazpo/Mortgage-Options"
);

$(document).ready(function () {
    trainSched.card();
    trainSched.imageButton();
    psychicGame.card();
    psychicGame.imageButton();
    crystalCol.card();
    crystalCol.imageButton();
    getGiph.card();
    getGiph.imageButton();
    videoSearch.card();
    videoSearch.imageButton();
    gitHub.card();
    gitHub.imageButton();
    liriBot.card();
    liriBot.imageButton();
    friendlyFriend.card();
    friendlyFriend.imageButton();
    burgers.card();
    burgers.imageButton();
    sequelizedBurger.card();
    sequelizedBurger.imageButton();
    groupProjectTwo.card();
    groupProjectTwo.imageButton();
    newsOfTheWired.card();
    newsOfTheWired.imageButton();
    clickyGame.card();
    clickyGame.imageButton();
    googleSearchReact.card();
    googleSearchReact.imageButton();
    mortgageOptions.card();
    mortgageOptions.button();
});