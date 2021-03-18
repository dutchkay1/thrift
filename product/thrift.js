//get o\prodct row
//loop produvt data 
// innerhtml  

function currency(num){
    const currency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' });
    return currency.format(num)
}

let cont ='';
items.forEach(item=>{
    cont += `<div class="col-sm col-md-6 col-lg-4 ftco-an">
    <div class="product">
        <a href="product-single.html" class="img-prod"><img class="img-fluid col-lg-12" src='../product_images/${item.image1}' alt="Colorlib Template"></a>
        <div class="text py-3 px-3">
            <h3><a href="#"></a></h3>
            <div class="d-flex">
                <div class="pricing">
                    <p class="price">market price ${currency(item.market_price)}<span></span></p>
                    <p class="price">selling price ${currency(item.selling_price)}<span></span></p>
                </div>
                <div class="rating">
                
                    
                </div>
            </div>
            <hr>
            <h3>Description: ${item.descripition} </h3>
            <hr>
                
            <a href="https://wa.me/2348023641729"><i class="fa fa-whatsapp" style="font-size: 30px; margin-left: 10%; color: rgb(19, 255, 38)"></i></a>
            <a href=""><i class="fa fa-twitter" style="font-size: 30px; margin-left: 13%; color:rgb(0, 195, 255)"></i></a>
            <a href=""><i class="fa fa-instagram" style="font-size: 30px; margin-left: 13%; color: rgb(255, 45, 133);"></i></a>
            <a href=""><i class="fa fa-facebook-square" style="font-size: 30px; margin-left: 20%; color: rgb(0, 80, 253);"></i></a>
            <hr>
            <p class="bottom-area d-flex">
                <button class="btn " style="margin-left: 15%; width: 70%;">
                <a href="checkout.html" class="add-to-cart"><span style="font-size: 20px; font-weight: 600;">Buy</span></a></button>

            </p>
        </div>
    </div>
</div>`;
    
    
})

document.getElementById('list').innerHTML= cont;
