import Student from './Student.jsx'
function App() {
  return (
    <>
      <Student name="Huy1" age="22" isStudent={true}/>
      <Student name="Huy2" age="23" isStudent={false}/>
      <Student name="Huy3" age="24" isStudent={true}/>
      <Student name="Huy4" age="25" isStudent={false}/>
    </>
  );
}

export default App
