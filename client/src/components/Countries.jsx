const Countries = ({ countries, loading }) => {
  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      {countries.map((el, index) => (
        <div className="wrapper" key={index}>
          <p>
            {el.name.common}
            <img src={el.flags.png} alt="" style={{ width: "20px", marginLeft: "10px" }} />
          </p>
        </div>
      ))}
    </>
  );
};

export default Countries;
