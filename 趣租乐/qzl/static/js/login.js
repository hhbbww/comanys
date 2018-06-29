window.onload = function () {
    var reqspan = document.querySelectorAll('main>.login>.login-font>span');
    var reqspan2 = document.querySelectorAll('main>.register>.register-font>span');
    console.log(reqspan2)
    var login = document.querySelector('main>.login');
    var req = document.querySelector('main>.register');
    var reqq = document.querySelectorAll(".login-pass>.pass-login>p");
    var forget = document.querySelector("main>.forget");
    reqspan[1].addEventListener('touchend',function () {
        login.style.display = 'none';
        req.style.display = 'block';

    });
    reqq[1].addEventListener('touchend',function () {
        login.style.display = 'none';
        req.style.display = 'block';
        forget.style.display = "none"
    });
    reqspan2[0].addEventListener('touchend',function () {
        login.style.display = 'block';
        req.style.display = 'none';
        forget.style.display = "none"
    });
    reqq[0].addEventListener('touchend',function () {
        login.style.display = 'none';
        req.style.display = 'none';
        forget.style.display = "block"
    });
};