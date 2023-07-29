function validateForm() {

    event.preventDefault();
    let x = document.getElementById("tc-1").value;
    let y = document.getElementById("tc-2").value;
    if (x == "" && y=="") {
        alert("can't be empty")
    }



}

