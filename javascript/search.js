
let table_data = 
[
    {
        name:"병원 1",
        address:"여기"
    },
    {
        name:"병원 2",
        address:"저기"
    },
    {
        name:"병원 3",
        address:"거기"
    },
    {
        name:"병원 4",
        address:"어디"
    }
]


function show_list(){
    $.ajax({
        type:"GET",
        url:"https://fancy-peony-88f26a.netlify.app/",
        data:{},
        success: function(response){
            console.log(response)
            // $('h1').text(response)
            // let rows = response["getStationList"]["row"];
            // for (let i = 0; i < rows.length; i++) {
            //     let hospital_name = rows[i][''];
            //     let hospital_address = rows[i][''];
                
            //     let temp_html = `<tr>
            //                         <td>${rack_name}</td>
            //                         <td>${rack_cnt}</td>
            //                     </tr>`
            //     $('#hospitalList').append(temp_html);
            // }
        }
    })
}

show_list();
// console.log(typeof(table_data)) //object

// let table_header = ['병원 이름', '병원 주소']

// let btn = document.querySelector('#btn');
// let hospitalTable = document.querySelector('#hospitalTable')

// btn.addEventListener('click', () => {
//     let table = document.createElement('table')
//     let headerRow = document.createElement('tr')
 

//     // // hospitalTable.forEach is not a function
//     // at HTMLButtonElement
//     hospitalTable.forEach(headerText => {
//         let header = document.createElement('th');
//         let textNode = document.createTextNode(headerText)
//         header.appendChild(textNode)
//         headerRow.appendChild(header)
//     });
//     table.appendChild(headerRow)
//     table_data.forEach(child)
//     hospitalTable.appendChild(table)
// });






// function show_hospital_list(){
//     let tableTr = '<tr>';
//     tableTr += '<td>' + input + '</td>'
//     tableTr += '</tr>'
//     $('#tableBody').append(tableTr)


//     // 

//     // $.ajax({
//     //     url:"",
//     //     type:"",
//     //     data:"",
//     //     success: function(response){
//     //         console.log(response)
//     //         for(let i = 0; i<response.length; i++){
//     //             let tableTr = '<tr>';
//     //             tableTr += '<td>' + response[i]['name']
//     //             tableTr += '</tr>'
//     //         }
//     //         $('#tableBody').append(tableTr)
//     //     }
//     // })
// }