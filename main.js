jQuery(document).ready(function() {
    "use strict"

    $(".body").ripples({ //function to get the  ripple water effect 
        dropRadius: 12,
        perturbance: 0.01,

    });
});

document.addEventListener('DOMContentLoaded', function() {

    var days = document.querySelector('.days span');
    var hour = document.querySelector('.hour');
    var min = document.querySelector('.min');
    var second = document.querySelector('.second');

    var startDate = new Date(2021, 2, 20);
    days.innerText = Math.floor((new Date - startDate) / 86400000);
    countTime();

    function countTime() {
        let today = new Date();
        let ms = (today - startDate) % 86400000;
        hour.innerText = Math.floor(ms / 3600000);
        min.innerText = Math.floor(ms % 3600000 / 60000);
        second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
    }

    setInterval(countTime, 1000);

}, false);