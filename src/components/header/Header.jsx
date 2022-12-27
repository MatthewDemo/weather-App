import { setInputValue } from "../../redux/slices/weatherSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
  const dispatch = useDispatch();


  const enterPushed = (e) => {
    if (e.keyCode === 13 ) {
      dispatch(setInputValue(e.target.value))
      // e.target.value = ''
    };
  };
  const enterUp = (e) => {
    if (e.keyCode === 13 ) {
      dispatch(setInputValue(''))
      e.target.value = ''
    };  };




  return (
    <div>
      <input
        className="addCityInp"
        type="text"
        placeholder="Enter your city..."
        onKeyDown={enterPushed}
        onKeyUp={enterUp}
        
      />
      <button
        className="button-70"
        onClick={(e) => {dispatch(setInputValue(e.target.parentNode.children[0].value))}}
      >
        Get forecast
      </button>
    </div>
  );
};

export default Header;
