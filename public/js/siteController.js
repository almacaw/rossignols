$(document)
  .ready(function() {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      })
    ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

    // Read more links

    //var $readmorelink = $( "<div><a class='ui centered link button readmore'>Read more</a></div>" );
    //$( ".reading.container p:first-child" ).append($readmorelink);
    //$( ".reading.container p:nth-child(n+2)" ).hide();
    //$( ".readmore" ).on( "click", function() {
    //$( ".reading.container p:nth-child(n+2)" ).transition('fade');
    //$( this ).hide();
    //});
    //

    /*The image gallery*/
    $( ".galleryfy .image" ).on( "click", function() {
      $('.modal').modal('show');
      return false;
    });

    /*Scrolldown to content*/
    $( ".scrollToContent" ).on( "click", function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#mainContent").offset().top
    }, 700);
      return false;
    });

    /**
    if there are any images then
    create an array of images
    create a gallery
    append the images to the gallery
    attach the event to the images
    **/
    if ( $( ".galleryfy .image" ).length ) {
    /*Make a gallery container*/
    var $modalGalleryContainer = '<div class="ui modal"><i class="close icon"></i><div class="header">Photos</div><div class="content"><div class="ui grid centered"><div class="fotorama" data-nav="thumbs" data-height="70%" data-ratio="800/600" data-aspect="cover"></div></div></div></div>';
    /*Attache to body tag*/
    $( "body" ).append($modalGalleryContainer);
    /*Append photos to new div and start fotorama*/
    var $modalImages = ( $( ".galleryfy .image" ).toArray() );

      for ( var i = 0; i < $modalImages.length; i++ ) {
        $( ".fotorama" ).append($($modalImages[i]).clone());
      }


    }

  })
;
