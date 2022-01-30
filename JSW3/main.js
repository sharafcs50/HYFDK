let restaurants = [
    {
        id: 1,
        name: "Pizza",
        menu: "Pizza crusty pizza",
        open: 12,
        closed: 22,
        isOpen: true
    },
    {
        id: 2,
        name: "Indian Spicy",
        menu: "Indian Tikka Masala",
        open: 2,
        closed: 20,
        isOpen: true
    },
    {
        id:3,
        name: "Thai Delicious",
        menu: "Thai Restaurant",
        open: 10,
        closed: 23,
        isOpen: false
    },
    {
        id:4,
        name: "Burger Meal",
        menu: "Beef, Chicken",
        open: 13,
        closed: 21,
        isOpen: false
    },
    {
        id:5,
        name: "Sushi",
        menu: "Japanese Sushi",
        open: 4,
        closed: 20,
        isOpen: true
    },
    {
        id:6,
        name: "Hot Spicy",
        menu: "Gravy Spicy",
        open: 12,
        closed: 18,
        isOpen: false
    }
];

console.log(restaurants);

function showStatus(index) {
if(restaurants[index-1].isOpen){
    document.getElementById('status-'+restaurants[index-1].id).innerHTML = `<span class="status-open"></span> Open</small>`;
    document.getElementById('btn-'+restaurants[index-1].id).innerHTML = `<button type="button" class="btn btn-sm btn-outline-secondary">Menu</button>
    <button type="button" class="btn btn-sm btn-outline-secondary">Order</button>`;
} else {
    document.getElementById('status-'+restaurants[index-1].id).innerHTML = `<span class="status-closed"></span> Closed</small>`;
    document.getElementById('btn-'+restaurants[index-1].id).innerHTML = `<button type="button" onclick="showHours(${index-1})" class="btn btn-sm btn-outline-secondary">Opening Hour</button>`;

}
}

for(let i=1;i<restaurants.length+1;i++){
    showStatus([i]);
}

function showHours(index){
    alert(`Opening: ${restaurants[index].open} + Close: ${restaurants[index].closed}`);
}
// showStatus(2);