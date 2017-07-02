/**
 * Created by lohitakshtrehan on 01/07/17.
 */

productinfo=[];
function increasequant(event) {
    retrievelocal();
    here=event.target.getAttribute('id');
    productinfo[parseInt(here)].quantity++;
    savelocal();
    retrievelocal();
}

function retrievelocal() {
    if(productinfo){
    productinfo=JSON.parse(localStorage.getItem('session'));
    retrieve();}
}

function savelocal() {
    localStorage.setItem('session', JSON.stringify(productinfo));

}
