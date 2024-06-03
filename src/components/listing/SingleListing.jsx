import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Loading from "../loading/Loading";
import "../listing/singleListing.css";
import Search from "../search/Search";

const SingleListing = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const [loading, setLoading] = useState(true); // Loading state
  const [singleData, setSingleData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeThumbnail, setActiveThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/api/v1/upload/getSingleData/${id}`
        );
        if (response.data.success) {
          setSingleData(response.data.singleData);
          // Set the main image to the first image in the array
          if (response.data.singleData.images.length > 0) {
            setMainImage(response.data.singleData.images[0]);
            // Set the first thumbnail as active initially
            setActiveThumbnail(response.data.singleData.images[0]);
          }
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    getSingleData();
  }, [id]);


  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getRelatedProducts/${id}`
        );
        if (response.data.success) {
          setRelatedProducts(response.data.relatedProducts);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong while fetching related products");
      }
    };
    fetchRelatedProducts();
  }, [id]);






  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setActiveThumbnail(image);
  };

  // Render loading component if data is still loading
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="singleListing_container">
      <div className="container listContainer">
        <div className="left_listing">
          <div>
            {singleData && (
              <div className="single_listing">
                <div className="main_image_container">

                <div className="single_listing_content">
                  <h2>{singleData.heading}</h2>
                  <div className="rupeess location">
                    <p className="icon">
                      <GiTakeMyMoney />
                    </p>
                    <h4>Rs {singleData.price}</h4>
                  </div>
                  <div className="location">
                    <p className="icon">
                      <FaLocationDot />
                    </p>
                    <h4>{singleData.address}</h4>
                  </div>
                  <div className="phone location">
                    <p className="icon">
                      <FaPhoneAlt />
                    </p>
                    <h4>{singleData.phone}</h4>
                  </div>
                </div>

                  {/* Display the main image */}
                  <img
                    className="main_image"
                    src={mainImage}
                    alt="Main House"
                  />
                </div>
                <div className="thumbnail_container">
                  {/* Display thumbnails */}
                  {singleData.images.map((image, index) => (
                    <img
                      key={index}
                      style={{
                        filter:
                          activeThumbnail === image
                            ? "none"
                            : "blur(2px)"
                      }}
                      className="thumbnail_image"
                      src={image}
                      alt={`House ${index + 1}`}
                      onClick={() => handleThumbnailClick(image)}
                    />
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
        <div className="right_listing">
          {/* <Search/> */}
          <h3>Related Properties</h3>
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <div key={product._id}>
                <img src={product.images[0]} alt="Related Property" />
                <h5>Address : {product.address}</h5>
                <p>Rs : {product.price}</p>
              </div>
            ))
          ) : (
            <p>No related properties found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleListing;












// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import Loading from "../loading/Loading";
// import "../listing/singleListing.css";

// const SingleListing = () => {
//   const { id } = useParams(); // Get the id from the URL parameter
//   const [loading, setLoading] = useState(true); // Loading state
//   const [singleData, setSingleData] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [activeThumbnail, setActiveThumbnail] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const getSingleData = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getSingleData/${id}`);
//         console.log(response)
//         if (response.data.success) {
//           setSingleData(response.data.singleData);
//           // Set the main image to the first image in the array
//           if (response.data.singleData.images.length > 0) {
//             setMainImage(response.data.singleData.images[0]);
//             // Set the first thumbnail as active initially
//             setActiveThumbnail(response.data.singleData.images[0]);
//           }
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         toast.error("Something went wrong");
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//       }
//     };
//     getSingleData();
//   }, [id]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getRelatedProducts/${id}`
//         );
//         if (response.data.success) {
//           setRelatedProducts(response.data.relatedProducts);
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         toast.error("Something went wrong while fetching related products");
//       }
//     };
//     fetchRelatedProducts();
//   }, [id]);

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//     setActiveThumbnail(image);
//   };

//   // Render loading component if data is still loading
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="singleListing_container">
//       <div className="container">
//         <div className="left_listing">
//           <div>
//             {singleData && (
//               <div className="single_listing">
//                 <div className="main_image_container">
//                   <div className="single_listing_content">
//                     <h2>{singleData.heading}</h2>
//                     <div className="rupeess location">
//                       <p className="icon">
//                         <GiTakeMyMoney />
//                       </p>
//                       <h4>Rs {singleData.price}</h4>
//                     </div>
//                     <div className="location">
//                       <p className="icon">
//                         <FaLocationDot />
//                       </p>
//                       <h4>{singleData.address}</h4>
//                     </div>
//                     <div className="phone location">
//                       <p className="icon">
//                         <FaPhoneAlt />
//                       </p>
//                       <h4>{singleData.phone}</h4>
//                     </div>
//                   </div>
//                   {/* Display the main image */}
//                   <img
//                     className="main_image"
//                     src={mainImage}
//                     alt="Main House"
//                   />
//                 </div>
//                 <div className="thumbnail_container">
//                   {/* Display thumbnails */}
//                   {singleData.images.map((image, index) => (
//                     <img
//                       key={index}
//                       style={{
//                         filter:
//                           activeThumbnail === image ? "none" : "blur(2px)"
//                       }}
//                       className="thumbnail_image"
//                       src={image}
//                       alt={`House ${index + 1}`}
//                       onClick={() => handleThumbnailClick(image)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="right_listing">
//           <h3>Related Properties</h3>
//           {relatedProducts.length > 0 ? (
//             relatedProducts.map((product) => (
//               <div key={product._id}>
//                 <h4>{product.heading}</h4>
//                 <img src={product.images[0]} alt="Related Property" />
//                 <p>{product.address}</p>
//               </div>
//             ))
//           ) : (
//             <p>No related properties found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleListing;
