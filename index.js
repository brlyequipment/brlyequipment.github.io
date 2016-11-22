var correct = false;


$( document ).ready( () => {

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ccb283",
        "opacity": 0.35,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 800,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });



  $('#insta').mouseover(() =>{
    $('#insta-p').css({'fill':'#e95950'});
  });
  $('#insta').mouseleave(() =>{
    $('#insta-p').css({'fill':'#9E9E9E'});
  });

  $('#facy').mouseover(() =>{
    $('#facy-p').css({'fill':'#3b5998'});
  });
  $('#facy').mouseleave(() =>{
    $('#facy-p').css({'fill':'#9E9E9E'});
  });


  $('#gform').on('submit', function(e) {

    if (correct == false) {
      $('#submit-input').effect( "shake" );
      $('#in-touch-content').text('You must submit a valid email.');
      setTimeout(function () {
        $('#in-touch-content').text('Submit your information and we will contact you with updates');
        $('#in-touch-content').css({'color':'#222'});
      }, 4000);
      $('#in-touch-content').css({'color':'#FF5733'});
      return false;
    }

    $('#gform *').fadeOut(2000);
    $('#in-touch-content').text('Your submission has been processed...');
  });

  $('.email-input').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
       let email = $(".email-input").val();
       if (email == "") {
         $(".email-input").css({"border": "none"});
       }
       else {
         if (validateEmail(email)) {
           //$(".email-input").text(email + " is valid :)");
           $(".email-input").css({"border": "1px solid #18bc9c"});
           correct = true;
         } else {
           //$(".email-input").text(email + " is not valid :(");
           $(".email-input").css({"border": "1px solid #FF5733"});
           correct = false;
         }
       }
     }
   });
 });






  var theater = theaterJS();

  theater
    .on('type:start, erase:start', function () {
      // add a class to actor's dom element when he starts typing/erasing
      var actor = theater.getCurrentActor()
      actor.$element.classList.add('is-typing')
    })
    .on('type:end, erase:end', function () {
      // and then remove it when he's done
      var actor = theater.getCurrentActor()
      actor.$element.classList.remove('is-typing')
    })

  theater
    .addActor('Think')

  theater
    .addScene('Think: Smarter', 900)
    .addScene('Think: Stronger', 900)
    .addScene('Think: Bigger', 900)
    .addScene('Think: BRLY', 5000)
    //.addScene(theater.replay)

});


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
