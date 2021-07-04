import { CalendarToday, InfoOutlined, LabelImportantOutlined, LocalOfferOutlined, Publish, SupervisedUserCircleOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

import './product.css';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Edit Product</h1>
                <Link to="/newProduct">
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>
            <div className="productContainer">
                <div className="productView">
                    <div className="productViewTop">
                        <img 
                            src="https://res.cloudinary.com/foodcrowdy/image/upload/v1622635084/products/edwzkkvy1oprf3g1rnud.jpg" 
                            alt="product" 
                            className="productViewImg" 
                        />
                        <div className="productViewTopTitle">
                            <span className="productViewName">Goat Meat</span>
                            <span className="productViewCategory">Frozen Foods</span>
                        </div>
                    </div>
                    <div className="productViewBottom">
                        <span className="productViewTitle">Product Details</span>
                        <div className="productViewInfo">
                            <CalendarToday className="productViewIcon" />
                            <span className="productViewInfoTitle">10.12.2020</span>
                        </div>
                        <div className="productViewInfo">
                            <SupervisedUserCircleOutlined className="productViewIcon" />
                            <span className="productViewInfoTitle">Food Co.</span>
                        </div>
                        <div className="productViewInfo">
                            <LabelImportantOutlined className="productViewIcon" />
                            <span className="productViewInfoTitle">Unit:Kg</span>
                        </div>
                        <span className="productViewTitle">Other Details</span>
                        <div className="productViewInfo">
                            <LocalOfferOutlined className="productViewIcon" />
                            <span className="productViewInfoTitle">₦1,500.00</span>
                        </div>
                        <div className="productViewInfo">
                            <LocalOfferOutlined className="productViewIcon" />
                            <span className="productViewInfoTitle">₦1,500.00</span>
                        </div>
                        <div className="productViewInfo">
                            <InfoOutlined className="productViewIcon" />
                            <span className="productViewInfoTitle">High protein healthy red meat</span>
                        </div>
                    </div>
                </div>
                <div className="productUpdate">
                    <span className="productUpdateTitle">Edit</span>
                    <form className="productUpdateForm">
                        <div className="productUpdateLeft">
                            <div className="productUpdateItem">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    placeholder="Panla"
                                    className="productUpdateInput"
                                />
                            </div>
                            <div className="productUpdateItem">
                                <label>Category</label>
                                <input
                                    type="text"
                                    placeholder="Frozen Foods"
                                    className="productUpdateInput"
                                />
                            </div>
                            <div className="productUpdateItem">
                                <label>Cost Price</label>
                                <input
                                    type="number"
                                    placeholder="₦1500"
                                    className="productUpdateInput"
                                />
                            </div>
                            <div className="productUpdateItem">
                                <label>Selling Price</label>
                                <input
                                    type="number"
                                    placeholder="₦1500"
                                    className="productUpdateInput"
                                />
                            </div>
                            <div className="productUpdateItem">
                                <label>Description</label>
                                <textarea
                                    type="text"
                                    placeholder="Panla"
                                    className="productUpdateTextarea"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>
                        <div className="productUpdateRight">
                            <div className="productUpdateUpload">
                                <img 
                                    src="https://res.cloudinary.com/foodcrowdy/image/upload/v1622635084/products/edwzkkvy1oprf3g1rnud.jpg" 
                                    alt="" 
                                    className="productUpdateImg" 
                                />
                                <label htmlFor="file">
                                    <Publish className="productUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className="productUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
