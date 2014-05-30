function injectScript() {     
    var button = document.createElement('BUTTON');     
    button.id = 'button';     
    button.className = 'block';     
    var t = document.createTextNode('Fyi');     
    button.appendChild(t);     
    var button1 = document.createElement('BUTTON');     
    button1.id = 'button1';     
    button1.className = 'block';     
    var t1 = document.createTextNode('Inquiry');     
    button1.appendChild(t1);     
    var maincol = document.getElementsByClassName('zc')[0];     
    button.onclick = function () {     
        alert('hey');     
        var key1 = "'1463d981ea1545ec'";     
        var key3 = "'^smartlabel_personal'";     
        var key4 = "'fyi'";     
        var key5 = "'87ebc20221'";      
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            url: 'https://mail.google.com/mail/u/0/s/?v=or&ik=87ebc20221&at=AF6bupPiOdG-bap-38OkoUmVPiIshvQI0w&subui=iphone&wjt=p&orwas=1&wasmp=870&ui=savannah&hl=en&ts=1401439773372',
            data: 's_jr= [null,[[null,null,null,[null,13,' + key1 + ',' + key1 + ',' + key3 + ',[' + key4 + '],[],[]]],[null,null,null,null,null,null,[null,true,false]]],2,null,null,null,' + key5 + ']',
              success: function (msg) {}
        });     
    };     
    button1.onclick = function () {     
        window.location = 'https://mail.google.com/mail/mu/mp/287/#tl/inquiry'     
    };     
    if (typeof (maincol) != 'undefined' && maincol != null) {     }     
    var isFyi = document.getElementById('button');     
    var isInquiry = document.getElementById('button1');     
    var compose_button = document.getElementsByClassName('lc')[0].firstChild;     
    $('#og_head').hide();     
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;     
    var observer = new MutationObserver(function (mutations, observer) {     
        if (!isFyi) {     
            maincol.appendChild(button);     
        }     
        if (!isInquiry) {     
            maincol.appendChild(button1);     
        }     
        $('.lc').click(function () {     
            window.location = 'ios:webToNativeCall';     
        });     
    });     
    observer.observe(document, {     
        subtree: true,
             attributes: true     
    });
};