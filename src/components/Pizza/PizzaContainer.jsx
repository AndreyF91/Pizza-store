import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import './PizzaContainer.scss'


const PizzaContainer = (props) => {
    
    return (
        <div className="pizza__wrapper">
            {props.pizza.map((item) => (
                <Card
                item={item} 
                showInfo={props.showInfo}
                setActive={props.setActive}
                img={item.itemImg}
                name={item.itemName}
                description={item.itemDescription}
                price={item.itemPrice}
                />
            ) )}
        </div>
        
    )
}

let mapStateToProps = (state) => ({   
    pizza: state.goodsPage.pizza
})



export default connect(mapStateToProps)(PizzaContainer);