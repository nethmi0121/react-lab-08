// App.tsx
import Greeting from './Greeting';
import NavBar from './NavBar'; 

function App() {
  return (
    <div>
      <NavBar /> 
      <main>
        <Greeting />
      </main>
    </div>
  );
}

export default App;