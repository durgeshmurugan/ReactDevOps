import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div id="div1">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle" id="nav">
                <div data-testid="headerlink">
                    <Link className='navbar navbar-brand text-left' to={"/product"}>
                        <h2 className='mx-5 '>Online Shopping System</h2>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <div role='productlink'>
                            <li className="nav-item active">
                                <Link className='btn btn-outline-secondary' to={"/product"} id="button1">Product</Link>
                            </li>
                        </div>
                        <div className="cart" > 
                        {/* onClick={() => setShow(false)} */}
                            <span>
                                <i className="fas fa-cart-plus"></i>
                            </span>
                            {/* <span>{size}</span> */}
                        </div>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Home
