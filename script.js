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
    var key = "AIzaSyCJSImhpn0LjuUOCoOW2gbZqEB4KxMeguU";
    var playlistId = 'PLTzMGnJjrsSyDJU9XClzZtuJ6GAIsvRk7';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 5,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            console.log(id);
            //console.log(data.items[0].snippet.resourceId.videoId);
            video1 = data.items[1].snippet.resourceId.videoId;
            title1 = data.items[1].snippet.title;
            desc1 = data.items[1].snippet.description.substring(0, 100);

            video2 = data.items[2].snippet.resourceId.videoId;
            title2 = data.items[2].snippet.title;
            desc2 = data.items[2].snippet.description.substring(0, 100);

            video3 = data.items[3].snippet.resourceId.videoId;
            title3 = data.items[3].snippet.title;
            desc3 = data.items[3].snippet.description.substring(0, 100);

            video4 = data.items[4].snippet.resourceId.videoId;
            title4 = data.items[4].snippet.title;
            desc4 = data.items[4].snippet.description.substring(0, 100);

            //   video3 = console.log(data.items[3].snippet.resourceId.videoId);
            //   video4 = console.log(data.items[4].snippet.resourceId.videoId);
            //  console.log(id);

            var vidURL = "https://www.youtube.com/embed/" + video1;
            $("#frame").attr("src", vidURL);
            $("#vid-desc1").text(title1);

            var vidURL2 = "https://www.youtube.com/embed/" + video2;
            $("#frame2").attr("src", vidURL2);
            $("#vid-desc2").text(title2);

            var vidURL3 = "https://www.youtube.com/embed/" + video3;
            $("#frame3").attr("src", vidURL3);
            $("#vid-desc3").text(title3);

            var vidURL4 = "https://www.youtube.com/embed/" + video4;
            $("#frame4").attr("src", vidURL4);
            $("#vid-desc4").text(title4);


            mainVid(id);
            // resultsLoop(data);
        });

        function mainVid(id) {
            $('#video').html(`
    				<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    			`);
        }
    }// loadVids function



});