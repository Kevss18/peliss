// const cargarPeliculas=async()=>{ 
//     const respuesta=await fetch('');
//     console.log(respuesta);
//     }
// cargarPeliculas();


// const cargarPeliculas = async()=>{
//     try{
//         const respuesta = await fetch('')
//         const datos = await respuesta.json();

//         console.log(datos);
//         console.log(respuesta);
//     } catch(error){
//         console.log(error);
//     }
// }
// cargarPeliculas();



// const cargarPeliculas = async()=>{
//     try{
//         const respuesta = await fetch('')
//         const datos = await respuesta.json();

//     if (respuesta.status === 200) {
//         console.log(datos.id);
//         console.log(datos.title);
//         console.log(datos.original_title);
//         console.log(datos.popularity);
//     }

//         console.log(respuesta);
//     } catch(error){
//         console.log(error);
//     }
// }
// cargarPeliculas();

// const cargarPeliculas = async()=>{
//     try{
//         const respuesta = await fetch('')
//         const datos = await respuesta.json();

//     if (respuesta.status === 200) {
//         console.log(datos.id);
//         console.log(datos.title);
//         console.log(datos.original_title);
//         console.log(datos.popularity);
//     }else if (respuesta.status === 401){
//         console.log('La api_key no es correcta');
//     }else if (respuesta.status === 404){
//         console.log('La pelicula no existe');
//     }

//         console.log(respuesta);
//     } catch(error){
//         console.log(error);
//     }
// }
// cargarPeliculas();

// const cargarPeliculas = async()=>{
//     try{
//         const respuesta = await fetch('')
//         const datos = await respuesta.json();

//     if (respuesta.status === 200) {
//         datos.results.forEach(pelicula => {
//             console.log(pelicula.title);    
//         });
        

//     }else if (respuesta.status === 401){
//         console.log('La api_key no es correcta');
//     }else if (respuesta.status === 404){
//         console.log('La pelicula no existe');
//     }
    
//         console.log(respuesta);
//     } catch(error){
//         console.log(error);
//     }
// }
// cargarPeliculas();

// if (respuesta.status === 200){
//     datos.results.forEach(pelicula => {
//         peliculas = peliculas + "<h1>Pelicula..</h1>"
//     })
// }

let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000){
        pagina++;
        cargarPeliculas();
    }
})
btnAnterior.addEventListener('click', () => {
    if (pagina > 1){
        pagina--;
        cargarPeliculas();
    }
})

const cargarPeliculas = async(e) => {

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=97f4b8f91bf2e09d8eb11b23a1f0abb1`)
        

        let peliculas = "";

        const datos = await respuesta.json();
        if(respuesta.status === 200) {
            datos.results.forEach(element => {
                peliculas = peliculas + `<img class="poster" src="https://image.tmdb.org/t/p/w500${element.poster_path}">
                <h1>${element.title}</h1>`;
                console.log(element.title);
            });
            document.getElementById("contenedor").innerHTML = peliculas;
        } else if(respuesta.status === 401) {
            console.log("La api key es incorrecta");
        } else if(respuesta.status === 404) {
            console.log("La pelicula no existe");
        }
        
    } catch (error){
        console.log(error);
    }
}
cargarPeliculas(11)