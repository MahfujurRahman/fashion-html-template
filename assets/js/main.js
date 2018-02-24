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


        $(".tregel-menu").on("click", function(){
        	$(".offe-canvar-menu, .canvar-menu-overlay").addClass("active");
        	return false;
        })

        $(".menu-close, .canvar-menu-overlay").on("click", function(){
        	$(".offe-canvar-menu, .canvar-menu-overlay").removeClass("active");
        })



         $(".search-treger").on("click", function(){
        	$(".search, .canvar-menu-overlay").addClass("active");
        	return false;
        })

         $(".canvar-menu-overlay").on("click", function(){
        	$(".search, .canvar-menu-overlay").removeClass("active");
        })

         

        $(".product-list").masonry();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	