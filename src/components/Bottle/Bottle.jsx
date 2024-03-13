import "./Bottle.css";
import PropTypes from "prop-types";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <p>Name: {name} </p>
      <p>Price: {price}</p>
      <button
        onClick={() => {
          handleAddToCart(bottle);
        }}
      >
        Purchase
      </button>
    </div>
  );
};

Bottle.propTypes={
    bottle:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired
}
export default Bottle;
