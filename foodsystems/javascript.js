$(document).ready(() => {
    $("#addse").click(function () {
        $(".add_result").slideToggle();
    });
    $("#addcart").click(() => {
        if (document.getElementById("values").value == "") {
            alert("the input is empty order to calculate the order")
        }
        else {
            let price = 90;
            alert("the total price of all product ordered is:" + price * document.getElementById("values").value + "$")
            $(".add_result").slideUp();
        }
    })
    $("#add2").click(function () {
        $(".add_result").slideToggle();
    });
    $("#addcarts").click(() => {
        if (document.getElementById("values2").value == "") {
            alert("the input is empty order to calculate the order")
        }
        else {
            let price = 90;
            alert("the total price of all product ordered is:" + price * document.getElementById("values").value + "$")
            $(".add_result").slideUp();
        }
    })

})

