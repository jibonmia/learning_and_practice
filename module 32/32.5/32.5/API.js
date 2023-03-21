function postAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => desplayDAta(data))
}
function desplayDAta(data){
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h4>user: ${post.userId} </h5>
            <h5>id: ${post.id}</h5>
            <h5>title: ${post.title}</h5>
            <p>body: ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }
}