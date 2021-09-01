




    $("#change_time").change(function(){
      var x = this.value;

      if (x == "anno-1915"){
        $.getJSON( 'css.json', {
          format: "json"
        }).done(function( data ) {
          let y = data["anno-1915"];
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
            + y.file + "' >");
          $("img[id^='image_background']").remove();
          $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
        })
        } else if (x == "anno-2030") {
          $.getJSON( '2030.json', {
            format: "json"
          }).done(function( data ) {
            let y = data[x];
            $("link[about^='change']").remove();
            $('head').append("<link rel='stylesheet' id='Normal' about='change' type='text/css' href='"
            + data.file + "' >");
            $("img[id^='image_background']").remove();

          })
        } else {
          
          $.getJSON( 'css.json', {
          format: "json"
          }).done(function( data ) {
          let y = data[x];
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
            + y.file + "' >");
          $("img[id^='image_background']").remove();
          $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
        })
      }}
    );


    $(document).on ("change", "#change_page", function () {
      var x = this.value;
      if (x == "Documentation") {
        window.location.assign("documentation_style.html");
      } else {
        window.location.assign("browser.html");
      }
      }
    )

  

