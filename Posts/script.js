// let h1 = document.querySelector('h1');
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.text())
// .then(value => h1.innerHTML=value)

// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.text())
// .then(value=> table.innerHTML=value)

// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
// .then((data)=>{


//     data => data.forEach(element => 
//     {
//         let table="";

//     table += `<tr>
//     <th scope="row">${element.userId}</th>
//     <td>${element.id}</td>
//     <td>${element.title}</td>
//     <td>${element.body}</td>
// </tr>`;
// document.querySelector('tbody').innerHTML=table;

// }))

// let tbody="";
//     data.forEach(element => {
//         tbody+= ` <tr>
//         <th scope="row">${element.userId}</th>
//         <td>${element.id}</td>
//         <td>${element.title}</td>
//         <td>${element.body}</td>
//     </tr> `
//     });
//     document.querySelector('tbody').innerHTML=tbody;
// }


fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
.then(data => {
    let tbody="";
    data.forEach(element => {
        tbody+=` <tr>
        <th scope="row">${element.userId}</th>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>`
    });
    document.querySelector('tbody').innerHTML=tbody;
})