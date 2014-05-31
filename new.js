

(function (open) {

XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {

var changed_url = url;

// alert(changed_url);

request_Param = this;

open.call(this, method, changed_url, async, user, pass);

};

})(XMLHttpRequest.prototype.open);

var request_Param;


(function (send) {

XMLHttpRequest.prototype.send = function (data) {

var changed_url = data;

//alert("1"+changed_url);

request_Param = this;

send.call(this, data);

};

})(XMLHttpRequest.prototype.send);



function injectScript() {

var button = document.createElement('BUTTON');

button.id = 'button' ;

button.className = 'block' ;

var t=document.createTextNode('Fyi');

button.appendChild(t);

var button1 = document.createElement('BUTTON');

button1.id = 'button1' ;

button1.className = 'block' ;

var t1=document.createTextNode('AppScript');

button1.appendChild(t1);

var maincol = document.getElementsByClassName('zc')[0];

$("#button").click(function(){

// ajax call to apply label on hardcoded email id.

$.ajax({

beforeSend: function(xhrObj){

xhrObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");

xhrObj.setRequestHeader("Origin","https://mail.google.com");

xhrObj.setRequestHeader("Referer","https://mail.google.com/mail/mu/mp/870/");

xhrObj.setRequestHeader("Content-Length","303");

xhrObj.setRequestHeader("Access-Control-Allow-Origin","*");

xhrObj.setRequestHeader("User-Agent","Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53");

},

type:'POST',

contentType: 'application/x-www-form-urlencoded;charset=UTF-8',

url: 'https://mail.google.com/mail/u/O/sn/?v=or&ik=87ebc20221&at=AF6bupPPp4PZDqvqvCuccYSSPBg1ajIDYA&subui=iphone&wjt=p&orwas=1&wasmp=870&ui=savannah&h1=en&ts=1401510126595',

data:'1s_jr=%5Bnull%2C%513%5Bnull%2Cnull%2Cnull%2C%5Bnull%2C13%2C%221464bff8266d30c1 %22%2C%221464bff8266d30c1%22%2C%22%5Esmartlabel_personal%22%2C%5B%22fyi%22%5D%2C%5B%50%2C%5B%5D%50%5D%2C%5Bnull%2Cnull %2Cnull%2Cnull%2Cnull%2Cnull%2C%5Bnull%2Ctrue%2Cfalse%5D%50%5D%2C2%2Cnull%2Cnull%2Cnull%2C%2287ebc20221%22%50',

done: function(msg) {

alert("done..!!")

},

error:function(error){

alert("error"+JSON.stringify(error));

}

});



// request_Param = new XMLHttpRequest();

// alert(JSON.stringify(request_Param));

// request_Param.open("POST","https://mail.google.com/mail/u/0/s/?v=or&ik=87ebc20221&at=AF6bupOlYKdGuYkRY2B5fQhH879ndYxtYg&subui=iphone&wjt=p&orwas=1&wasmp=870&ui=savannah&hl=en&ts=1401454853047",true);

// request_Param.send('s_jr=[null,[[null,null,null,[null,13,"1464bff8266d30c1","1464bff8266d30c1","^smartlabel_personal",["fyi"],[],[]]],[null,null,null,null,null,null,[null,true,false]]],2,null,null,null,"87ebc20221"]');

// request_Param.onreadystatechange = function() {

//     if (request_Param.readyState == 4) {

//         alert(request_Param.responseText);

//     }

//  }

});


button1.onclick = function() {

var first_email_threadId = document.getElementsByClassName('an')[0].firstChild.id;

first_email_threadId = first_email_threadId.split('_')[1];

// add the url of the app script.

var api_url= ""; // App script URL

var post_data = "t=" + first_email_threadId + "&";

$.ajax({

type: "POST",

url:api_url,

data: post_data,

processData: false,

success: function (msg) {},

error: function (msg) {}

});

// window.location='https://mail.google.com/mail/mu/mp/287/#tl/inquiry'

};


if(typeof(maincol)!= 'undefined' && maincol != null ){

}

var isFyi = document.getElementById('button');

var isInquiry = document.getElementById('button1');

var compose_button = document.getElementsByClassName('lc')[0].firstChild;

$('#og_head').hide();

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {

if (!isFyi) {

maincol.appendChild(button);

}

if (!isInquiry) {

maincol.appendChild(button1);

}

$('.lc').click(function(){

window.location='ios:webToNativeCall';

});

});

observer.observe(document, {

subtree: true,

attributes: true

});

};
