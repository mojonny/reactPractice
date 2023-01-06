import React from "react";
import Product from "./Product";

function Products() {
  const getProducts = () => {
    return [
      /*
      {
        imageURL: "https://i.imgur.com/qdRseEa.png",
        productName: "None of your business!6543",
        releaseDate: "June 28,1989'",
        description: "this is a product, don't worry about it.",
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageURL: "https://i.imgur.com/AYtdwGA.png",
        productName: "None of your bu978607960siness!",
        releaseDate: "June 28,1989'",
        description: "this is a product, don't worry about it.",
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageURL:
          "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        productName: "None of87698698769876 your business!",
        releaseDate: "June 28,1989'",
        description: "this is a product, don't worry about it.",
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageURL:
          "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        productName: "None of your bus675987698iness!",
        releaseDate: "June 28,1989'",
        description: "this is a product, don't worry about it.",
        rating: 4,
        numOfReviews: 2,
      },*/
    ];
  };

  const products = getProducts();

  const listProducts = products.map((product) => (
    <Product key={product.productName} data={product} />
  ));

  return (
    <div>
      {listProducts.length > 0 && <ul>{listProducts} </ul>}
      {listProducts.length === 0 && <ul>No Products to display yo.</ul>}
    </div>
  );
}
export default Products;
