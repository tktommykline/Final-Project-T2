import PlantController from './plantController.js';

const plantController = new PlantController(0);  

//some function that does things 
// const addItemCard = (plant) => {
//     const plantHtml = <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="..."/>
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>

//   const plantContainer = document.querySelector('#list-items');
//   plantContainer.innerHTML += plantHtml;
// }

function addItemCard(plant){
    console.log('help please');
    const plantHtml = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`

  const plantContainer = document.querySelector('#list-items');
  plantContainer.innerHTML += plantHtml;
}

addItemCard();