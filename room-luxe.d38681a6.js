var numberCastInput=document.querySelector("[name=numberCast]"),quantityInput=document.querySelector("[name=quantity]"),total=document.querySelector(".total"),quantityLabel=document.querySelector(".quantity-label");function calculateCost(){var t=3e3*numberCastInput.value;console.log(t),document.getElementById("numberСost").value=t.toFixed(2)}calculateCost(),numberCastInput.addEventListener("input",calculateCost),quantityInput.addEventListener("input",calculateCost),quantityInput.addEventListener("input",updateQuantityLabel);
//# sourceMappingURL=room-luxe.d38681a6.js.map