const Pagination = ({ countriesPerPage, totalCountries, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((el, index) => (
          <li key={index} onClick={() => pagination(el)}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
