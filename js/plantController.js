
class PlantController {
    constructor(currentID = 0){
        this._items = [];
        this.currentID = currentID;
    }
    
    addItem(name, description, imageUrl, createdAt){
        const plantItem = {
            id: this.currentID++,
            name: name,
            description: description,
            imageUrl: imageUrl,
            createdAt: createdAt
        };
        this._items.push(plantItem);
        localStorage.setItem("items", JSON.stringify(this._items));
        this.save({name, description, imageUrl});
    }

    save({name, description, imageUrl}){
        const data = {name,  description, imageUrl};
        console.log(data);

        fetch('http://localhost:8080/plant', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    update({name,  description, imageUrl}){
        fetch('http://localhost:8080/plant')
        method = 'PUT';
        body = JSON.stringify({
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            id: this.id
        }),
        headers = {
            'Content-Type': 'application/json; charset=UTF-8'
        }
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    findItemById({name, description, imageUrl}){

    }

    delete({name, description, imageUrl}){
        fetch('http://localhost:8080/plant')
        method = 'delete';
    }
}

export default PlantController;

