import PlantController from './plantController.js';

const plantController = new PlantController(0);

const newItemForm = document.querySelector('#newItemForm');

//listener that handles the events and get input from user input. 
newItemForm.addEventListener('submit', (event) =>{
    
    event.preventDefault();

    const itemName = document.querySelector('#itemName');
    const itemDescription = document.querySelector("#itemDescription");
    const itemImg = document.querySelector('#itemImg');

    const name = itemName.value;
    const description = itemDescription.value;
    const image = itemImg.value;

    console.log(name, description, image);

    plantController.addItem(name, description, image);

    itemName.value = '';
    itemDescription.value = '';
    itemImg.value = '';
})


