import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import './PizzaContainer.scss'


const PizzaContainer = (props) => {
    
    return (
        <div className="pizza__wrapper">
            {props.pizza.map((item) => (
                <Card 
                img={item.pizzaImg}
                name={item.pizzaName}
                description={item.pizzaDescription}
                price={item.pizzaPrice}
                />
            ) )}
        </div>
        
    )
}

let mapStateToProps = (state) => ({
    
    pizza: state.goodsPage.pizza
})



export default connect(mapStateToProps)(PizzaContainer);