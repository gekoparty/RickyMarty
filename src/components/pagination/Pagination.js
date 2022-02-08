import React from "react";
import ReactPaginate from "react-paginate";



const Pagination = ({ info, pageNumber, setPageNumber }) => {

    const maxPages = info?.pages;
    
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      previousLabel="Tilbake"
      nextLabel="Frem"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      activeClassName="active"
      pageCount={maxPages}
    />
  );
};

export default Pagination;
