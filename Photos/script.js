fetch('https://jsonplaceholder.typicode.com/photos').then(response =>response.json())
.then(data => {
    let tbody="";
    data.forEach(element => {
        tbody+=`<tr>
        <th scope="row">${element.albumId}</th>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.url}</td>
        <td><img src="${element.thumbnailUrl}"> </td>
    </tr>`
    });
    document.querySelector('tbody').innerHTML=tbody;
})

