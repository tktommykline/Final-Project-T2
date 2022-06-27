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
    <img src="${plant.img}" class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">${plant.name}</h5>
        <p class="card-text">${plant.description}</p>
        <a href="#" class="btn btn-primary">Get one today!</a>
    </div>
</div>`

  const plantContainer = document.querySelector('#list-items');
  plantContainer.innerHTML += plantHtml;
}


//storage function 
function localStorageSampleData() {
  if(!localStorage.getItem("items")){
    const sampleItems = [{'name': 'Phildendron Mican', 'description': 'Velvet leaf phildendron', 'img':'images/Mican_angle1.jpg'},{'name': 'Heartleaf Phildendron', 'description': ' Dark green heart-shaped leaves', 'img':'images/Philo_hederaceum_angle1.jpg'}]
    localStorage.setItem("items", JSON.stringify(sampleItems));
  }
}

function loadListFromPlantController() {
  for(let i = 0; i < plantController._items.length; i++) {
    const item = plantController._items[i];
    addItemCard(item);
  }
}


localStorageSampleData();
plantController.loadItemsFromLocalStorage();
loadListFromPlantController();