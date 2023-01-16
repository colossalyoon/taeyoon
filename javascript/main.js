
function pass_data(){
    let select = document.getElementById("district").value;
    localStorage.setItem("dropValue", select);
    return true;
}