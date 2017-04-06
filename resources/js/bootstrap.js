window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.CSRF_TOKEN,
    'X-Requested-With': 'XMLHttpRequest'
};
