$( document ).ready( function () {
    $('.head__burger').click( function( event ) {
        $( '.head__burger, .head__menu' ).toggleClass( 'active' );
        $( 'body' ).toggleClass( 'lock' )
    } )
} )