


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

        $.getJSON( 'css_2030.json', {
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
    
    

    if (x == "anno-1915"){
      $.getJSON( '..\\Json\\css.json', {
        format: "json"
      }).done(function( data ) {
        let y = data["anno-1915"];
        $(".dev_tools").remove();
        $("h1[about^='cancel']").remove();
        $(".header1").prepend(y["title"][n]["other-title"]["title-1"]);
        $(".header2").prepend(y["title"][n]["other-title"]["title-2"]);
        $(".header3").prepend(y["title"][n]["other-title"]["title-3"]);
        $("link[about^='change']").remove();
        $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
          + y.file + "' >");
        $("img[id^='image_background']").remove();
        $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
      })
      } else if (x == "..\\Json\\anno-2030") {
        alert("Select on the top of the articles the modality of visualization");
        $.getJSON( '2030.json', {
          format: "json"
        }).done(function( data ) {
          var x = document.getElementById("number_of_issue").getAttribute("name");
          let y = data[x];
          $('#left-article').prepend("<div class='dev_tools'>" + "<div class='tool'>"+ y["Cirrus_1"] + "</div>" +
          "<div class='tool'>" + y["Trends_1"] + "</div>" + "<div class='tool'>" + y["Terms_Berry_1"] + "</div>" + "</div>");
          $('#center-article').prepend("<div class='dev_tools_center'>" + "<div class='tool'>"+ y["Cirrus_2"] + "</div>" +
          "<div class='tool'>" + y["Trends_2"] + "</div>" + "<div class='tool'>" + y["Terms_Berry_2"] + "</div>" + "</div>");
          $('#right-article').prepend("<div class='dev_tools'>" + "<div class='tool'>"+ y["Cirrus_3"] + "</div>" +
          "<div class='tool'>" + y["Trends_3"] + "</div>" + "<div class='tool'>" + y["Terms_Berry_3"] + "</div>" + "</div>");
          $('#left-article').prepend("<select class='button_2030' name='visualization_1' id='visualization_1'>" +
          "<option value='Normal_1'>Normal</option>" +
          "<option value='Dyslexia_1'>Dyslexia</option>" +
          "<option value='Fast_readings_1'>Fast readings</option>" +
          "</select>");
          $('#center-article').prepend("<select class='button_2030' name='visualization_2' id='visualization_1'>" +
          "<option value='Normal_2'>Normal</option>" +
          "<option value='Dyslexia_2'>Dyslexia</option>" +
          "<option value='Fast_readings_2'>Fast readings</option>" +
          "</select>");
          $('#right-article').prepend("<select class='button_2030' name='visualization_3' id='visualization_1'>" +
          "<option value='Normal_3'>Normal</option>" +
          "<option value='Dyslexia_3'>Dyslexia</option>" +
          "<option value='Fast_readings_3'>Fast readings</option>" +
          "</select>");
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' id='Normal' about='change' type='text/css' href='"
          + data.file + "' >");
          $("img[id^='image_background']").remove();

        })
      } else if(x == "anno-2021") {

        $.getJSON( '..\\Json\\css.json', {
          format: "json"
          }).done(function( data ) {
          $("h1[about^='cancel']").remove();
          $(".dev_tools").remove();
          $(".dev_tools_center").remove();
          $(".button_2030").remove();
          $("link[about^='change']").remove();
        })

      } else {
        
        $.getJSON( '..\\Json\\css.json', {
        format: "json"
        }).done(function( data ) {
        $("h1[about^='cancel']").remove();
        let y = data[x];
        $(".dev_tools").remove();
        $(".dev_tools_center").remove();
        $(".button_2030").remove();
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
