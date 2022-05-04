let url="https://jsonplaceholder.typicode.com/users/"
fetch (url)
.then(Response=>Response.json())
.then(data=>MostrarData(data))
.catch(error=>console.log(error))

const MostrarData=(data)=>{
    console.log(data)
    let body=""
    for (var i=0;i<data.length;i++){
        body +=`
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].username}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].website}</td>
            <td>${data[i].email}</td>
        </tr>`
    }
    document.getElementById('data').innerHTML=body
}