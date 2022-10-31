import itemList from './item_list.json';
import Item from './Items';
function ItemList() {
  return (
    <div className="item-list">
      {itemList.map((item,index) => (
          <Item img={item.image}
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}/>
      ))}
    </div>
  );
}
export default ItemList;