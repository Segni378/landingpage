export const ShopNowCards = ({product}) => {
    console.log("In the shop now cards");
    return (
      <div className="product__container">
        <div className="product__img">
          <img
            src={`${product.img1}`}
            onMouseOver={(e) => {
              const img = product.img2 ? product.img2 : product.img1;
              e.currentTarget.src = `${img}`;
            }}
            onMouseOut={(e) => (e.currentTarget.src = `${product.img1}`)}
            objectFit="cover"
            alt="This is product"
          />

          <a href="#quick-view">Quick View</a>
          
          {product.sale && <span>{product.sale}</span>}
          
        </div>
        <div className="product-desc">
          <p>{product.title}</p>
          <p>₹{product.price}</p>
        </div>
      </div>
    );

}