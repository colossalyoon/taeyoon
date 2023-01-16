// let loader = document.getElementById('preload')
// window.addEventListener("load", setTimeout(() => {
//     loader.style.display = "none"
// }, 3000))


let selected_village = localStorage.getItem("dropValue")
document.getElementById("village").innerHTML = selected_village+" 병원 목록";
function show_list(){
    $.ajax({
        type:"GET",
        url:"https://gist.githubusercontent.com/sunyeon-Jeong/537e9cc7ae756670c07e86163a1095a4/raw/edcda4ebe68947951f931c0e8a4121e6678aa611/hospitallist.json",
        data:{},
        dataType:"json",
        success: function(response){
            console.log(selected_village)
            let list = response["hospitallist"]["row"]
            console.log(list)
            for(let i = 0; i<list.length; i++){
                let list_name = list[i]["요양기관명"];
                let list_address = list[i]["주소"];
                let list_village = list[i]["시도코드명"]
               
                 let temp_html = 
                 `
                    <tr>
                        <td>${list_name}</td>
                        <td>${list_address}</td>
                        
                     </tr>
                 `
                 if(list_village == selected_village){
                     $('#hospitalList').append(temp_html)
                 }
            }    
                 
             }
        }
    )}

show_list();


