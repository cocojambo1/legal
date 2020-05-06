$( document ).ready( function() {
    $( "#phone" ).mask( "+7 (999) 999-99-99" )
})

$( 'textarea' ).each( function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;')
} ).on( 'input', function () {
    this.style.height = 'auto'
    this.style.height = ( this.scrollHeight ) + 'px'
} )

$( '#btn' ).on( 'click', function () {
    const name = $( '#name' ).val().trim()
    const email = $( '#email' ).val().trim()
    const phone = $( '#phone' ).val().trim()
    const subject = $( '#subject' ).val().trim()
    const mess = $( '#mess' ).val().trim()

    const arrInput = {
        name,
        email,
        phone,
        subject,
        mess,
    }

    if ( name === '' || email === '' || phone === '' || subject === '' || mess === '' ) {

        for ( let key in arrInput )
            if ( arrInput[ key ] === '' )
                $( `.${ key }` ).addClass( 'inputError' )


        $( '.e' ).addClass( 'trueError' )

        setTimeout( () => $( '.e' ).removeClass( 'trueError' ), 6000 )
    } else {
        const data = $( '#mailForm' ).serialize()

        $( '.name' ).removeClass( 'inputError' )
        $( '.email' ).removeClass( 'inputError' )
        $( '.phone' ).removeClass( 'inputError' )
        $( '.subject' ).removeClass( 'inputError' )
        $( '.mess' ).removeClass( 'inputError' )

        $.ajax({
            url: 'php/mail.php',
            type: 'POST',
            cache: false,
            data: JSON.stringify( data ),
            dataType: 'json',
            beforeSend() {
               $( '#btn' ).addClass( 'disabledBtn' )
            },
            success( data ) {
                if ( !data['error'] ) {
                    $('#btn').removeClass('disabledBtn')

                    $( '#mailForm' ).trigger( 'reset' )

                    $('.submit').addClass('trueSubmit')

                    setTimeout(() => $('.submit').removeClass( 'trueSubmit' ), 6000)
                } else
                    console.error( data )
                
            }
        })
    }
} )