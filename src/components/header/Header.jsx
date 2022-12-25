import React from "react";

const Header = ({ setInputValue }) => {
  const enterPushed = (e) => {
    if (e.keyCode === 13 ) {
      setInputValue(e.target.value)
      e.target.value = ''
    };
  };
  return (
    <div>
      <input
        className="addCityInp"
        type="text"
        placeholder="Enter your city..."
        onKeyDown={enterPushed}
      />
      <button
        className="button-70"
        onClick={(e) => {setInputValue(e.target.parentNode.children[0].value)}}
      >
        Get forecast
      </button>
    </div>
  );
};

export default Header;
