const App = () => {
  let random: number = Math.random();
  let getal1: number = Math.floor(Math.random() * 10);
  let getal2: number = Math.floor(Math.random() * 10);

  return (
    <div>
      <h1>Labo 1</h1>
      <p>Random: {random}</p>
      <p>Getal 1: {getal1}</p>
      <p>Getal 2: {getal2}</p>
      <p>{getal1} + {getal2} = {getal1 + getal2}  </p>
    </div>
  );
};

export default App;