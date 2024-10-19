console.log ("Hello Filtered Products");

const products = [

    // Category: Fruits:-

    { category: 'Fruits', name: 'Apple', type: 'Red', price: 1.2 },
    { category: 'Fruits', name: 'Banana', type: 'Yellow', price: 0.5 },
    { category: 'Fruits', name: 'Orange', type: 'Citrus', price: 0.8 },
    { category: 'Fruits', name: 'Grapes', type: 'Bunch', price: 2.0 },
    { category: 'Fruits', name: 'Strawberry', type: 'Red', price: 3.0 },
    { category: 'Fruits', name: 'Pineapple', type: 'Tropical', price: 3.5 },
    { category: 'Fruits', name: 'Mango', type: 'Tropical', price: 1.5 },
    { category: 'Fruits', name: 'Blueberry', type: 'Berry', price: 2.5 },
    { category: 'Fruits', name: 'Watermelon', type: 'Green', price: 4.0 },
    { category: 'Fruits', name: 'Peach', type: 'Stone Fruit', price: 2.0 },

    // Category: Vegetables:-

    { category: 'Vegetables', name: 'Carrot', type: 'Root', price: 0.5 },
    { category: 'Vegetables', name: 'Broccoli', type: 'Cruciferous', price: 1.0 },
    { category: 'Vegetables', name: 'Spinach', type: 'Leafy', price: 1.5 },
    { category: 'Vegetables', name: 'Potato', type: 'Starchy', price: 0.3 },
    { category: 'Vegetables', name: 'Tomato', type: 'Fruit', price: 0.7 },
    { category: 'Vegetables', name: 'Cucumber', type: 'Gourd', price: 0.4 },
    { category: 'Vegetables', name: 'Bell Pepper', type: 'Capsicum', price: 1.2 },
    { category: 'Vegetables', name: 'Onion', type: 'Allium', price: 0.6 },
    { category: 'Vegetables', name: 'Garlic', type: 'Bulb', price: 0.8 },
    { category: 'Vegetables', name: 'Lettuce', type: 'Leafy', price: 0.5 },

    // Category: Dairy:-

    { category: 'Dairy', name: 'Milk', type: 'Whole', price: 1.5 },
    { category: 'Dairy', name: 'Cheese', type: 'Cheddar', price: 2.5 },
    { category: 'Dairy', name: 'Yogurt', type: 'Greek', price: 1.0 },
    { category: 'Dairy', name: 'Butter', type: 'Salted', price: 3.0 },
    { category: 'Dairy', name: 'Cream', type: 'Heavy', price: 2.0 },
    { category: 'Dairy', name: 'Ice Cream', type: 'Vanilla', price: 4.0 },
    { category: 'Dairy', name: 'Cottage Cheese', type: 'Low-fat', price: 2.5 },
    { category: 'Dairy', name: 'Sour Cream', type: 'Regular', price: 1.5 },
    { category: 'Dairy', name: 'Goat Cheese', type: 'Soft', price: 3.5 },
    { category: 'Dairy', name: 'Milkshake', type: 'Chocolate', price: 3.0 },

    // Category: Grains:-

    { category: 'Grains', name: 'Rice', type: 'Brown', price: 2.0 },
    { category: 'Grains', name: 'Bread', type: 'Whole Wheat', price: 1.5 },
    { category: 'Grains', name: 'Pasta', type: 'Spaghetti', price: 1.2 },
    { category: 'Grains', name: 'Quinoa', type: 'White', price: 3.0 },
    { category: 'Grains', name: 'Oats', type: 'Rolled', price: 1.0 },
    { category: 'Grains', name: 'Barley', type: 'Pearled', price: 2.0 },
    { category: 'Grains', name: 'Couscous', type: 'Instant', price: 1.5 },
    { category: 'Grains', name: 'Cornmeal', type: 'Yellow', price: 1.0 },
    { category: 'Grains', name: 'Flour', type: 'All-Purpose', price: 0.8 },
    { category: 'Grains', name: 'Bulgur', type: 'Cracked', price: 2.5 },

    // Category: Snacks:-
    { category: 'Snacks', name: 'Chips', type: 'Barbecue', price: 1.0 },
    { category: 'Snacks', name: 'Popcorn', type: 'Butter', price: 1.5 },
    { category: 'Snacks', name: 'Chocolate Bar', type: 'Milk Chocolate', price: 1.2 },
    { category: 'Snacks', name: 'Trail Mix', type: 'Nutty', price: 2.0 },
    { category: 'Snacks', name: 'Cookies', type: 'Chocolate Chip', price: 2.5 },
    { category: 'Snacks', name: 'Granola Bar', type: 'Honey', price: 1.0 },
    { category: 'Snacks', name: 'Beef Jerky', type: 'Original', price: 3.0 },
    { category: 'Snacks', name: 'Fruit Snack', type: 'Mixed Berry', price: 1.0 },
    { category: 'Snacks', name: 'Rice Cakes', type: 'Caramel', price: 1.5 },
    { category: 'Snacks', name: 'Dried Fruit', type: 'Mango', price: 2.0 },

    // Category: Beverages:-

    { category: 'Beverages', name: 'Coffee', type: 'Ground', price: 5.0 },
    { category: 'Beverages', name: 'Tea', type: 'Green', price: 3.0 },
    { category: 'Beverages', name: 'Juice', type: 'Orange', price: 2.5 },
    { category: 'Beverages', name: 'Soda', type: 'Cola', price: 1.0 },
    { category: 'Beverages', name: 'Energy Drink', type: 'Berry', price: 2.0 },
    { category: 'Beverages', name: 'Sparkling Water', type: 'Lemon', price: 1.5 },
    { category: 'Beverages', name: 'Lemonade', type: 'Homemade', price: 1.5 },
    { category: 'Beverages', name: 'Iced Tea', type: 'Peach', price: 2.0 },
    { category: 'Beverages', name: 'Milkshake', type: 'Strawberry', price: 3.0 },
    { category: 'Beverages', name: 'Smoothie', type: 'Tropical', price: 4.0 },

    // Category: Condiments:-

    { category: 'Condiments', name: 'Ketchup', type: 'Heinz', price: 1.0 },
    { category: 'Condiments', name: 'Mustard', type: 'Yellow', price: 0.5 },
    { category: 'Condiments', name: 'Mayonnaise', type: 'Organic', price: 3.0 },
    { category: 'Condiments', name: 'Hot Sauce', type: 'Sriracha', price: 2.0 },
    { category: 'Condiments', name: 'Soy Sauce', type: 'Low Sodium', price: 1.5 },
    { category: 'Condiments', name: 'Barbecue Sauce', type: 'Smoky', price: 2.0 },
    { category: 'Condiments', name: 'Salad Dressing', type: 'Ranch', price: 1.5 },
    { category: 'Condiments', name: 'Vinegar', type: 'Balsamic', price: 3.0 },
    { category: 'Condiments', name: 'Olive Oil', type: 'Extra Virgin', price: 5.0 },
    { category: 'Condiments', name: 'Honey', type: 'Raw', price: 4.0 },
];

console.log (products); 


const card_Items = document.querySelector ("#container");


function render (products) {

    products.filter (function (item) {
        card_Items.innerHTML += `
        <div class="cards">
            <h2>Category: ${item.category}</h2>
            <h2>Name: ${item.name}</h2>
            <h2>Type: ${item.type}</h2>
            <h2>Price: ${item.price}</h2>
        </div>`;
    });
}

function filteredItems (button) {

    const selected_Button_Items = button.innerHTML;
    const filterProducts = products.filter (item => item.category == selected_Button_Items);

    card_Items.innerHTML = "";
    console.log (filterProducts);
    render (filterProducts);
}