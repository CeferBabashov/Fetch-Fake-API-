fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
.then(data => {
    let tbody="";
    data.forEach(element => {
        tbody+=`<tr>
        <th scope="row">${element.postId}</th>
        <td >${element.id}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.body}</td>
      </tr>`
    });
    document.querySelector('tbody').innerHTML=tbody;
})