

class PlantController {
    constructor(currentID=0){
        this._item = [];
        this.currentID = currentID;
    }

    addItem(id, name, description, img, createdAt){
        const plant = {
            id: this.currentID++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt
        }
        this.item.push(plant);
    }
}

export default PlantController;