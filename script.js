function validateForm() {
    var x = document.forms["registration_form"]["name"].value;
    var y = document.forms["registration_form"]["prof"].value;
    var z = document.forms["registration_form"]["age"].value;
    
    if (x == null || x == "" && y == null || y == "" && z == null || z == "") {
        nameError = "Error: Please make sure All the fields are filied befor adding in an employee !";
        document.getElementById("name_error").innerText = nameError; 
        name_error.style.color="red";
        return false;
    } 
    
    
    
    else {
        nameError = " Success: Employee Added !";
        document.getElementById("name_error").innerText = nameError; 
        name_error.style.color="green";
        return false;
        // return true;
        
    }
    
    var name=document.getElementById("name").value
    var age=document.getElementById("age").value
    var prof=document.getElementById("prof").value


    let table=document.getElementById('titem');

        let newArray = ["Name :"+" "+name,"Profession"+" "+prof,"Age"+" "+age,"Delete User"];
        newArray.forEach((item)=>{
           var list = document.createElement("li");
         var detail = document.createTextNode(item);
        list.appendChild(detail);
        table.appendChild(list);
        })

}