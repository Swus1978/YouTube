const likeBtn = document.getElementById('likeBtn');

let counterLikes = 0;

const addLike = () => {
    counterLikes++;
    document.getElementById('likeBtn').
    innerText = `(${counterLikes})Like 👍`
    console.log(counterLikes);
}

likeBtn.addEventListener('click', () => {
    addLike(); 
});