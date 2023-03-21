function Userspad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => desplayUser(data))
}
function desplayUser(data){
    const Ul = document.getElementById('user-name');
    for(const name of data){
        const li = document.createElement('li');
        li.innerText = name.phone;
        Ul.appendChild(li);
    }
}