function changeImage(num){
    const mainImage = document.getElementById('main-hotel-image')

    if(num==1){
        mainImage.src = "../images/img2.png";
    }else if(num==2){
        mainImage.src = "../images/img3.png";
    }else if(num==3){
        mainImage.src = "../images/imgmissing.png";
    }else if(num==4){
        mainImage.src = "../images/recapimg2.png";
    }else if(num==5){
        mainImage.src = "../images/recapimg3.png";
    }else if(num==6){
        mainImage.src = "../images/recapimg4.png";
    }else if(num==7){
        mainImage.src = "../images/recapimg5.png";
    }else if(num==8){
        mainImage.src = "../images/recapimg6.png";
    }
}


const guestElement = document.getElementById("guestNumber");

function increNumber() {

    let gNum = parseInt(guestElement.innerText);

    if (gNum < 10) {
        gNum++;
        guestElement.innerText = gNum;  
    }
    else {
        alert('You Cant Add More Than 10 Quantity. ')
    }
}

function decrNumber() {
    
    let gNum = parseInt(guestElement.innerText);
    
    if (gNum > 1) {
        gNum--;
        guestElement.innerText = gNum;  
    }
    else {
        alert('Quantity Can Not Be Less Than 1. ')
    }

}

function confirmcart() {

    const isConfirmed = confirm("Your Product in Your Cart.");
}
function buy() {

    const isConfirmed = confirm("Your Order is confirmed");
}