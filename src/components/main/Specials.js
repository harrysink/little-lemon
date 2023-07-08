import React from 'react';
import  {images} from '../../reusables';
import {MdDeliveryDining} from 'react-icons/md';
import './Specials.css'

const foodItems = [
    {
        name: "Greek Salad",
        price: "$12.99",
        description: `The famous greek salad of crispy lettuce, peppers, 
        olives and our Chicago style fat cheese, garnished with crunchy
        garlic and rosemary croutons`,
        image: images.greeksalad,
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: `Our Bruchetta is made from grilled bread that has 
        been smeared with garlic and seasoned with salt and olive oil`,
        image: images.bruchetta,
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: `This comes straigh from grandma's recipe book, 
        every last ingredient has been sourced and is as authentic 
        as can be imagined`,
        image: images.lemondessert,
    }
]

const FoodCard = ({props}) => {
    return (
        <div className="specials-card-item">
            <div className="specials-card-item-image" style={{backgroundImage: `url(${props.image})`}}>
                {/**/}
            </div>
            <div className="specials-card-item-details">
                <div className="specials-card-item-name-price">
                    <h3 className="specials-card-item-name">{props.name}</h3>
                    <p className="specials-card-item-price">{props.price}</p>
                </div>
                <p className="specials-card-item-description">{props.description}</p>
                <button className="specials-card-item-button">
                    Order<MdDeliveryDining className="specials-button-icon"/>
                </button>
            </div>
        </div>
    );
};

const Specials = () => {
    return (
        <div className="specials">
            <div className="specials-name-button">
                <h1 className="specials-name">Specials</h1>
                <button className="specials--menu-button">
                    Online Menu
                </button>
            </div>
            <div className="specials-food-card">
                <div className="specials-food">
                    {
                        foodItems.map((item) => {
                            return (
                                <FoodCard props={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Specials;