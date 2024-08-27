
function List(props) {

    //   fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //  fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //  fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
    //   fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC
    // const lowCalFruits = fruits.filter(fruits => fruits.calories < 30)
    /* const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
        {lowCalFruits.name} : &nbsp;
        <b>{lowCalFruits.calories}</b></li>); */
    const itemList = props.items;
    const category = props.category;
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name} : &nbsp;
        <b>{item.calories}</b></li>);

    return (<><h3>{category}</h3>
    <ul>{listItems}</ul></>);
}
export default List