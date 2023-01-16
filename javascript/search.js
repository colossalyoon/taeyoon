// let loader = document.getElementById('preload')
// window.addEventListener("load", setTimeout(() => {
//     loader.style.display = "none"
// }, 3000))


let selected_village = localStorage.getItem("dropValue")
document.getElementById("village").innerHTML = selected_village+" 병원 목록";
function show_list(){
    $.ajax({
        type:"GET",
        url:"/hospitallist",
        data:{},
        success: function(response){
            console.log(response)
            let list = response["row"]
            for(let i = 0; i<list.length; i++){
                let list_name = list[i]["요양기관명"];
                let list_address = list[i]["주소"];
                let list_village = list[i]["시도코드명"];
                
                 let temp_html = 
                 `
                    <tr>
                        <td>${list_name}</td>
                        <td>${list_address}</td>
                        <td><button class="map">위치 보기</button></td>
                     </tr>
                 `
                 if (list_village == selected_village) {
                     $('#hospitalList').append(temp_html)
                 }
            }    
                 
             }
        }
    )}

show_list();