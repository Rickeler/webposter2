$(document).ready(() => {


/* loop scrolling */

$("#end").hover(function(){
        
    $(".scrollbar-a").scrollTo("#start")
})


/*click to jump function*/

    $("#anther-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#anther-bio",400)
        $(".scrollbar-b").scrollTo("#anther-button",400)
        $(".scrollbar-a").scrollTo("#anther-tile",400)
        $(".scrollbar-b").scrollTo("#anther-tile",400)
    })

    $("#emi-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#emi-bio",400)
        $(".scrollbar-b").scrollTo("#emi-button",400)
        $(".scrollbar-a").scrollTo("#emi-tile",400)
        $(".scrollbar-b").scrollTo("#emi-tile",400)
    })

    $("#mich-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#mich-bio",400)
        $(".scrollbar-b").scrollTo("#mich-button",400)
    })

    $("#roon-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#roon-bio",400)
        $(".scrollbar-b").scrollTo("#roon-button",400)
        $(".scrollbar-a").scrollTo("#roon-tile",400)
        $(".scrollbar-b").scrollTo("#roon-tile",400)
    })

    $("#seb-button").click(function(){
        
        $(".scrollbar-a").scrollTo("#seb-bio",400)
        $(".scrollbar-b").scrollTo("#seb-button",400)
        $(".scrollbar-a").scrollTo("#seb-tile",400)
        $(".scrollbar-b").scrollTo("#seb-tile",400)
    })

/* change image on hover. source: https://www.c-sharpcorner.com/blogs/display-another-image-when-hover-on-an-image */

/*anther*/
$("#image-anther-1").hover(
    function(){  
        $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/anther-cardkits.jpeg');  
    },
    function(){  
        $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/anther-cardkits-pixel.png");  
    }, 
);
$("#image-anther-2").hover(
    function(){  
        $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/anther-collages.jpeg');  
    },
    function(){  
        $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/anther-collages-pixel.png");  
    }, 
);
$("#image-anther-3").hover(
    function(){  
        $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/Anther-surface.jpeg');  
    },
    function(){  
        $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/anther-foreign-pixel.png");  
    }, 
);

/*emi and michelle*/
$("#image-emi-1").hover(
    function(){  
        $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/emi-surplusdata.jpeg');  
    },
    function(){  
        $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/emi-surplusdata-pixel.png");  
    }, 
);
$("#image-emi-2").hover(
function(){  
    $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/emi-wheeloffortune.jpeg');  
},
function(){  
    $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/emi-wheeloffortune-pixel.png");  
}, 
);
$("#image-emi-3").hover(
function(){  
    $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/emi-jessamine.jpeg');  
},
function(){  
    $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/emi-jessamine-pixel.png");  
}, 
);

/*roon*/
$("#image-roon-1").hover(
    function(){  
        $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/roon-parsonstypography.jpeg');  
    },
    function(){  
        $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/roon-parsonstypography-pixel.png");  
    }, 
);
$("#image-roon-3").hover(
function(){  
    $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/Roon-googlefonts.png');  
},
function(){  
    $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/roon-googlefonts-pixel.png");  
}, 
);

/*seb*/
$("#image-seb-1").hover(
function(){  
    $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/seb-endangered.jpeg');  
},
function(){  
    $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/seb-endangered-pixel.png");  
}, 
);
$("#image-seb-2").hover(
    function(){  
        $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/seb-overthere.jpeg');  
    },
    function(){  
        $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/seb-overthere-pixel.png");  
    }, 
);
$("#image-seb-3").hover(
function(){  
    $(this).attr('src','/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/seb-syllabic.png');  
},
function(){  
    $(this).attr("src", "/Users/lilyrickels/Desktop/Rickels_3_Webposter/index/images/work/seb-syllabic-pixel.png");  
}, 
);

/* randomize images WIP :(

$(document).ready(function() {
    var images = ['green-1.png', 'green-2.png', 'green-3.png', 'green-4.png', 'green-5.png'];
    
    $('.random-tiles-green').css({'background-image' : images[Math.floor(Math.random() * images.length)] + ')'});
  });


$(document).ready(function() {
    var images = ['purple-1.png', 'purple-2.png', 'purple-3.png', 'purple-4.png', 'purple-5.png'];
    
    $('.random-tiles-purple').css({'background-image' : images[Math.floor(Math.random() * images.length)] + ')'});
  }); */
})