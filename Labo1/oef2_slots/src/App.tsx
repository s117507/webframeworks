

const App = () => {
  let slot1 = Math.random() * 5;
  let slot2 = Math.random() * 5;
  let slot3 = Math.random() * 5;

  let winning = slot1 === slot2 && slot2 === slot3;

  return (
    <div>
      <h1>Labo 1: Slots</h1>
      <img src="/cherry.png" alt="cherry" width="100"/>
      <img src="/lemon.png" alt="lemon" width="100"/>
      <img src="/grape.png" alt="grape" width="100"/>
      <img src="/watermelon.png" alt="watermelon" width="100"/>
      <img src="/seven.png" alt="seven" width="100"/>

      {winning ? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren!</p> }
    </div>
  );
};

export default App;