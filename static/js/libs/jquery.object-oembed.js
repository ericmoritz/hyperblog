// This is currently enabled using embedly, but you could use
// your own universal endpoint
var objoembed_main = function() {
  //
  // Here we select all the object tags that have the type of 
  // application/json+oembed.  The type lets us know that the URI in
  // the data attribute is to be used as an oembed URI.
  $("object.oembed").each(function() {
    //
    // Here we extract the needed data from the object tag
    var otag = $(this);
    var uri = otag.attr("data");
    var width = otag.attr("width");
    var height = otag.attr("height");
    var options = {};

    // Here we build the options for the oembed endpoint
    if(width) { options.maxWidth = width;}
    if(height) { options.maxHeight = height; }

    function on_success(oembed, textStatus, xhr) {
      // When we have a successful response, we replace the content
      var title = oembed.title;
    }
    
    otag.oembed(uri, options);

  });
}

$(objoembed_main);
