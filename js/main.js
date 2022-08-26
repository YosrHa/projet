
var client = new Object();


function getinformation(){
  


}
function sendinformationtothelocalstorage(){
    var firstname=document.getElementById('txtfirstname').value 
    var secondname=document.getElementById('secondname').value 
    var email=document.getElementById('email').value 
    var cin=document.getElementById('cin').value 
    var age=document.getElementById('age').value 
    var phonenumber=document.getElementById('phonenumber').value 
client.firstname = firstname;
client.secondname = secondname;
client.email = email;
client.cin = cin;
client.age = age;
client.phonenumber =phonenumber;
localStorage.setItem("client",JSON.stringify(client))

}
var date = new Object();
function dateinformation(){
    var pickupdate=document.getElementById('pickupdate').value 
    var returndate=document.getElementById('returndate').value 
    date.pickupdate=pickupdate;
date.returndate=returndate;
}

var price =new Object()
    function sendprice(){
        var myprice=""
        var price1=document.getElementById('price1').innerText
        var price2=document.getElementById('price2').innerText
        var price3=document.getElementById('price3').innerText
        var price4=document.getElementById('price4').innerText
        var price5=document.getElementById('price5').innerText
        var price6=document.getElementById('price6').innerText
        if(price1.length>0){
            myprice=price1
        }else if(price2.length>0){
            myprice=price2
        }else if(price3.length>0){
            myprice=price3
        }else if(price4.length>0){
            myprice=price4
        }else if(price5.length>0){
            myprice=price5
        }else if(price6.length>0){
            myprice=price6
        }
  
 price.firstname = myprice;

localStorage.setItem("price",JSON.stringify(price))
    }


    function senddate(){
        localStorage.setItem("date",JSON.stringify(date))}
        function getinformation(){
            var recclient=JSON.parse(localStorage.getItem("client"))
            var recdate=JSON.parse(localStorage.getItem("date"))
            var prices=JSON.parse(localStorage.getItem('price'))
            console.log(recclient)
            document.getElementById('full').innerText=recclient.firstname
            document.getElementById('cin').innerText=recclient.cin
            document.getElementById('pickupdate').innerText=recdate.pickupdate
            document.getElementById('returndate').innerText=recdate.returndate
            document.getElementById('pix').innerText=prices.firstname
        }



    // document.getElementById('firstname').value = firstname
    // document.getElementById('secondname').value = secondname
    // document.getElementById('cin').value = cin

  