




var  getUserRepos = function (user) {

    var targetApi = "https://api.github.com/users/" + user + "/repos";

    console.log(targetApi)

    //fetches the response from the repo
    fetch(targetApi).then(function(response){
        //takes the resonse and turns into a json data object
        response.json().then(function(data){
            //displays the data in the console log 
            console.log(data)
        })
    });
    //reads the fetch resonse 

};


getUserRepos("drkevinfriday");