require('./bootstrap');

// Page Components
import Common from './pages/Common';

// Boot Vue
const app = new Vue({
    el: '#app',
    components: {
        Common
    }
});
