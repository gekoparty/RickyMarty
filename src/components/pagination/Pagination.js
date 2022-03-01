import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";



const Pagination = ({ info, pageNumber, setPageNumber }) => {

    const maxPages = info?.pages;
    const [width, setWidth] = useState(window.innerWidth);
    
    const updateDimension = () => {
      setWidth(window.innerWidth)
    }

    useEffect(()=> {
      window.addEventListener("resize", updateDimension)
      return () => window.removeEventListener("resize", updateDimension)
    },[])


    

  return (
    <>
    <style jsx="true">
      {
        `
        @media (max-width: 768px) {
          .next, .prev {
            display: none;
          }
          .pagination {
            font-size: 14px;
          }
        }
        `
      }
    </style>
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      previousLabel="Tilbake"
      nextLabel="Frem"
      nextClassName="btn btn-primary next"
      previousClassName="btn btn-primary prev"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      activeClassName="active"
      pageCount={maxPages}
    />
    </>
  );
};

export default Pagination;
