require('bootstrap');

window.$ = (selector) => document.querySelectorAll(selector);

(function () {
    let speakerForm = $("#speakerForm")[0];
    if (speakerForm) {
        let speakerFormSubmit = $("#submitButton")[0],
            inputName = $("#inputName")[0];
        speakerForm.addEventListener("submit", (e) => {
            fetch(`${speakerForm.getAttribute("action")}\\${inputName.value}`)
                .then(res => res.text()
                    .then(result => {
                        let resultEl=$("#result")[0];
                        resultEl.innerHTML = result;
                    })
                );
            e.preventDefault();
            return false;
        });
    }
})();