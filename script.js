
const input = document.querySelector("#input") ;
const search = document.querySelector("#search") ;
const name = document.querySelector("#name") ;
const repo = document.querySelector("#repo") ;
const un = document.querySelector("#un") ;
const url = document.querySelector("#url") ;


const client_id = "";
const client_secret = "";

const fetchUser = async (user)=> {
  
  const call_api = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`) ;

  const data = await call_api.json();

  return {data} 

};

const showData = () => {

    fetchUser(input.value).then((result) => {
    	console.log(result) ;
    }).catch(error => console.log(error))
};


search.addEventListener("click", ()=> {

  showData();

})