

// // function fetchCollegeNames(){

// //     let xhrRequest = new XMLHttpRequest();

// //     xhrRequest.onload = function(){
// //         console.log(xhrRequest.response);

// //         let college = this.response.message; 
// //     };

// //     xhrRequest.open('get' , './db.json')

// //     xhrRequest.send();


// // }

// // $('#collegedata').click(fetchCollegeNames)


// // fetch("./data.json")
// // .then(response => {
// //    return response.json();
// // })
// // .then(jsondata => console.log(jsondata));



// function collegeNameList() {

   
//     let college = fetch("./data.json")
//          .then(response => {
//              return response.json();
//                  })
//              .then(
                 
//                 jsondata => console.log(jsondata));

                
//      var collegeName = document.getElementById("collegeName");
    
 
//      for (var i = 0; i < college.length; i++) {
//          var option = document.createElement("OPTION");

//          option.innerHTML = data[i].University_Name;

         
//          option.value = data[i].College_Name;


//          collegeName.options.add(option);
//      }
//  }


const search = document.getElementById('search');
const matchList = document.getElementById('match-list')

//step 1- show up data

const searchStates = async searchText =>{

   const response = await fetch('./data.json')
    const data = await response.json()

//    con sole.log(data);


    //step1.1 -- match the input with json

    let matches = data.filter( state => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return state.University_Name.match(regex) || state.College_Name.match(regex) 
    })
    
    if(searchText.length == 0)
    {
        matches=[];
        matchList.innerHTML= '';
    }

    resultinBox(matches)
}

const resultinBox = matches =>{
    if(matches.length >0)
    {
        const box = matches.map(

            match=>`

            <div  class="card card-body mb-1">
            <h4> ${match.University_Name}(${match.College_Name})
                <span class='text-primary'>${match.capital} </span>
            </h4>
                <small>Lat: ${match.lat}  Long: ${match.long}</small>
            </div>
            `

        ).join('')

         matchList.innerHTML= box;   
    }
    
}

search.addEventListener('input', ()=> searchStates(search.value)



)