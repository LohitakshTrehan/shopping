/**
 * Created by lohitakshtrehan on 02/07/17.
 */
cartlisting = [];
$(function () {
    console.log("loading starts");
    retrievecartlocal();
   console.log("loading finishes");
   back=$('#back');
   back.click(function () {
        loadcataloge();
    });
});

function savetocartlocal() {
    console.log('save to local cart starts');
    localStorage.setItem('session', JSON.stringify(cartlisting));
}

function retrievecartlocal() {
    console.log('retrieve cart local starts');
    cartlisting=JSON.parse(localStorage.getItem('session'));
    paintcart();
}
function paintcart() {
    console.log('paint cart starts');
    let products = $('#products');
    let amount = $('#amount');
    products.html("");
    let amountt=0;
    for(index in cartlisting)
    {
        if(cartlisting[index].quantity>0)
        {
            console.log('item appended');
            products.append($(`
    <div class="card card-outline-primary mb-3 ">
        <div class="card-block">
            <blockquote class="card-blockquote">
                <span style="position: relative;left:120px ">${cartlisting[index].name}</span>
                <span style="position: relative;left:370px "> ${cartlisting[index].price}</span>
                <button ppid="${parseInt(index)}" style="position: relative;left:550px " class=" my-addbtn btn btn-outline-primary btn-sm"> <i class="fa fa-plus-circle fa-2x " aria-hidden="true"></i></button>
                <span style="position: relative;left:600px ">${cartlisting[index].quantity}</span>
                <button id="${parseInt(index)}" style="position: relative;left:650px " class="btn btn-outline-primary btn-sm"> <i class="fa fa-minus-circle fa-2x " aria-hidden="true"></i></button>
                <span style="position: relative;left:730px">${(cartlisting[index].price)*(cartlisting[index].quantity)}</span>
            </blockquote>
        </div>
    </div>
            `));
            amountt += (cartlisting[index].price)*(cartlisting[index].quantity);
        }
        amount.text(amountt);
    }
    for(ppindex in cartlisting) {
        if (cartlisting[ppindex].quantity > 0) {
            ztemp=document.getElementById(cartlisting[ppindex].id) ; ztemp.addEventListener('click',dec_stuff);
        }
    }
    let d = document.body.querySelectorAll('.my-addbtn')
    let idex = 0;
    for(jjindex in cartlisting) {
        if (cartlisting[jjindex].quantity > 0) {
            d[idex].addEventListener('click',inc_stuff);
            idex++;
        }
    }
    /*for( idex=0; idex < d.length; idex++ ) {
        d[idex].addEventListener('click',inc_stuff);
    }*/
}

function dec_stuff(event) {
    let x =event.target.getAttribute('id');
    cartlisting[parseInt(x)].quantity--;
    savetocartlocal();
    retrievecartlocal();
}
function inc_stuff(event) {
    let g = event.target.getAttribute('ppid');
    cartlisting[parseInt(g)].quantity++;
    savetocartlocal();
    retrievecartlocal();
}
function loadcataloge() {
    window.location.href='index.html';
}