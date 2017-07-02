/**
 * Created by lohitakshtrehan on 30/06/17.
 */


$(function () {
    refreshcatalog();
    let cart = $('#cart');
    cart.click(function () {
        loadcart();
    });

});

function refreshcatalog() {
    retrievelocal();
    if (!!!productinfo) {
            $.getJSON("JS/data.json", function (data) {
                productinfo = data;
                savelocal();
                retrievelocal();
            });
    }
        //make it synchronus
    else {
        //retrieve from local storage
        retrievelocal();
    }
}
function loadcart() {
    window.location.href = 'cart.html'
}
function retrieve () {
    $( ".listss" ).html('');
    let lin = [];
    lin[1] = $('#lin1');
    lin[2] = $('#lin2');
    let index =0;
    let pindex=0;
    for(let j=1;j<3;j++) {
        for (i in productinfo) {
            if(index>=3 && pindex<=2)
            {pindex++;}
            else{
                lin[j].append($(`
                        <div  class="card text-center" style="width: 20rem;">
                            <img class="card-img-top" src="http://via.placeholder.com/310x350/333333?text=${productinfo[i].name}" alt="Card image cap">
                            <div class="card-block">
                                <h4 class="card-title">${productinfo[i].name}</h4>
                                <p class="card-text">Price: ${productinfo[i].price}</p>
                                <p  class="card-text">Quanity: ${productinfo[i].quantity}</p>
                                <a id="${parseInt(i)}"  class="btn btn-danger">Add To Cart</a>
                            </div>
                        </div>
`))}
            index++;
            if(index==3 || index==9) {break;}
        }
    }
    for(p in productinfo){
        btemp=document.getElementById(productinfo[p].id) ; btemp.addEventListener('click',increasequant);
    }
}

