


function open_menu() {
  if (document.getElementById("hidden-part").style.display === "none" || document.getElementById("hidden-part").style.display === "") {
      $("#hidden-part").addClass("transition");
      document.getElementById("hidden-part").style.display = "flex";
      document.getElementById("open_menu").style.display = "none";
      setTimeout(function() {$("#hidden-part").removeClass("transition");}, 600);
    }

    else {
      $("#hidden-part").addClass("transition");
      document.getElementById("open_menu").style.display = "inline";
      document.getElementById("hidden-part").style.display = "none";
      setTimeout(function() {$("#hidden-part").removeClass("transition");}, 600);
  }}

  $("#open_menu").click(function(){
    open_menu();
    
  })

  $("#close_menu").click(function(){
    open_menu();
    
  })


/*----------------CHANGE_YEAR------------------*/

/*---------------2030 SPECIAL BUTTONS -----------------*/
    $(document).on ("change", ".button_2030", function () {
      var x = this.value;
      var n = this.name;

        $.getJSON( '\\Json\\css_2030.json', {
          format: "json"
        }).done(function( data ) {

          if (x.startsWith("Dyslexia")) {
            if (x == "Dyslexia_1") {
              $("#Fast_readings_1").remove();
              $("head").append("<link rel='stylesheet' class='Dyslexia' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["dislessia"] + "' >");
            } else if (x == "Dyslexia_2") {
              $("#Fast_readings_2").remove();
              $("head").append("<link rel='stylesheet' class='Dyslexia' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["dislessia"] + "' >");
            } else {
              $("#Fast_readings_3").remove();
              $("head").append("<link rel='stylesheet' class='Dyslexia' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["dislessia"] + "' >");
            };
            


          } else if (x.startsWith("Fast_readings")) {
            if (x == "Fast_readings_1") {
              $("#Dyslexia_1").remove();
              $("head").append("<link rel='stylesheet' class='Fast_readings' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["speed_readings"] + "' >");
            } else if (x == "Fast_readings_2") {
              $("#Dyslexia_2").remove();
              $("head").append("<link rel='stylesheet' class='Fast_readings' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["speed_readings"] + "' >");
            } else {
              $("#Dyslexia_3").remove();
              $("head").append("<link rel='stylesheet' class='Fast_readings' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["speed_readings"] + "' >");
            }

          } else {
            if (x == "Normal_1") {
              $("#Dyslexia_1").remove();
              $("#Fast_readings_1").remove();
            } else if (x == "Normal_2") {
              $("#Dyslexia_2").remove();
              $("#Fast_readings_2").remove();
            } else {
              $("#Dyslexia_3").remove();
              $("#Fast_readings_3").remove();
            }
            


          }});

    })





/*---------------OTHERS YEARS -----------------*/
  $(".change_time").click(function(){

    var x = this.getAttribute("value");
    
    
  
/*---------------1915-----------------*/
    if (x == "anno-1915"){
      $.getJSON( '\\Json\\css.json', {
        format: "json"
      }).done(function( data ) {
        let y = data["anno-1915"];
        $("link[about^='change']").remove();
        $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
          + y.file + "' >");
      })

/*---------------2030-----------------*/

      } else if (x == "anno-2030") {
        $.getJSON( '\\Json\\2030.json', {
          format: "json"
        }).done(function( data ) {
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' id='Normal' about='change' type='text/css' href='"
          + data.file + "' >");

        })

      } else if(x == "anno-2021") {

        $.getJSON( '\\Json\\css.json', {
          format: "json"
          }).done(function(data) {
          $("h1[about^='cancel']").remove();
          $("link[about^='change']").remove();
        })

      } else {
        
        $.getJSON( '\\Json\\css.json', {
        format: "json"
        }).done(function( data ) {
        $("h1[about^='cancel']").remove();
        let y = data[x];
        $("link[about^='change']").remove();
        $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
          + y.file + "' >");
      })
    };
    open_menu();
  }

  )

    $(document).on ("click", ".drop-nav", function(e) {
      e.preventDefault()
      // don't allow the event to fire horizontally or vertically up the tree
      e.stopImmediatePropagation()
      // switch the active class that you can use to display the child
      $(this).toggleClass('active')
    })


    
    $(document).on ("click", ".click_position", function () {
      var x = this.getAttribute("value");
      this.value = 0;
      if (x == "Documentation") {
        window.location.assign("templates/documentation.html");
      } else if (x == "Browser") {
        window.location.assign("templates/browser.html");
      } else {
        window.location.assign("../index.html");
      }
      
      }
    )
