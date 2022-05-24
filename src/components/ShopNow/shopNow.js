import {useState, useEffect} from 'react'

import "./shopNowStyles.css"
import {ShopNowCards} from './shopNowCards'
import ReactPaginate from 'react-paginate';
import ScrollIntoView from 'react-scroll-into-view'

const ShopNow = () => {
    const products = [
      {
        id: "1",
        img1: "https://static.wixstatic.com/media/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.jpeg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.webp",
        title: "Whole Sale Cotton Carry Bags(14X18 Size)",
        price: 3500.0,
      },
      {
        id: "2",
        img1: "https://static.wixstatic.com/media/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.jpeg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.webp",
        title: "Wholesale Biodegradable Jute Grow Bags 8X12",
        price: 5100.0,
      },
      {
        id: "3",
        img1: "https://static.wixstatic.com/media/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.jpeg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.webp",
        title: "Biodegradable Jute Grow Bags 8X12 & 6X6 inches",
        price: 55.0,
      },
      {
        id: "4",
        img1: "https://static.wixstatic.com/media/272cf7_f6000ad208464b2680de083b412e54d0~mv2.jpeg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_f6000ad208464b2680de083b412e54d0~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_ab22f73117474208a5fc62f2819b9fcc~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_ab22f73117474208a5fc62f2819b9fcc~mv2.webp",
        title:
          "Biodegradable Jute Grow Bags 8X12 & 6X6 inches with close handle",
        price: 135.0,
      },
      {
        id: "5",
        img1: "https://static.wixstatic.com/media/272cf7_f572753db0c74993ad213f48d4a40710~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_f572753db0c74993ad213f48d4a40710~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_ab22f73117474208a5fc62f2819b9fcc~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_ab22f73117474208a5fc62f2819b9fcc~mv2.webp",
        title: "Brich Wood Fork (Pack of 100) 16cm",
        price: 138.0,
      },
      {
        id: "6",
        img1: "https://static.wixstatic.com/media/272cf7_e8250541dff04a5fa67023f6ac6f6ee0~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_e8250541dff04a5fa67023f6ac6f6ee0~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_5e8e36bab406442ca755ea76fc0d5152~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_5e8e36bab406442ca755ea76fc0d5152~mv2.webp",
        title: "Bagase Plates (Pack of 25)",
        price: 100.0,
      },
      {
        id: "7",
        img1: "https://static.wixstatic.com/media/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.webp",
        title: "Canvas Box Bag - Cotton (16X14X4)",
        sale: "best Seller",
        price: 121.0,
      },
      {
        id: "8",
        img1: "https://static.wixstatic.com/media/272cf7_e8609e44cb28440991b8bf0edd4126d5~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_e8609e44cb28440991b8bf0edd4126d5~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_e22dc60c6bbd45eabc0c2e5d4d880a52~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_e22dc60c6bbd45eabc0c2e5d4d880a52~mv2.webp",
        title: "Bagasse Bowl (Pack of 25)",
        sale: "New Arrival",
        price: 61.0,
      },
      {
        id: "9",
        img1: "https://static.wixstatic.com/media/272cf7_cb03f60a70e24718871233ced311192d~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_cb03f60a70e24718871233ced311192d~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_34a2f645ea844391a32f373d310d5935~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_34a2f645ea844391a32f373d310d5935~mv2.webp",
        title: "Copper Bottle - 700ml Best, Leak Proof Copper Bottle",
        sale: "New Arrival",
        price: 660.0,
      },
      {
        id: "10",
        img1: "https://static.wixstatic.com/media/272cf7_5e8e36bab406442ca755ea76fc0d5152~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_5e8e36bab406442ca755ea76fc0d5152~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.webp",
        title: "Canvas Box Bag - Cotton",
        sale: "Best Seller",
        price: 88.0,
      },
      {
        id: "11",
        img1: "https://static.wixstatic.com/media/272cf7_22d65900dcc247048cb31214f8454aa8~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_22d65900dcc247048cb31214f8454aa8~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.webp",
        title: "Vegetable Compartment Bags",
        sale: "Best Seller",
        price: 220.0,
      },
      {
        id: "12",
        img1: "https://static.wixstatic.com/media/272cf7_c7bb4fb089a2491aa3a2d72dff022bb7~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_c7bb4fb089a2491aa3a2d72dff022bb7~mv2.webp",
        img2: "https://static.wixstatic.com/media/272cf7_7ec43ac224e742ce844e199b32813046~mv2.jpg/v1/fill/w_362,h_362,al_c,q_80,usm_0.66_1.00_0.01/272cf7_7ec43ac224e742ce844e199b32813046~mv2.webp",
        title: "Bamboo Cuterly Set",
        price: 385.0,
      },
    ];

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

//   console.log(currentItems);
//   const builtCards = )
    return (
      <>
        <div className="shopnow__container" id="shopNow">
          <h1>Shop Now </h1>
          <div className="products__container">
            {currentItems.map((product) => (
              <ShopNowCards product={product} />
            ))}
          </div>
        </div>

        <ScrollIntoView selector="#shopNow">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </ScrollIntoView>
        <a href="#viewmore" className="view__more">
          View More
        </a>
      </>
    );
}

export default ShopNow