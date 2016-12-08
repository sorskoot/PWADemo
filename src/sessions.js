(function () {
    let templater = require('./templater');

    initialize();

    function initialize() {
        if ($('#sessionResult')[0]) {
            fetch('/api/sessions').then(r => r.json().then(handleResponse))
        }
    }

    function handleResponse(result) {
        let resultEl = $('#sessionResult')[0],
            sessionTemplate = $('#sessionTemplate')[0].innerHTML,
            specialSessionTemplate = $('#specialSessionTemplate')[0].innerHTML;

        resultEl.innerHTML = '';

        for (let i = 0; i < result.length; i++) {
            if (result[i].special) {
                resultEl.innerHTML = resultEl.innerHTML + templater(specialSessionTemplate, result[i]);
            } else {
                resultEl.innerHTML = resultEl.innerHTML + templater(sessionTemplate, result[i]);
            }
        }
    }
})();