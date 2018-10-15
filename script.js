
const input = document.querySelector("#input") ;
const search = document.querySelector("#search") ;
const name = document.querySelector("#name") ;
const repo = document.querySelector("#repo") ;
const un = document.querySelector("#un") ;
const url = document.querySelector("#url") ;
const followers = document.querySelector("#followers") ;
const image = document.querySelector("#image") ;
const data = document.querySelector(".data") ;

const client_id = "Iv1.5ad6982a1d48ed4f";
const client_secret = "c59927554c52e360bcbca5a3186b7b435357ae91";

const fetchUser = async (user)=> {

  const call_api = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`) ;

  const card = await call_api.json();

  return {data} 

};

const showData = () => {

    fetchUser(input.value).then((result) => {
    	// image.innerHTML = `<img src="${result.data.avatar_url}" width="90px" id="image" height="90" style="border-radius: 50%;">`;

      if(result.data.login == undefined){
          card.innerHTML = `<div class="alert alert-danger" role="alert">This user does not exsit.</div>` ;
      }

      else{

    	image.src=result.data.avatar_url;
    	name.innerHTML = `<span style="font-style: italic; margin-left: 20px; color: white;" id="name"> ${result.data.name}</span>` ;
    	repo.innerHTML = `<span style="font-style: italic; margin-left: 20px; color: white;" id="repo"> ${result.data.public_repos}</span>` ;
    	un.innerHTML = `<span style="font-style: italic; margin-left: 20px; color: white;" id="un"> ${result.data.login}</span>` ;
    	followers.innerHTML = `<span style="font-style: italic; margin-left: 20px; color: white;" id="followers"> ${result.data.followers}</span>` ;
    url.innerHTML = `<span style="font-style: italic; margin-left: 20px; color: white;" id="url"><a href="${result.data.html_url}">Click Here</a></span></b></h5>`;
}
    }).catch(error => console.log(error))


};


search.addEventListener("click", ()=> {

  showData();

})