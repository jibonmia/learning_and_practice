const randomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data.results))
}
randomUser()
const displayData = (datas) => {
    const UsrerBox = document.getElementById('user-box');
    UsrerBox.innerHTML = '';
    datas.forEach(user => {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('boxStyle');
        div.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h2> Name : ${user.name.first}</h3>
        <h3> Title : ${user.name.title}</h3>
        <h3> Age : ${user.dob.age}</h3>
        <h3> location : ${user.location.city}</h3>
        <h3> country : ${user.location.country}</h3>
        <h3> Call : ${user.cell}</h3>
        
        `
        UsrerBox.appendChild(div)
    });
}