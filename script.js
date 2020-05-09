$(document).ready(function () {
  var APIKey = "AIzaSyCJSImhpn0LjuUOCoOW2gbZqEB4KxMeguU";  //youtube key
  //Edamam
  var searchInput = document.getElementById("search-input").textContent;

  $("button").on("click", function () {
      event.preventDefault();
      clear();

      var searchInput = document.getElementById("search-input").value;
      var queryURL = "https://api.edamam.com/search?q=" + searchInput + "&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=1%2B";


      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
          // first 3 recipe card deck
          for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");

              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");

              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");
              
              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          } 
          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          
          console.log(response);


      });

      
      //video search results
      searchResults();
          
      function searchResults() {

          var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=05&type=video&key=" + APIKey + "&q=" + searchInput;

          $.ajax({
              url: youtubeURL,
              method: "GET"
          }).then(function (response) {

              // Log the resulting object
              console.log(response);
              var resultVid = response.items[0].id.videoId;
              var resultTitle = response.items[0].snippet.title;

              var resultVid2 = response.items[1].id.videoId;
              var resultTitle2 = response.items[1].snippet.title;

              var resultVid3 = response.items[2].id.videoId;
              var resultTitle3 = response.items[2].snippet.title;


              $("#heading").addClass("hide");

              $("#frame").attr("src", "https://www.youtube.com/embed/" + resultVid);
              $("#vid-desc").text(resultTitle);

              $("#frame2").attr("src", "https://www.youtube.com/embed/" + resultVid2);
              $("#vid-desc2").text(resultTitle2);

              $("#frame3").attr("src", "https://www.youtube.com/embed/" + resultVid3);
              $("#vid-desc3").text(resultTitle3);


          }); //vid search response
      }; //searchResults function

  });
  function clear() {
      $("#recipe-view").empty();
      $("#recipe-view-2").empty();
      $("#recipe-view-3").empty();
  }

  $("#meal30min").on("click", function (){
      event.preventDefault();
      clear();
     
      var queryURL = "https://api.edamam.com/search?q=stove&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=30-30";

      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
           // first 3 recipe card deck
           for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          }

          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          console.log(response);


      });

  })

  $("#breakfast").on("click", function (){
      event.preventDefault();
      clear();
      var queryURL = "https://api.edamam.com/search?q=breakfast&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=1%2B";

      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
           // first 3 recipe card deck
           for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          }

          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          console.log(response);


      });

  })

  $("#cake").on("click", function (){
      event.preventDefault();
      clear();
      var queryURL = "https://api.edamam.com/search?q=cake&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=1%2B";

      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
           // first 3 recipe card deck
           for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          }

          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          console.log(response);


      });

  })

  $("#tacos").on("click", function (){
      event.preventDefault();
      clear();
      var queryURL = "https://api.edamam.com/search?q=tacos&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=1%2B";

      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
           // first 3 recipe card deck
           for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          }

          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          console.log(response);


      });

  })

  $("#pasta").on("click", function (){
      event.preventDefault();
      clear();
      var queryURL = "https://api.edamam.com/search?q=pasta&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=1%2B";

      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
           // first 3 recipe card deck
           for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          }

          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          console.log(response);


      });

  })

  $("#chicken").on("click", function (){
      event.preventDefault();
      clear();
      var queryURL = "https://api.edamam.com/search?q=chicken&app_id=f2d4fbd8&app_key=67a6c13a7c80bc6b19e974541a385fca&time=1%2B";

      $.ajax({
          url: queryURL,
          method: "GET"

      }).then(function (response) {
           // first 3 recipe card deck
           for (var i = 0; i < 3; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
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

           // second 3 recipe card deck
           for (var i = 3; i < 6; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-2").prepend(cardDiv);

          }

          // third 3 recipe card deck
          for (var i = 6; i < 9; i++) {
              var imgURL = response.hits[i].recipe.image;
              var recipeURL = response.hits[i].recipe.url;
              var recipeLabel = response.hits[i].recipe.label;
              var totalTime = response.hits[i].recipe.totalTime;
              var dietLabels = response.hits[i].recipe.dietLabels;

              var cardDiv = $("<div>").addClass("card");
              var image = $("<img>").attr("src", imgURL).addClass("card-img-top");

              var cardBodyDiv = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").text(recipeLabel).addClass("card-title");


              var ulGroup = $("<ul>").addClass("list-group list-group-flush");

              var cardText1 = $("<li>").text("Time: " + totalTime + " Minutes").addClass("list-group-item");
              var cardText2 = $("<li>").text("Diet: " + dietLabels).addClass("list-group-item");
              var cardText3 = $("<a>").text("Recipe").attr("href", recipeURL).addClass("list-group-item");



              cardDiv.append(image);
              cardDiv.append(cardBodyDiv);
              cardBodyDiv.append(cardTitle);
              cardBodyDiv.append(ulGroup);
              ulGroup.append(cardText1);
              ulGroup.append(cardText2);
              ulGroup.append(cardText3);

              $("#recipe-view-3").prepend(cardDiv);

          }

          
          $("#search-container").addClass("search-container");
          $("#main-container").removeClass("main-container").addClass("main-container-2")
          
          console.log(response);


      });

  })

  //Youtube-Chef Gordon Videos
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
          video1 = data.items[1].snippet.resourceId.videoId;
          title1 = data.items[1].snippet.title;

          video2 = data.items[2].snippet.resourceId.videoId;
          title2 = data.items[2].snippet.title;

          video4 = data.items[4].snippet.resourceId.videoId;
          title4 = data.items[4].snippet.title;

          var vidURL = "https://www.youtube.com/embed/" + video1;
          $("#frame").attr("src", vidURL);
          $("#vid-desc").text(title1);

          var vidURL2 = "https://www.youtube.com/embed/" + video2;
          $("#frame2").attr("src", vidURL2);
          $("#vid-desc2").text(title2);

          var vidURL4 = "https://www.youtube.com/embed/" + video4;
          $("#frame3").attr("src", vidURL4);
          $("#vid-desc3").text(title4);

      });
  }// loadVids function


});