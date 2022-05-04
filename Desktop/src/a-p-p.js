let url = "https://jsonplaceholder.typicode.com/users/"
fetch(url)
 .then(Response=>Response.json)
 .then(data=>mostrarData(data))
 .catch(error=>console.log(error))

const mostrarData = (data)=>{
    console.log(data)
    let body = ""
    for (let i=0; i<data.length; i++){
        body += `
        <tr>
            <td>${data[i].address.street}</td>
            <td>${data[i].address.suite}</td>
            <td>${data[i].address.city}</td>
            <td>${data[i].address.zipcode}</td>
            <td>${data[i].address.geo.lat}</td>
            <td>${data[i].address.geo.lng}</td>
        </tr>
        `
    }
    document.getElementById('data').innerHTML=body
}