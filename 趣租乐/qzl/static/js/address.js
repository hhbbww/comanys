var myScroll;
function loaded() {
    myScroll = new IScroll('#wrapper');
}

var address = document.querySelector('.address');
var create = document.querySelector('.create');
var amend = document.querySelector('.amend');
// var editor = document.querySelectorAll('.address-content .editor p');
var btn = address.querySelector('.btn>button');
var createback = create.querySelector('.create-head .head-img');
var amendback = amend.querySelector('.amend-head .head-img');
btn.addEventListener('touchend',function () {
    address.style.display = 'none';
    create.style.display = 'block';
    amend.style.display = 'none';
});

createback.addEventListener('touchend',function () {
    address.style.display = 'block';
    create.style.display = 'none';
    amend.style.display = 'none';
});

amendback.addEventListener('touchend',function () {
    address.style.display = 'block';
    create.style.display = 'none';
    amend.style.display = 'none';
});
//  点击编辑和删除事件
var lis = address.querySelectorAll('.address-content li');
var uls = address.querySelector('.address-content');
for(let i = 0;i<lis.length;i++){
    var editor = lis[i].querySelectorAll('.editor p');
    editor[0].addEventListener('touchend',function () {
        address.style.display = 'none';
        create.style.display = 'none';
        amend.style.display = 'block';

        // 点击保存事件
        var btns = amend.querySelector('button');
        var val0 = lis[i].querySelectorAll('.information p')[0];
        var val1 = lis[i].querySelectorAll('.information p')[1];
        var val2 = lis[i].querySelector('.add-infor p');
        var value = amend.querySelectorAll('.amend-new input');
        value[0].value = val0.innerHTML;
        value[1].value = val1.innerHTML;
        value[2].value = val2.innerHTML;
        btns.addEventListener('touchend',function () {
            value = amend.querySelectorAll('.amend-new input');
            val0.innerHTML = value[0].value;
            val1.innerHTML = value[1].value;
            val2.innerHTML = value[2].value;
            address.style.display = 'block';
            create.style.display = 'none';
            amend.style.display = 'none';
        });


    });
    editor[2].addEventListener('touchend',function () {
        lis[i].parentNode.removeChild(lis[i]);

    })
}
//  创建地址
// var btnes = create.querySelector('.btn button');
// btnes.addEventListener('touchend',function () {
//    var  Cval = create.querySelectorAll('.create-new input');
//    var str = `
//             <li>
//                 <div class="information">
//                    <p>${Cval[0].innerHTMl}</p>
//                    <p>${Cval[1].innerHTMl}</p>
//                 </div>
//                 <div class="add-infor">
//                     <p>${Cval[2].innerHTMl}</p>
//                 </div>
//                 <div class="editor">
//                     <div class="edi">
//                        <p>编辑</p>
//                        <p>|</p>
//                        <p>删除</p>
//                     </div>
//                 </div>
//            </li>
//    `;
//    console.log(str);
// });
