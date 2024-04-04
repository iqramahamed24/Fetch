console.log('Working');

fetch('http://localhost:3000/comments'), {
    method: 'GET',
    headers: {
        //tells the server to always return data inform f json
        'content-type' : 'application/json'
    }
}

.then((res) => res.json())

.then((data) => {
    const commentsDiv = document.querySelector

    dataForEachComment
}


    const commentsDiv = document.querySelector('#comments')

    data.forEach(comment) => {
        commentsDiv.innerHTML = '<p>${comment.title}</p>'
    });
