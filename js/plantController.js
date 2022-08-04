
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

        //let id = this.id;
        //this.save({name, description, imageUrl});
        //this.delete();
        let id = 4;
        this.update({id, name, description, imageUrl});
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

    update({id, name,  description, imageUrl}){

        const data = {id, name, description, imageUrl};

        console.log(data);

        fetch('http://localhost:8080/plant/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    findItemById(id){
        fetch('http://localhost:8080/plant/' + id)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    delete(id){
        fetch('http://localhost:8080/plant/' + id, 
        { method: 'DELETE' })
    }
}

export default PlantController;

