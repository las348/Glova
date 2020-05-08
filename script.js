//Edamam- Dellinger
$(document).ready(function () {

    //Edamam- 
    var searchInput = document.getElementById("search-input").textContent;

    $("button").on("click", function () {
        event.preventDefault();
        clear();

        var searchInput = document.getElementById("search-input").value;
        var queryURL = "https://api.edamam.com/search?q=" + searchInput + "&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca";


        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {

            for (var i = 0; i < 3; i++) {
                var imgURL = response.hits[i].recipe.image;
                var recipeURL = response.hits[i].recipe.url;
                var recipeLabel = response.hits[i].recipe.label;
                var recipeCalories = Math.round(response.hits[i].recipe.calories);
                var dietLabels = response.hits[i].recipe.dietLabels;

                var cardDiv = $("<div>").addClass("card");
                var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

                var cardBodyDiv = $("<div>").addClass("card-body");
                var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


                var ulGroup = $("<ul>").addClass("list-group list-group-flush");

                var cardText1 = $("<li>").text("Calories: " + recipeCalories).addClass("list-group-item");
                var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
                var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



                cardDiv.append(image);
                cardDiv.append(cardBodyDiv);
                cardBodyDiv.append(cardTitle);
                cardBodyDiv.append(ulGroup);
                ulGroup.append(cardText1);
                ulGroup.append(cardText2);
                ulGroup.append(cardText3);

                $("#recipe-view").prepend(cardDiv);



            }
            $("#search-container").addClass("search-container");
            $("#main-container").removeClass("main-container").addClass("main-container-2")
            
            console.log(response);


        });

        function clear() {
            $("#recipe-view").empty();
        }

    });


    //Youtube-Laureni
    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('existing-iframe-example', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
    function onPlayerReady(event) {
        document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
    }
    function changeBorderColor(playerStatus) {
        var color;
        if (playerStatus == -1) {
            color = "#37474F"; // unstarted = gray
        } else if (playerStatus == 0) {
            color = "#FFFF00"; // ended = yellow
        } else if (playerStatus == 1) {
            color = "#33691E"; // playing = green
        } else if (playerStatus == 2) {
            color = "#DD2C00"; // paused = red
        } else if (playerStatus == 3) {
            color = "#AA00FF"; // buffering = purple
        } else if (playerStatus == 5) {
            color = "#FF6DOO"; // video cued = orange
        }
        if (color) {
            document.getElementById('existing-iframe-example').style.borderColor = color;
        }
    }
    function onPlayerStateChange(event) {
        changeBorderColor(event.data);
    }


    //Chu


});