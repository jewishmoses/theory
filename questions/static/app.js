const buttons = document.querySelectorAll('button.answer');

buttons.forEach(button => {

    button.addEventListener('click', event => {

        if (button.id == 'correct') {

            button.classList.add('right');
            setTimeout(function () { location.reload(); }, 2000);
            return;
        }

        button.classList.add('wrong');
        setTimeout(function () { document.getElementById('correct').classList.add('right'); setTimeout(function () { location.reload(); }, 1000); }, 1000);
        

    });

});