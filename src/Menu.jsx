import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import MenuList from './MenuList';
function Menu() {
    let { id } = useParams();
    let [acti,setActi] = useState(id);
    const breakfast = [
        { image: "https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?cs=srgb&dl=pexels-pixabay-407041.jpg&fm=jpg", title: "Pancakes", price: "120 ₹", madeWith: "Flour, eggs, milk, sugar, butter, honey" },
        { image: "https://www.shutterstock.com/image-photo/masala-dosa-variation-popular-south-260nw-2140359469.jpg", title: "Masala Dosa", price: "100 ₹", madeWith: "Rice batter, potato, curry leaves, mustard seeds" },
        { image: "https://i.guim.co.uk/img/media/352fcb591bc9fd92f97f51913724b0530bebe3e5/0_2429_3567_2139/master/3567.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f5872b12dae2f74cdc36b74bcbb16db0", title: "Omelette", price: "80 ₹", madeWith: "Eggs, onions, tomatoes, green chilies, cheese" },
        { image: "https://t4.ftcdn.net/jpg/02/29/55/23/360_F_229552315_VsKpPRRFQ3BWbMA6w2LCOOqeOJWJDIWZ.jpg", title: "Aloo Paratha", price: "90 ₹", madeWith: "Wheat flour, potato, butter, spices, coriander" },
        { image: "https://t4.ftcdn.net/jpg/04/72/01/73/360_F_472017398_v6JPATak7p8VenbHzoW3O0PhGA3fircQ.jpg", title: "Poha", price: "70 ₹", madeWith: "Flattened rice, peanuts, onions, mustard seeds" }
    ];

    const mainDishes = [
        { image: "https://media.istockphoto.com/id/1170729895/photo/indian-butter-chicken-horizontal-photo.jpg?s=612x612&w=0&k=20&c=4bZViynoVnP1HaWHIY1k5FvW-dj9DM2EOMHbKnAqYZ4=", title: "Butter Chicken", price: "250 ₹", madeWith: "Chicken, butter, tomato gravy, cream, spices" },
        { image: "https://st4.depositphotos.com/18645588/25027/i/450/depositphotos_250276362-stock-photo-delicious-spicy-chicken-biryani.jpg", title: "Chicken Biryani", price: "300 ₹", madeWith: "Basmati rice, mutton, saffron, spices, fried onions" },
        { image: "https://t4.ftcdn.net/jpg/04/75/65/21/360_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg", title: "Paneer Tikka", price: "200 ₹", madeWith: "Paneer, yogurt, bell peppers, spices" },
        { image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/dal-tadka-recipe.jpg", title: "Dal Tadka", price: "180 ₹", madeWith: "Lentils, ghee, garlic, cumin, red chilies" },
        { image: "https://media.istockphoto.com/id/1298568253/photo/rajma-red-bean-masala-red-bean-kidney-curry-with-rice-in-a-clay-bowl-on-a-concrete-table-with.jpg?s=612x612&w=0&k=20&c=uTZg2ZGwz5rDUIriwripbJ7iYkj6u_d64HFVQsKzQRE=", title: "Rajma Chawal", price: "170 ₹", madeWith: "Kidney beans, tomatoes, onions, spices, rice" }
    ];

    const drinks = [
        { image: "https://assets.unileversolutions.com/recipes-v2/237839.jpg", title: "Mango Shake", price: "90 ₹", madeWith: "Mango, milk, sugar, ice cubes" },
        { image: "https://media.istockphoto.com/id/183338431/photo/pumpkin-spice-latte-on-black.jpg?s=612x612&w=0&k=20&c=sCyVk4Gwzu5pPLbTwuhavbDhG0j3hVQVb3Ydo5epJx8=", title: "Cold Coffee", price: "110 ₹", madeWith: "Coffee, milk, sugar, ice, chocolate syrup" },
        { image: "https://static.vecteezy.com/system/resources/thumbnails/041/899/954/small_2x/ai-generated-ayran-refreshment-drink-generate-ai-photo.jpg", title: "Lassi", price: "80 ₹", madeWith: "Yogurt, sugar, cardamom, rose water" },
        { image: "https://www.nestleprofessional.in/sites/default/files/2021-08/Masala-Chai-Thumbnail.jpg", title: "Masala Chai", price: "50 ₹", madeWith: "Tea leaves, milk, ginger, cardamom, cinnamon" },
        { image: "https://www.thevellorekitchen.in/wp-content/uploads/2023/01/Lime-Soda-Sweet.jpg", title: "Fresh Lime Soda", price: "70 ₹", madeWith: "Lemon, soda, sugar, salt, mint" }
    ];

    const desserts = [
        { image: "https://media.istockphoto.com/id/521803129/photo/gulab-jamun-11.jpg?s=612x612&w=0&k=20&c=wyJaXY7Uu0hMBCXkcTDRaujSKN6Rp9roJeKDvF6CfHI=", title: "Gulab Jamun", price: "120 ₹", madeWith: "Milk solids, sugar syrup, saffron, cardamom" },
        { image: "https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=", title: "Rasmalai", price: "150 ₹", madeWith: "Chhena, saffron milk, sugar, nuts" },
        { image: "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=", title: "Chocolate Cake", price: "250 ₹", madeWith: "Flour, cocoa, sugar, butter, eggs, chocolate" },
        { image: "https://t4.ftcdn.net/jpg/09/76/94/83/360_F_976948359_rtVBTuf4BroTySr70mvosOlrA5etCO6v.jpg", title: "Jalebi", price: "100 ₹", madeWith: "Maida, sugar syrup, saffron, ghee" },
        { image: "https://media.istockphoto.com/id/507727527/photo/kaju-katli-13.jpg?s=612x612&w=0&k=20&c=Wuw0bwNYK2ZmTqbJfSGTN6tngQNv8ydDLQWQ8yWkm8Q=", title: "Kaju Katli", price: "200 ₹", madeWith: "Cashews, sugar, cardamom, ghee" }
    ];

    const all = [...desserts, ...breakfast, ...drinks, ...mainDishes]

    const foodList = acti === "breakfast" ? breakfast
        : acti === "mainDishes" ? mainDishes
            : acti === "drinks" ? drinks
                : acti === "desserts" ? desserts
                    : all;
    let nav = [
        { title: 'All', id: '', active: acti === undefined || acti === '' },
        { title: 'Breakfast', id: 'breakfast', active: acti === 'breakfast' },
        { title: 'Main Dishes', id: 'mainDishes', active: acti === 'mainDishes' },
        { title: 'Drinks', id: 'drinks', active: acti === 'drinks' },
        { title: 'Desserts', id: 'desserts', active: acti === 'desserts' },
    ];

    return (
        <div className='menu'>
            <ul className='nav'>
                {nav.map((e) => (
                    <li key={e.id} className={e.active ? "active" : ""} onClick={()=>setActi(e.id)}>
                        {e.title}
                    </li>
                ))}
            </ul>
            <MenuList foodList={foodList} />
        </div>
    );
}

export default Menu;