$( document ).ready( function () {
    $('.head__burger').click( function( event ) {
        $( '.head__burger, .head__menu' ).toggleClass( 'burger_active' );
        $( 'body' ).toggleClass( 'lock' )
    } )
} )

$( window ).scroll( function(){
    const $sections = $( '.section' )

    $sections.each( function( i, el ){
        const top  = $( el ).offset().top-100

        const bottom = top + $( el ).height()

        const scroll = $( window ).scrollTop()

        const id = $( el ).attr( 'id' )

        if ( scroll > top && scroll < bottom ){
            $( 'a.active' ).removeClass( 'active' )
            $( 'a[href="#'+id+'"]' ).addClass( 'active' )

        }
    } )
} )

$( "header" ).on( "click", "a", function ( event ) {
    event.preventDefault();

    const id  = $( this ).attr( 'href' )

    const top = $( id ).offset().top

    $( 'body, html' ).animate( { scrollTop: top }, 2000 )
} )

if ( window.pageYOffset === 0 )
    $( '.global' ).addClass( 'active' )
else
    $( '.global' ).removeClass( 'active' )