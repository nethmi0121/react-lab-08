import Greeting from './Greeting';
import NavBar from './NavBar';
import { Footer, Card, Button, Banner, Testimonial } from './components';

function App() {
  return (
    <div>
      <NavBar />
      <Banner message="Welcome to my Software Engineering Lab!" />
      <main style={{ padding: '20px' }}>
        <Greeting />
        <Card 
          title="React Project" 
          description="Building scalable UI with TypeScript." 
          imageUrl="https://via.placeholder.com/150" 
        />
        <Button label="Get Started" style={{ backgroundColor: '#007bff', color: 'white' }} />
        <Testimonial 
          quote="The MERN stack integration was seamless." 
          name="Jane Doe" 
          photoUrl="https://via.placeholder.com/50" 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;