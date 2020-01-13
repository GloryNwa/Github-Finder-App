//init gitHub
const github = new Github;

// Init UI
const ui = new UI;

//Search Input
const searchUser  = document.getElementById('searchUser');

//search input listener
searchUser.addEventListener('keyup',(e)=>{

    //get Input text
    const userText = e.target.value;

    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data =>{
          if(data.profile.message === 'Not Found'){
         //Show Alert
             ui.showAlert('User not found', 'alert alert-danger');
          }else{
              //Show Profile
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);

          }

        })

    }else{
        //Clear Profile
    }
});