import _ from "lodash";
window._ = _;

import Swal from "sweetalert2";
window.Swal = Swal;

import * as Popper from "@popperjs/core";
window.Popper = Popper;

import $ from "jquery";
window.$ = window.jQuery = $;

import "bootstrap";

import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// Uncomment these lines if you're using Echo
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
// window.Pusher = Pusher;
//
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
