const commentsUI = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => res.json())
    .then( data => displayDAta(data.slice(0, 20)))
}
commentsUI()
const displayDAta = (datas) => {
    datas.forEach(data => {
        console.log(data);
        const UIContainar = document.getElementById('UI-box');
            const div = document.createElement('div');
            div.classList.add('uiBox')
            div.innerHTML = `
                <h3> Post ID : ${data.postId}</h3>
                <h3> ID : ${data.id}</h3>
                <h3> Name : ${data.name}</h3>
                <h3> Email : ${data.email}</h3>
                <p> ${data.body}</p>
            `
            UIContainar.appendChild(div);
    });
  
    }
displayDAta()