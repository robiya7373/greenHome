import React, {useState} from 'react';

// Components
import CartTotals from './cartTotals/index';

// Styles
import './style.css'

// img
import productImg from '../../assets/productsCLImage/product1.png'
import { ReactComponent as MinusIcon } from '../../assets/busket/minus.svg';
import { ReactComponent as PlusIcon } from '../../assets/busket/plus.svg';
import { ReactComponent as DeleteIcon } from '../../assets/busket/Delete.svg'

function Busket({propStyle}) {

  const [counter, setCounter] = useState(1)

  return(
    <div className="busket" style={propStyle}>
      <div className="busket__container">
        <div className="busket__interface">
          <header className="busket__header">

            <section className="busket__products">
              <h2 className="busket__title">Products</h2>
            </section>

            <section className="busket__price">
              <h2 className="busket__title">Price</h2>
            </section>

            <section className="busket__quantity">
              <h2 className="busket__title">Quantity</h2>
            </section>

            <section className="busket__total">
              <h2 className="busket__title">Total</h2>
            </section>

          </header>

          <ul className="busket__list">

            <li className="busket__item">
              <section className="busket__products">
                <div className="busket__products-inner">
                  <img className="busket__products-img" src={productImg} alt="flower" />
                  <div className="busket__products-info">
                    <h2 className="busket__title">Barberton Daisy</h2>
                    <p className="busket__product-number">
                      <span className="busket__product-num-title">
                      SKU:
                      </span>
                      1995751877966
                    </p>
                  </div>
                </div>
              </section>

              <section className="busket__price">
                <p className="busket__price-text">$119.00</p>
              </section>

              <section className="busket__quantity">
                <div className="busket__quantity-inner">
                  <button
                    className="busket__quantity-count-btn"
                    type="button"
                  >
                    <MinusIcon />
                  </button>

                  <div className="busket__quantity-counter">
                    {counter}
                  </div>

                  <button
                    className="busket__quantity-count-btn"
                    type="button"
                  >
                    <PlusIcon />
                  </button>

                </div>
              </section>

              <section className="busket__total">
                <div className="busket__total-inner">
                  <p className="busket__total-text">$119.00</p>
                  <button className="busket__delete-btn" type="button" >
                    <DeleteIcon className="busket__delete-icon" />
                  </button>
                </div>
              </section>
            </li>

          </ul>
        </div>
        <CartTotals />
      </div>
    </div>
  )
}

export default Busket;
