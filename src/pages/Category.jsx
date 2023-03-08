import React from 'react';
import Layout from "../components/Layout";
import {useParams} from "react-router-dom";
function Category() {
    console.log(useParams())
    const {categoryName} = useParams();

    return (
        <div>
            <Layout>
                <h1>{categoryName}</h1>
            </Layout>
        </div>
    );

}

export default Category;
