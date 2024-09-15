import './App.css'; // Adjust the path as needed

const Spinner = () => (
  <div className="spinner-container">
    <div className="box-of-star1">
      <div className="star star-position1"></div>
      <div className="star star-position2"></div>
      <div className="star star-position3"></div>
      <div className="star star-position4"></div>
      <div className="star star-position5"></div>
      <div className="star star-position6"></div>
      <div className="star star-position7"></div>
      <div className="astronaut">
        <div className="schoolbag"></div>
        <div className="head"></div>
        <div className="body"></div>
        <div className="panel"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
      </div>
    </div>
    <div className="box-of-star2">
      {/* Duplicate the stars */}
    </div>
    <div className="box-of-star3">
      {/* Duplicate the stars */}
    </div>
    <div className="box-of-star4">
      {/* Duplicate the stars */}
    </div>
  </div>
);

export default Spinner;
