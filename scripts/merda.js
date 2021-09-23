
$(document).ready(main);

function main() { /* --------------OPEN NAVBAR AT THE START----------------*/
  open_issues();
}


/* --------------ACTION MENU BUTTON----------------*/
$("#open_menu").click(function(){
  open_menu();
  
})

$("#close_menu").click(function(){
  open_menu();
  
})

/* --------------ACTION MENU METADATA----------------*/
$("#metadata").click(function(){
  document.getElementById("section-metadata").style.display = "flex";
  document.getElementById("metadata").style.visibility = "hidden";
})

$("#close-button-metadata").click(function(){
  document.getElementById("section-metadata").style.display = "none";
  document.getElementById("metadata").style.visibility = "visible";
})



/*-------------------------------------------*/
/* --------------CHANGE YEARS----------------*/
/*-------------------------------------------*/

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


$(document).ready ( function () {

  /*---------------OTHERS YEARS -----------------*/
  $(".change_time").click(function(){

    var x = this.getAttribute("value");
    var n = document.getElementById("issue").innerHTML;

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
      } else {
        
        $.getJSON( '..\\Json\\css.json', {
        format: "json"
        }).done(function( data ) {
        let c = data["anno-1915"];
        $("h1[about^='cancel']").remove();
        $("#left-article").prepend(c["title"][n]["normal-title"]["title-1"]);
        $("#center-article").prepend(c["title"][n]["normal-title"]["title-2"]);
        $("#right-article").prepend(c["title"][n]["normal-title"]["title-3"]);
        let y = data[x];
        $(".dev_tools").remove();
        $(".dev_tools_center").remove();
        $(".button_2030").remove();
        $("link[about^='change']").remove();
        $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
          + y.file + "' >");
        $("img[id^='image_background']").remove();
        $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
      })
    };
    open_menu();
  }

  )





  /* load the issues from the JSON */

  $("div[id^='issue-']").click(function(){
    var y = document.getElementById("change_time");
    var x = this.id;
    if (y != x){
      $.getJSON( '..\\Json\\html_file.json', {
        format: "json"
      }).done(function( data ) {
        var n = data[x];
        $("#image_open_articles").remove();
        $('#left-article').load(n.html1);
        $('#center-article').load(n.html2);
        $('#right-article').load(n.html3);
        $('#metadata-left-article').load(n.metadata1);
        $('#metadata-center-article').load(n.metadata2);
        $('#metadata-right-article').load(n.metadata3)
        document.getElementById('issue').innerHTML = n.position;
        $(".dev_tools").remove();
        $(".dev_tools_center").remove();
        $(".button_2030").remove();
        $("link[about^='change']").remove();
        document.getElementById('metadata').style.pointerEvents = "all";
        document.getElementById("Navbar").style.pointerEvents = "all";
        document.getElementById("metadata").style.pointerEvents = "all";

      });
      

    open_issues();
    if (document.getElementById("Navbar-issue").style.zIndex == "4" ||
    document.getElementById("Navbar-issue").style.zIndex == "") {
      setTimeout(function() {document.getElementById("Navbar-issue").style.zIndex = "2"}, 185);
  } else {
        
        document.getElementById("cover-page").style.height = "100vh";
        document.getElementById("image_open_articles").style.height = "100vh";
    };
  }});


  $("#section-open-button").click(function(){
    open_issues();
    
  })


});
  
/*-------------------------------------------*/
/* ------------METADATA FUNCTION-------------*/
/*-------------------------------------------*/


$(document).on ("click", "input[id^='check_metadata']", function () {
  let s = $("." + this.className)
  if (s[0].checked) {
    let n = String(s[0].className)
    if (n.startsWith("check_metadata_1_")) {
      $("#left-article ." + s[0].value).css("background-color", s[1].value);
    } else if (n.startsWith("check_metadata_2_")) {
      $("#center-article ." + s[0].value).css("background-color", s[1].value);
    } else if (n.startsWith("check_metadata_3_")) {
      $("#right-article ." + s[0].value).css("background-color", s[1].value);
    }}

  else {
    let n = String(s[0].className)
    if (n.startsWith("check_metadata_1_")) {
      $("#left-article ." + s[0].value).css("background-color", 'transparent');
    } else if (n.startsWith("check_metadata_2_")) {
      $("#center-article ." + s[0].value).css("background-color", 'transparent');
    } else if (n.startsWith("check_metadata_3_")) {
      $("#right-article ." + s[0].value).css("background-color", 'transparent');
    }}
});

/* Function that change the color of the highlighter */
$(document).on ("change", "input[id^='color_entites']", function () {
  let s = $("." + this.className);
  if (s[0].checked) {
    let n = String(s[0].className)
    if (n.startsWith("check_metadata_1_")) {
      $("#left-article ." + s[0].value).css("background-color", s[1].value);
    } else if (n.startsWith("check_metadata_2_")) {
      $("#center-article ." + s[0].value).css("background-color", s[1].value);
    } else if (n.startsWith("check_metadata_3_")) {
      $("#right-article ." + s[0].value).css("background-color", s[1].value);
    }}
});


$(document).on ("click", "input[id^='check_topic']", function () {
  let s = $("." + this.className);
  if (s[0].checked) {
    let n = String(s[0].className)
    if (n.startsWith("check_topic_1_")) {
      $("#left-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
    } else if (n.startsWith("check_topic_2_")) {
      $("#center-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
    } else if (n.startsWith("check_topic_3_")) {
      $("#right-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
    }} 
    
  else {
    let n = String(s[0].className);
    if (n.startsWith("check_topic_1_")) {
      $("#left-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", 'transparent');
  } else if (n.startsWith("check_topic_2_")) {
      $("#center-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", 'transparent');
  } else if (n.startsWith("check_topic_3_")) {
      $("#right-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", 'transparent');
    
    }
}
});

$(document).on ("change", "input[id^='color_topic_']", function () {
  let s = $("." + this.className);
  if (s[0].checked) {
    let n = String(s[0].className)
    if (n.startsWith("check_topic_1_")) {
      $("#left-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
    } else if (n.startsWith("check_topic_2_")) {
      $("#center-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
    } else if (n.startsWith("check_topic_3_")) {
      $("#right-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
    }}
  });

  /* Cross comparison among all the three articles of one issue */
$(document).on ("click", "button[class^='check_']", function () {
  let s = $("." + this.className);
  $(".article [about~='" + s[2].getAttribute("about") + "']").css("background-color", "yellow");
  $(".article ." + s[2].getAttribute("about") + "").css("background-color", "yellow");
});

$(document).on ("click", "button[id^='delete_']", function () {
  let s = $("." + this.className);
  $(".article [about~='" + s[3].getAttribute("about") + "']").css("background-color", "transparent");
  $(".article ." + s[2].getAttribute("about") + "").css("background-color", "transparent");
});






/*-------------------------------------------*/
/* ------------Ancillary funtion-------------*/
/*-------------------------------------------*/



function load(file) {
  $.ajax({
    method: 'GET',
    url: file,
    success: function(d) {
      return file
    },
    error: function(d) {
      alert('Non ho potuto caricare il file '+file)
    }
  });
}



function open_issues() {
  if (document.getElementById("Navbar-issue").style.height === "100%") {
      document.getElementById("Navbar-issue").style.height = "5%";
      document.getElementById("section-images_issue").style.display = "none";
      document.getElementById("section-article").style.position = "relative";
      document.getElementById("section-article").style.height = "90%";
      document.getElementById("section-article").style.removeProperty("display");
      document.getElementById("disappear").style.display = "inline";
      document.getElementById("minimize").style.display = "none";


    }

    else {

      document.getElementById("minimize").style.display = "inline";
      document.getElementById("disappear").style.display = "none";
      document.getElementById("Navbar-issue").style.height = "100%";
      document.getElementById("section-images_issue").style.display = "flex";
      document.getElementById("section-article").style.position = "absolute";
      document.getElementById("section-article").style.display = "none";
    }
  }


function open_menu() {
  if (document.getElementById("hidden-part").style.display === "none" || document.getElementById("hidden-part").style.display === "") {
      $("#hidden-part").addClass("transition");
      document.getElementById("hidden-part").style.display = "flex";
      document.getElementById("open_menu").style.visibility = "hidden";
      setTimeout(function() {$("#hidden-part").removeClass("transition");}, 600);
    }

    else {
      $("#hidden-part").addClass("transition");
      document.getElementById("open_menu").style.visibility = "";
      document.getElementById("hidden-part").style.display = "none";
      setTimeout(function() {$("#hidden-part").removeClass("transition");}, 600);
  }}



$(document).on ("click", ".click_position", function () {
    var x = this.getAttribute("value");
    this.value = 0;
    if (x == "Documentation") {
      window.location.assign("documentation.html");
    } else if (x == "Browser") {
      window.location.assign("browser.html");
    } else {
      window.location.assign("../index.html");
    }
    
    }
  )
  

  $(document).on ("click", ".drop-nav", function(e) {
    e.preventDefault()
    // don't allow the event to fire horizontally or vertically up the tree
    e.stopImmediatePropagation()
    // switch the active class that you can use to display the child
    $(this).toggleClass('active')
  })
  


