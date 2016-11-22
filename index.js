


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

    $('#gform *').fadeOut(2000);
    $('#in-touch-content').text('Your submission has been processed...');
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
