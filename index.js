//1. APU url
const url = "https://jsonplaceholder.typicode.com/users";

//2.1 fetch users from the API url
function fetchUsers() {
  //make use of the browser fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //2.2 passing the user data to the renderUsers function
      renderUsers(data);
    });
}

//3. render the user in the DOM
function renderUsers(usersData) {
  console.log("from renderUsers");
  console.log(usersData);
  const ul = document.getElementById("user-list-container");
  console.log(ul);

  //3.1Render an li tag for each of the users
  usersData.forEach((user, index) => {
    console.log(user, index+1);
    const li = document.createElement("li");
    li.innerHTML=`
    <span>${index + 1}.</span>
    <span>${user.name}</span>
    <span>-</span>
    <span class="username">${user.username}</span>
    `;
    //3.2 Append the current user li tag to the ul tag
    ul.appendChild(li);
  });
}

//4. Add a search function to the DOM
function searchUserByusername(){
    const input=document.getElementById("search")
    const ul=document.getElementById("user-list-container");
    const inputValue=input.value.toUpperCase();
    const usersList=ul.querySelectorAll("li"); //array of all the li tags
  
//Loop through all the users and render the one that match the seaech
for(let index=0; index <usersList.length; index++){
    const usernameSpanTag=usersList[index].querySelector(".username");
    const usernameSpanTagValue=usernameSpanTag.innerText.toUpperCase();
    const isMatch=usernameSpanTagValue.indexOf(inputValue)>-1;


    if(isMatch){
        usersList[index].style.display="block";
    } else{
        usersList[index].style.display="none"
    }
    
}
}

//calling the fetch function
fetchUsers();














