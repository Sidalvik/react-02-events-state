import React, { useState } from 'react';
import PropTypes from 'prop-types';
import products from '../../models/Products';
import IconSwitch from './IconSwitch/IconSwitch';
import ListView from './ListView/ListView';
import CardsView from './CardsView/CardsView';

function Store(props) {
    const VIEW_CARDS = 'view_module';
    const VIEW_LIST = 'view_list';

    const [state, setView] = useState(VIEW_CARDS);
    const productsList = products.map((item, index) => Object.assign({}, item, {key:index}));

    const onSwitch = () => {
        console.log("change state");
        setView((prevState) => {
            return prevState === VIEW_LIST ? VIEW_CARDS : VIEW_LIST;
        });
    }

  return (
    <div className='store'>
        <div className="bar">
          <IconSwitch icon = {state} onSwitch = {onSwitch}/>
        </div>
        {state === VIEW_LIST ? <ListView items = {productsList}/> : <CardsView cards = {productsList}/>}
    </div>
  )
}

Store.propTypes = {
  props: PropTypes.any,
};


export default Store
