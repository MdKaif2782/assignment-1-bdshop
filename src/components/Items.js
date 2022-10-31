

function Item(props) {
  return (
    <div className="item">
        <img className="image" src={props.img}/>
      <div className="title">{props.title}</div>
        <div className="price">Price: {props.price}$</div>
        <div className="price">Rating: {props.rating}/5.00</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default Item;