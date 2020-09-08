import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

function PaginationButtons(props) {
  const changePage = (event, page) => {
    updatePage(page);
  }
  let { page, updatePage, pageCount } = props;
  return (
    <Pagination className="pagination" count={pageCount} page={page} onChange={changePage} showFirstButton showLastButton shape="rounded"/>
  );
}

export default PaginationButtons;