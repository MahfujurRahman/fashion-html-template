(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".frist-carousel").owlCarousel({
        	items:1,
        	autoplay:false,
        	dots:false,
        	loop:true,
        	nav:true,
        	navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"]
        });

        $(".product-promotion").owlCarousel({
        	items:1,
        	autoplay:false,
        	dots:true,
        	loop:true,
        	nav:false,
        });



        $(".product-list").masonry();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	