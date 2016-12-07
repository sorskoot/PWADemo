require('bootstrap');
require('./sessions');
require('./speakers');

window.$ = (selector) => document.querySelectorAll(selector);

(function () {
    
    //https://console.firebase.google.com/project/pwa-demo-c552b/settings/cloudmessaging
    // var gcmAPIKey = 'AAAAw50E9c4:APA91bHT27GkICgse7r7xenThVZqTkbaS-5_at1AGKp6nDDsg9Ls_40aOxetv7bw1a1AN73z8uTrlM67qHA0V6FdV5B0XfqbKhgGV9uOkW8H8MBw6P6nDPJ5ApUcgR7ZP42ZgGY3bM1ivl4b5GzblseVHaqhq8vPqA'
    // var GCM_ENDPOINT = 'https://android.googleapis.com/gcm/send';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    }

            
})();