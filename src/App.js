import './App.css';

import Card from './Card';
import Navbar from './Navbar';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.key}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className = "cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
