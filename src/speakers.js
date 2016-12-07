(function () {
    let templater = require('./templater');
    initialize();

    function initialize() {
        if ($('#speakerForm')[0]) {
            let speakerFormSubmit = $('#submitButton')[0],
                inputName = $('#inputName')[0];
            speakerForm.addEventListener('submit', (e) => {
                fetch(`${speakerForm.getAttribute('action')}\\${inputName.value}`)
                    .then(res => res.json().then(handleResponse));
                e.preventDefault();
                return false;
            });
        }
    }

    function handleResponse(result) {
        let resultEl = $('#result')[0],
            speakerTemplate = $('#speakerTemplate')[0].innerHTML;

        resultEl.innerHTML = '';

        for (let i = 0; i < result.length; i++) {
            resultEl.innerHTML = resultEl.innerHTML + templater(speakerTemplate, result[i]);
        }
    }
})();