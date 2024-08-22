<?php
function enqueue_swiperjs() {
    // Enqueue SwiperJS CSS
    wp_enqueue_style( 'swiperjs-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11.0.0' );

    // Enqueue SwiperJS JavaScript
    wp_enqueue_script( 'swiperjs-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11.0.0');
}
add_action( 'wp_enqueue_scripts', 'enqueue_swiperjs' );

function my_child_theme_enqueue_styles() {
    // Enqueue parent theme's stylesheet
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    
    // Enqueue child theme's stylesheet
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array('parent-style') );
}
add_action( 'wp_enqueue_scripts', 'my_child_theme_enqueue_styles' );