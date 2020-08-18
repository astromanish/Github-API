document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    accessData(username);

})

const accessData = (username) => {
    axios({
        method : "get",
        url : `https://api.github.com/users/${username}`,
        headers : {
            Accept : "application/vnd.github.v3+json"
        }
    })
    .then(res => showData(res))
    .catch(err => console.error(err))
}

const showData = (res) => {
    const date = new Date(res.data.created_at);
    console.log(date);
    const div = document.createElement("div");
    div.className = "jumbotron mt-3";
    div.appendChild(document.createTextNode("This id was created on : "));
    div.appendChild(document.createTextNode(`${date}`));
    document.querySelector("#column").appendChild(div);
}




