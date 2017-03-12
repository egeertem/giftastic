
/*
Problem: We would like to have top 10 Gifs from giffy site to be presented according to a handful of (ok, maybe 15) pre-defined categories, up on click to a given category, top ten gifs how up. We would like to be able to add extra categories as required. 

Target users: Zach and Ege and my wife. 

Interface: Buttons that will be on top of the page.


Testing: Simple funtionality testing no corner cases. 

Maintainer:

Ege Ertem, email to ertem@ephesusventures.com 

Functional requirements: 

	// The player will have an access to 20 type of gif categories. 
    // When clicked any of those categories top 10 most popular gifs are being displayed. 
	// There is an area where you can enter extra new category.... 


	// Sequence chart === > State Diagram === > Flow chart ===> Pseudo code.   

	//   					Variables come with the State diagram.

//******** State starts *************

/
//Varaiables: 



// State 1 / (Initial) 
 Nothing is listed..... 

// Transition:


//State 2 

Buttons are created 




//State 3 /

When you click the buttons giffs are created



Trivia states  | behaviour
---------------------------------------------------
State 1 / Initial            | Display Start and timer @ 30 sec.
                             | rigthAnswers: 0;
                             | wrongAnswers: 0; 
                             | funtion() countdown(): not started
                             | 
                             |  




Trivia states  | behaviour
---------------------------------------------------
State 2 / Initial            | Display Start and timer @ 30 sec.
                             | rigthAnswers: 0;
                             | wrong answers: 0; 
                             | funtion() countdown(): going down. 

Trivia states  | behaviour
---------------------------------------------------
State 3 / Initial            | Display: 
                             | # of right answers: rigthAnswers;
                             | # of wrong answers: wrong answers; 
                             | funtion() countdown(): at zero.



    
    



//******** State starts *************

// State 1 / (Initial) 

When you enter a name 

A button is created. That is renderButton() function...... 

You just have that. 

//  

    
*/

//when click to #animal-name-submit-btn then a button is created. 



$(document).ready(function(){

            var arrayGifs = [];

           // console.log("ready");

           //console.log (arrayGifs);




           function alertGifName() {

        var gif = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+"gif"+"&api_key=dc6zaTOxFJmzC" ;
        
        

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          
          var imageUrl = response.data.images;


        //   $("#first_row").html(JSON.stringify(imageUrl));
       
         var gifImage = $ ("<img>");

         gifImage.attr("src", imageUrl);
         gifImage.attr("alt", "gif image");

         $("#gifs_view2").prepend(gifImage);


         // console.log (response.data.array[0].bitly_gif_url);
           console.log(imageUrl);
          //console.log(response);
          // console.log(queryURL);
          renderButtons();
        });


           }

           function renderButtons() {

            //delete gif names before addding
            $("#gifs-view").empty();

            //Loop through the array of GIFs

            for (var i = 0; i < arrayGifs.length; i++) {

                    //generate buttons for the gif search names found in the array.

                    var a = $("<button>");

                    //Write the text in the array on to the button

                    a.text(arrayGifs[i]);

                    //I want to add data
                    a.attr("data-name", arrayGifs[i]);
                    //I want to add a class... so I can manipulate how buttons look. 
                    a.addClass("btn btn-default created-button");

                    //add button to HTML so I can test/see

                    $("#gifs-view").append(a);



                    





                         
                     }         




           }

      


        //Now I want to handle the event when the buttons are being clicked

         $("#add-gif").on("click", function(event) {

                    // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();

        var animal = $("#gif-input").val().trim();

       // console.log(animal);

        arrayGifs.push(animal);

        //console.log(arrayGifs);

 renderButtons();
             });

 

 

        $(document).on("click", ".created-button", alertGifName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

   });




