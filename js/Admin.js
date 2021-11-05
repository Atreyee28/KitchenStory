function Loglclick(){
  var username = document.getElementById("name").value;
  var password = document.getElementById("psw").value;
  if (username == "Admin" && password == "12345"){
      localStorage.setItem("UserName","Admin");
    localStorage.setItem('Password','12345');  
  alert ("Login successfull");
      document.location.href ="additems.html";
   return false;
    }else{
      alert ("something wrong!");
    }
}

  function Changepass(){
      localStorage.setItem('Password','12345');
      var pw=localStorage.getItem('Password')
      if(document.getElementById("curr-psw").value == pw)
      {
        if(document.getElementById("new-psw").value == document.getElementById("retype-psw").value)
        {  
        localStorage.setItem('Password',document.getElementById("new-psw").value);    
          alert("Password Changed Successfully");
          document.location.href="changepassword.html";
      }
      else{
        alert("Password mismatch");
      }
    }
      else
      alert("wrong!");
      }

 
    //Item product_id product Description count price
function check(){
  var isEmpty=false,
      product_id = document.getElementById("product_id").value,
      product = document.getElementById("product").value,
      Description = document.getElementById("Description").value,
      count = document.getElementById("count").value,
      price = document.getElementById("price").value;
    if (product_id === "") {
        alert("product_id cannot be empty!");
        isEmpty = true;
    } else if (product === "") {
        alert("product name cannot be empty!");
        isEmpty = true;
    } else if (Description === "") {
        alert("Description cannot be empty!");
        isEmpty = true;
    } else if (count === "") {
        alert("count Cannot be empty!");
        isEmpty = true;
    } else if (price === "") {
        alert("price Cannot be empty!");
        isEmpty = true;
    }
 return isEmpty;

}
function Addclick(){
  var rIndex,
    table = document.getElementById("Item");
  if(!check()){
var newRow = table.insertRow(table.length),
    cell1=newRow.insertCell(0),
    cell2=newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),//product_id product Description count  price
    product_id = document.getElementById("product_id").value,
    product = document.getElementById("product").value,
    Description = document.getElementById("Description").value,
    count = document.getElementById("count").value,
    price = document.getElementById("price").value;
      cell1.innerHTML = product_id;
      cell2.innerHTML = product;
      cell3.innerHTML = Description;
      cell4.innerHTML = count;
      cell5.innerHTML = price;
}
}
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("Item").deleteRow(i);
}