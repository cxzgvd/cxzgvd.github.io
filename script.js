$(document).ready(function() {
    var inputField = $('.terminal-input');
    var passwordField = $('.password-input');
    

    inputField.focus();
    


    
    passwordField.hide();

    inputField.on('keydown', function(event) {
        if (event.which == 13) {
            event.preventDefault();
            var command = inputField.val();
            $('.output').append('<p>' + '$ ' + command + '</p>');

            if (command === 'linkedin') {
                $('.output').append('<p><a href="https://www.linkedin.com/in/filip-slendakowski/">https://www.linkedin.com/in/filip-slendakowski/</a></p>');
            } else if (command === 'clear') {
                $('.output').html('');
            } else if (command === 'help') {
                $('.output').append('<p>Dostępne komendy: whoami, skills, linkedin, youtube, github, clear, help </p>');
            }  else if (command === 'github') {
                $('.output').append('<p><a href="https://github.com/cxzgvd">https://github.com/cxzgvd</a></p>');
            } else if (command === 'whoami') {
                $('.output').append('<p>Jestem uczniem technikum i w wolnych chwilach zajmuję się cyberbezpieczeństwem. Jestem posiadaczem kilku certyfikatów: SC-900, AZ-900, CCNA');
            }  else if (command === 'skills') {
                $('.output').append('Do moich umiejtnośći zaliczają się<ul><li>Znajomość sieci komputerowe</li><li>Zabezpieczenia sieci i systemów</li><li>Pentesting sieci, aplikacji webowych i mobilnych</li><li>Analiza malware \'u</li><li>Monitorowanie zdarzeń związanych z bezpieczeństwem</li><li>Znajomość języków programowania: Python (średnio zaawansowany), c#/c++/java/go (podstawowy)</li><li>Bezpieczeństwo w chmurze</li></ul></p>');
            } else if (command === 'sudo rm -rf /') {
                addToTerminal('Żartujesz sobie?');
            } else if (command === 'courses'){
                $('.output').append('<p>Ukończyłem takie kursy jak .');
            } else {
                $('.output').append('<p>' + 'Nie znaleziono komendy: ' + command + '</p>');
            }

            inputField.val('');
            $('.terminal').scrollTop($('.terminal')[0].scrollHeight);
        }
    });

    inputField.on('keyup', function(event) {
        inputField.focus();
    });

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    
});