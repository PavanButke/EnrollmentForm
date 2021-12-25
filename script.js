

// function fetchCollegeNames(){

//     let xhrRequest = new XMLHttpRequest();

//     xhrRequest.onload = function(){
//         console.log(xhrRequest.response);

//         let college = this.response.message; 
//     };

//     xhrRequest.open('get' , './db.json')

//     xhrRequest.send();


// }

// $('#collegedata').click(fetchCollegeNames)


// fetch("./data.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));



function collegeNameList() {

   
    let college = fetch("./data.json")
         .then(response => {
             return response.json();
                 })
             .then(
                 
                jsondata => console.log(jsondata));

                
     var collegeName = document.getElementById("collegeName");
    
 
     for (var i = 0; i < college.length; i++) {
         var option = document.createElement("OPTION");

         option.innerHTML = data[i].University_Name;

         
         option.value = data[i].College_Name;


         collegeName.options.add(option);
     }
 }
