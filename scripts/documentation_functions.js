


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
  
  





/*---------------OTHERS YEARS -----------------*/
$(".change_time").click(function(){

var x = this.getAttribute("value");



if (x == "anno-1915"){
  $.getJSON( '..\\Json\\cssDocumentation.json', {
    format: "json"
  }).done(function( data ) {
    let y = data["anno-1915"];
    $("h1[about^='cancel']").remove();
    $("#subsection1").prepend(y["title_d"]);
    $("link[about^='change']").remove();
    $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
      + y.file + "' >");
  })


  } else if(x == "anno-2021") {
    $.getJSON( '..\\Json\\cssDocumentation.json', {
      format: "json"
      }).done(function( data ) {
      $("h1[about^='cancel']").remove();
      $("link[about^='change']").remove();
      $("#subsection1").prepend(data["title_normal"]);
      })
    

  } else {
    
    $.getJSON( '..\\Json\\cssDocumentation.json', {
    format: "json"
    }).done(function( data ) {
    $("h1[about^='cancel']").remove();
    $("#subsection1").prepend(data["title_normal"]);
    let y = data[x];
    $("link[about^='change']").remove();
    $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
      + y.file + "' >");
  })
};
open_menu();
})

  
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
          window.location.assign("documentation.html");
        } else if (x == "Browser") {
          window.location.assign("browser.html");
        } else {
          window.location.assign("../index.html");
        }
        
        }
      )


  
  