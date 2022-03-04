import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber, numPages }) => {
  const maxPages = numPages;
  const [width, setWidth] = useState(window.innerWidth);

  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  


  return (
   <>
      <style jsx="true">
        {`
      
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        previousLabel="Tilbake"
        nextLabel="Frem"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        nextClassName="btn btn-secondary next"
        previousClassName="btn btn-secondary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        pageCount={maxPages}
        onPageChange={pageChange}
      />
    </>
  );
};

export default Pagination;
