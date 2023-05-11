// const options = {
// method:'GET',
// header:{}
// }
    ///con fetch relaciono el link de la api
    // fetch(' https://pokeapi.co/api/v2/pokemon/10')
    //         .then(response => response.json())//como es asincrona debo usar them y luego convierto la info a tipo json
    //         .then(data => {
    //             $('#poke-title').text(data.name);///data corresponde a los objetos que me trae de la api
    //             $('#poke-img').attr('src',data.sprites.front_default)///aca traigo la imagen poniendole un atributo a ese id , ese lo encuentro en el objeto
    //             $('#poke-id').text('Id No. ' +data.id)//con front muestra el pkemon defrente
    //             console.log(data)
  
        
        // })
// async function Poke() {
       
//         let response = await fetch(' https://pokeapi.co/api/v2/pokemon/1' + i )
//         let data = await response.json()//como es asincrona debo usar them y luego convierto la info a tipo json
//             console.log(data);
//             return data ;
            
//         }


  async function Poke() {
    // let array1 = [];
    let html = ''; 
    for (let i = 01 ; i <= 20 ; i++) {
        let response = await fetch(' https://pokeapi.co/api/v2/pokemon/' + i )
        let data = await response.json()//como es asincrona debo usar them y luego convierto la info a tipo json
            console.log(data);
            html += `<div class="col " style="">`+
                    `<div class="card"  style="text-align: center;">`+
                    `<h3>${data.name} `+`</h3>`+
                    `<center>`+`<img src="${data.sprites.front_default}" alt="centered image" style="height: 100px;width: 100px;" >`+`</center>`
                    +`<p> ID No. ${data.id} `+`</p>`//el center lo uso para que la imagen me quede en el centro
                    +`</div>`+`</div>`
            
            $('#poke-title').text(data.name);///data corresponde a los objetos que me trae de la api
            $('#poke-img').attr('src',data.sprites.front_default)///aca traigo la imagen poniendole un atributo a ese id , ese lo encuentro en el objeto
            $('#poke-id').text('Id No. ' +data.id)//con front muestra el pkemon defrente
            // array1.push(data)    
        
    }
    // return array1;////cuando uno coloca un return se acaba la funcion
    $('#Content1').html(html);
}
Poke().then(()=>{
console.log('todo esta ok')


}).catch((error)=>{
    console.error('se ha producido un error',error)
}) 
