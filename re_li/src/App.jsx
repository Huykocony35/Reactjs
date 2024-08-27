import List from './List.jsx'
function App() {
  const fruits = [{ id: 1, name: "apple", calories: 40 },
  { id: 2, name: "banana", calories: 30 },
  { id: 3, name: "orange", calories: 10 },
  { id: 4, name: "coconut", calories: 20 }];
  const vegetables = [{ id: 1, name: "potatoes", calories: 40 },
    { id: 2, name: "carrot", calories: 30 },
    { id: 3, name: "corn", calories: 10 },
    { id: 4, name: "broccoli", calories: 20 }];

  return (
    <>
     <List items={fruits} category="Fruits" />
     <List items={vegetables} category="Vegetables" />
    </>
   
  )
}
export default App