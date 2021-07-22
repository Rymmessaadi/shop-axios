import React, { useEffect, useCallback, useMemo } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    }


    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};
export default ProductPage;