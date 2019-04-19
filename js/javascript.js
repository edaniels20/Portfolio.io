function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function() {
    document.getElementById('email').onclick = function() {
        var textArea = document.createElement("textarea");
        textArea.value = 'ethandanielscoding@gmail.com';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);x
        alert('Copied To clipboard')
    }
})
// $(document).ready(function () {
//     console.log('Sup');

//     $( '.about-button' ).click(function (event) {
//         console.log('about');
//         event.preventDefault();

//         $( '.about' ).css( 'display', 'block' );
//         $( '.projects' ).css( 'display', 'none');
//         $( '.contact' ).css( 'display', 'none');
//         $( '.about-button' ).addClass( 'nav-after' );
//         $( '.projects-button' ).removeClass( 'nav-after' );
//         $( '.contact-button' ).removeClass( 'nav-after' );
//     })
//     $( '.projects-button' ).click(function (event) {
//         console.log('projects');
//         event.preventDefault();

//         $( '.projects' ).css( 'display' , 'block');
//         $( '.about' ).css( 'display', 'none' );
//         $( '.contact' ).css( 'display', 'none');
//         $( '.projects-button' ).addClass( 'nav-after' );
//         $( '.about-button' ).removeClass( 'nav-after' );
//         $( '.contact-button' ).removeClass( 'nav-after' );
//     })
//     $( '.contact-button' ).click(function (event) {
//         console.log('contact');
//         event.preventDefault();

//         $( '.contact' ).css( 'display', 'block');
//         $( '.about' ).css( 'display', 'none' );
//         $( '.projects' ).css( 'display', 'none' );
//         $( '.contact-button' ).addClass( 'nav-after' );
//         $( '.about-button' ).removeClass( 'nav-after' );
//         $( '.projects-button' ).removeClass( 'nav-after' );
//     })
// })
