// add background
document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
})
// center third Element
document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('center');
    third.style.textAlign = 'center';
})
// add friends
document.getElementById('add-friends').addEventListener('click', function(){
    const addFriends = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.innerHTML = `
    <div class = "friend">
    <h3 class = "friend-name"> new friend</h3>
    <p> added to the new friend</p>
    </div>
    `
    addFriends.appendChild(newFriend);
    
})