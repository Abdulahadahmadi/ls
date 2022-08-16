  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", () => {
    // change the theme
    const theme = document.body.classList.toggle('dark');

     localStorage.setItem("theme", theme?"dark":"light");
    //  console.log(theme?"dark":"light");
    //  console.log(checkbox.checked)
   
  })    
    


  const checkTheme = ()=> {
    const checkbox = document.getElementById("checkbox");
    if (localStorage.getItem("theme") == "dark") {
      document.body.classList.add('dark');
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
      document.body.classList.remove('dark');
    }
    }

    checkTheme();


  
    
    
    let form = `<div>
      <div class="">
        <div>
          <h1 class="text-3xl my-2 text-center font-bold">Register</h1>
        </div>  
            <label for="name">Name</label>
            <input type="text" required class="flex ring-1 w-full px-2 py-2 rounded-md placeholder:dark:text-gray-800" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name">
          </div>
          <div class="form-group mt-3">
            <label for="email">Email</label>
            <input type="email" required class="flex ring-1 w-full px-2 py-2 rounded-md" id="email" placeholder="Enter Your email">
          </div>
          <div class="form-group mt-3">
            <label for="age">Age</label>
            <input type="number" class="flex ring-1 w-full px-2 py-2 rounded-md" id="age" placeholder="Enter Your age">
          </div>
          <div class="form-group mt-3">
            <label for="address">Address</label>
            <input type="text" class="flex ring-1 w-full px-2 py-2 rounded-md" id="address" placeholder="Enter Your Address">
          </div>
          <div class="flex justify-center items-center">
            <button type="submit" class=" w-2/5  bg-blue-500 text-white text-xl px-4 py-2 m-4 rounded-lg shadow-lg hover:bg-blue-800" onclick="save()">Save</button>
          </div>
      </div>`;



    

function table(userList) {
    
  let users = localStorage.getItem("details");
  if(userList){
    users = userList;
  }

    let table = `<table id="users-table" class="table ">
    
    <div class="flex flex-col justify-start ">
        <div id="alert-border-1" class="flex justify-center items-center w-2/6 p-3 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200" role="alert">
        <svg class="flex-shrink-0 w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div class="ml-3 text-md font-medium text-blue-700">
          Data saved successfully 
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 dark:bg-blue-200 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 dark:hover:bg-blue-300 inline-flex h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
          <span class="sr-only">Dismiss</span>
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        </div>

      </div>
  <thead class="bg-gray-500 dark:bg-gray-800 ">
    <tr class="text-white dark:text-white">
      <th>NO</th>
      <th class="">Name</th>
      <th class="">Email</th>
      <th class="">Age</th>
      <th class="">Address</th>
      <th class="">Edit</th>
      <th class="">Delete</th>
      
    </tr>
  </thead>
        <div class="flex justify-center">
  <!--  search bar -->
            
                <div class="mx-4 ">
                <div class=" xl:w-full">
                  <div class="input-group relative flex flex-wrap items-stretch w-full mb-2">
                    <input type="search" id="search" onkeyup="searchTable()" class="form-control relative flex-auto min-w-0 block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by name, email, address" aria-label="Search" aria-describedby="button-addon2">
                    <button class="btn inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              
          </div>
          <!-- end of search bar -->

          <!-- age filter -->
            <div>
              <div class="flex mb-2">
              <button
                id="states-button"
                data-dropdown-toggle="dropdown-states"
                class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                Age filter
              </button>
              <div
                id="dropdown-states"
                class="z-10 w-2/4 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
                style="
                  position: absolute;
                  inset: 0px auto auto 0px;
                  margin: 0px;
                  transform: translate(0px, 72px);
                "
              ></div>
              
              <select
                id="age-input"
                onchange="ageFilter()"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md  rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="" disabled=""></option>
                <option value="one">12-18</option>
                <option value="two">18-45</option>
                <option value="three">45-60</option>
                <option value="four">60 ></option>
              </select>
            </div>
            <span id="badge-dismiss-default" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800">
                <span id="badge"></span>
                <button type="button"  class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                    <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Remove badge</span>
                </button>
            </span>
          </div>
          <!-- end of age filter -->
          </div>
  <tbody class="text-black dark:text-white">`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td class="text-black dark:text-white">${i + 1}</td>
      <td class="text-black dark:text-white">${details[i].name}</td>
      <td class="text-black dark:text-white">${details[i].email}</td>
      <td class="text-black dark:text-white">${details[i].age}</td>
      <td class="text-black dark:text-white">${details[i].address}</td>
      <td ><button type="button" class=" outline outline-blue-300 hover:bg-green-600 hover:text-white px-4 py-1 rounded-md shadow-md text-black dark:text-white" onclick="edit(${i})">Edit</button></td>
      <td class="text-black dark:text-white"><button type="button" class="outline outline-blue-300 hover:bg-red-700 hover:text-white px-4 py-1 rounded-md shadow-md" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};

// set data 
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
    
};

// upate badge
function updateBadge() {
  let badge = document.getElementById("badge");
  badge.innerHTML = details.length;
}

// Age filter function
function ageFilter(){
  let ageBadge = document.getElementById("badge-dismiss-default");
  let ageInput = document.getElementById("age-input");
  let age = ageInput.value;
  let ageFilter = [];
  if(age === "one"){
    ageFilter = details.filter(function(item){
      return item.age >= 12 && item.age <= 18;
    });
  } else if(age === "two"){
    ageFilter = details.filter(function(item){
      return item.age >= 18 && item.age <= 45;
    });
  }
  else if(age === "three"){
    ageFilter = details.filter(function(item){
      return item.age >= 45 && item.age <= 60;
    });
  } else if(age === "four"){
    ageFilter = details.filter(function(item){
      return item.age >= 60;
    });
  }
  table(ageFilter);
  ageBadge.innerHTML = `Ages between: ${ageFilter.length}`;
  console.log(ageFilter);


}

window.ageFilter = ageFilter;



function save() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let address = document.getElementById("address");
    let success = document.getElementById("alert-border-1");
    

    

    if(name.value == "" || email.value == "" || age.value == "" || address.value == ""){
    }
    else{
        setTimeout(() => {
            name.value = "";
            email.value = "";
            age.value = "";
            address.value = "";
        }, 2000);

        success.style.display = "block";
    }

    setTimeout(() => {
      success.style.display = "none";
    }, 4000);

      if (name.value == 0) {
          alert("name is Empty");
          return
      }
      else if(email.value == 0){
        alert("email is empty")
      }
      else if(age.value == 0){
        alert("age is empty")
      }
      else if(address.value == 0){
        alert("address is empty")
      }
    let data = {
        name: name.value,
        email: email.value,
        age: age.value,
        address: address.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    name.value = "";
    email.value = "";
    age.value = "";
    address.value = "";
};

function deleteData(index) {
  if(confirm("Are you sure you want to delete this data?")){
    details.splice(index, 1);
    setData();
    table();
  }
    

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
      <div class="form-group">
            <label for="name">Update Name</label>
            <input type="text" value="${details[index].name}" class="flex ring-1 w-full px-2 py-2 rounded-md" id="newName" aria-describedby="emailHelp" placeholder="Update Your Name">
          </div>
          <div class="form-group mt-3">
            <label for="email">Email</label>
            <input type="email" value="${details[index].email}" class="flex ring-1 w-full px-2 py-2 rounded-md" id="newEmail" placeholder="Update Your email">
          </div>
          <div class="form-group mt-3">
            <label for="age">Age</label>
            <input type="number" value="${details[index].age}" class="flex ring-1 w-full px-2 py-2 rounded-md" id="newAge" placeholder="Update Your age">
          </div>
          <div class="form-group mt-3">
            <label for="address">Address</label>
            <input type="text" value="${details[index].address}" class="flex ring-1 w-full px-2 py-2 rounded-md" id="newAddress" placeholder="Update Your address">
          </div>
          <div class="flex justify-center items-center">
            <button type="submit" class="w-2/5 bg-blue-500 text-white text-xl px-4 py-2 m-4 rounded-lg shadow-lg hover:text-blue-800" onclick="update(${index})">Update</button>
          </div>
            </div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newName = document.getElementById('newName');
    let newEmail = document.getElementById('newEmail');
    let newAge = document.getElementById('newAge');
    let newAddress = document.getElementById('newAddress');

    details[index] = {
        name: newName.value,
        email: newEmail.value,
        age: newAge.value,
        address: newAddress.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}

// search query


  
  function searchTable() {
  let input, filter, found, table, tr, td, i, j;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("users-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
  
}


// on reload 
// document.getElementById('name').value = getSavedValue('name');
// document.getElementById('email').value = getSavedValue('email');
// document.getElementById('age').value = getSavedValue('age');
// document.getElementById('address').value = getSavedValue('address');

// function savedValue(e) {
//   let id = e.id;
//   let val = e.value;
//   localStorage.setItem(id, val);
// }

// function getSavedValue(v) {
//   if(!localStorage.getItem(v)) {
//     return "";
// }
// return localStorage.getItem(v);
// }