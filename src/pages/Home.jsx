import React from "react";
import Layout from "../components/Layout";
import HomeCategory from "../components/HomeCategory"
import products from '../utils/products.json';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryNames: []
        };
    }

    componentDidMount() {
        const categories = Object.values(products);
        const categoryNames = Object.keys(products);

        this.setState({categories: categories});
        this.setState({categoryNames: categoryNames});
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        {this.state.categories.map((category, index) => {
                            return (
                                <HomeCategory
                                    key={index}
                                    title={category.name}
                                    description={category.description}
                                    image={category.image}
                                    routeName={this.state.categoryNames[index]}
                                />
                            )
                        })}
                    </div>
                </div>

            </Layout>
        );
    }
}

export default Home;
