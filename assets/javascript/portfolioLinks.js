$(document).ready(function () {

  

    var trainSched = {
        id: 0,
        name: "Train Schedualer",
        link: "https://martucazpo.github.io/trainSchedualor/",
        image: "assets/images/Screenshot (5).png",
        description: "An imaginary train schedualer, using firebase"
    };

    var psychicGame = {
        id: 1,
        name: "Psychic Game",
        link: "https://martucazpo.github.io/psychicGame/",
        image: "assets/images/scott-rodgerson-375874-unsplash.jpg",
        description: "A simple letter guessing game, javascript"
    };

    var crystalCol = {
        id: 2,
        name: "Crystal Collector",
        link: "https://martucazpo.github.io/unit-4-game",
        image: "assets/images/1-CrystalCollector.jpg",
        description: "A game played by adding randomly generated numbers to equal a randomly generated total, javascript"
    };

    var getGiph = {
        id: 3,
        name: "Get Giphy With It",
        link: "https://martucazpo.github.io/getGiphyWiphIt",
        image: "assets/images/Screenshot (4).png",
        description: "A type of search site for animal gifs, using giphy API, AJAX and jquery"
    };

    var videoSearch = {
        id: 4,
        name: "Group one Project: Video Search",
        link: "https://cmoconnor0823.github.io/Group-Project-One/",
        image: "assets/images/Screenshot (6).png",
        description: "A video game search, using two APIs. AJAX, SASS, and JQuery"
    };

    var gitHub = {
        id : 5,
        name : "Git Hub Profile and Repositories",
        link : "https://github.com/martucazpo",
        image : "assets/images/Screenshot (7).png",
        description : "A link to my Git Hub pages"
    };

    var liriBot = {
        id : 6,
        name : "Liri-Bot",
        link : "https://martucazpo.github.io/Liri-node-app/",
        image : "assets/images/Screenshot (12).png",
        description : "A node.js application"
    };

    var friendlyFriend = {
        id : 7,
        name: "Friendly-Friends!",
        link:"https://fierce-chamber-13363.herokuapp.com/",
        image : "assets/images/Screenshot (1).png",
        description : "A full stack friend finder"
    };
    var burgers = {
        id : 8,
        name: "Burgers!",
        link: "https://salty-cove-20056.herokuapp.com/",
        image :"assets/images/Screenshot (2).png",
        description : "A full stack burger app using handlebars, OMV, ORM and mysql"
    };
    var sequelizedBurger = {
        id : 9,
        name : "Sequelize My Burger Please",
        link : "https://quiet-crag-21817.herokuapp.com/",
        image : "assets/images/sequelizedBurger.png",
        description : "The Burgers! app but with sequelize"
    };
    var groupProjectTwo = {
        id : 10,
        name : "Opinionated",
        link : "https://mlmm-project2.herokuapp.com",
        image : "assets/images/opinionated.png",
        description: "A review app for movies/books/video games. Express, Sequel, JQuery, MySQL, Handlebars"
    }

    var portArr = [trainSched, psychicGame, crystalCol, getGiph, videoSearch, gitHub, liriBot, friendlyFriend, burgers, sequelizedBurger, groupProjectTwo];

    var trainLink;
    var psychicLink;
    var crystalLink;
    var giphyLink;
    var videoLink;
    var gitHubLink;
    var liriBotLink;
    var friendlyLink;
    var burgerLink;
    var sequelizedBurgerLink;
    var project2Link;

    for (var i = 0; i < portArr.length; i++) {


        trainLink = portArr[0].link;
        psychicLink = portArr[1].link;
        crystalLink = portArr[2].link;
        giphyLink = portArr[3].link;
        videoLink = portArr[4].link;
        gitHubLink = portArr[5].link;
        liriBotLink = portArr[6].link;
        friendlyLink = portArr[7].link;
        burgerLink = portArr[8].link;
        sequelizedBurgerLink = portArr[9].link;
        project2Link = portArr[10].link;

        var cardImage = $("<img>");
        var pictImage = portArr[i].image;
        cardImage.attr("style", "height:150px;width:auto");
        cardImage.attr("src", pictImage);
        cardImage.attr("class", "card-image-top");


        var cardBody = $("<div>");
        cardBody.attr("class", "card-body");

        cardTitle = $("<h5>");
        cardTitle.attr("class", "card-title");
        cardTitle.text(portArr[i].name);
        cardBody.append(cardTitle);

        cardText = $("<p>");
        cardText.attr("class", "card-text");
        cardText.text(portArr[i].description);
        cardBody.append(cardText)


        var card = $("<div>");
        card.attr("id", portArr[i].id);
        card.attr("class", "card border-secondary mb-3 card-body text-secondary m-3 p-1");
        card.attr("type", "button");
        card.append(cardImage);
        card.append(cardBody);


        $("#cardDeck").prepend(card);

    };

    $(document).on("click", "#0", function () {
        window.open(trainLink);
    });

    $(document).on("click", "#1", function () {
        window.open(psychicLink);
    });

    $(document).on("click", "#2", function () {
        window.open(crystalLink);
    });

    $(document).on("click", "#3", function () {
        window.open(giphyLink);
    });

    $(document).on("click", "#4", function () {
        window.open(videoLink);
    });

    $(document).on("click", "#5", function () {
        window.open(gitHubLink);
    });

    $(document).on("click", "#6", function () {
        window.open(liriBotLink);
    });

    $(document).on("click", "#7", function () {
        window.open(friendlyLink);
    });

    $(document).on("click", "#8", function () {
        window.open(burgerLink);
    });

    $(document).on("click", "#9", function () {
        window.open(sequelizedBurgerLink);
    });

    $(document).on("click", "#10", function () {
        window.open(project2Link);
    });


});