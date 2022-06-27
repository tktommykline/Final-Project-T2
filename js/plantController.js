
class PlantController {
    constructor(currentID = 0){
        this._items = [];
        this.currentID = currentID;
    }

    addItem(name, description, img, createdAt){
        const plantItem = {
            id: this.currentID++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt
        };
        this._items.push(plantItem);

        localStorage.setItem("items", JSON.stringify(this._items));
    }
    
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if(storageItems) {
            const items = JSON.parse(storageItems)
            for(let i = 0; i < items.length ; i++) {
                const item = items[i];
                this._items.push(item);
            }
        }
    }
}

export default PlantController;

