interface Student{
  id: number;
  naam: string;
  leeftijd: number;
}

const App = () => {
  let numbers : number[] = [1, 2, 3, 4, 1, 1]
  let students : Student[] = [
    {id: 0, naam: "Christophe",  leeftijd: 19},
    {id: 1, naam: "Musa",  leeftijd: 21},
    {id: 2, naam: "David",  leeftijd: 24},
    {id: 3, naam: "Tyla",  leeftijd: 20},
    {id: 4, naam: "Juni",  leeftijd: 27},
  ]   
  return (
    <div>
      <h1>Labo 1 : Lijsten </h1>
      <ul>
        {
           numbers.map((number, index) => ( 
            <li key={index}>{number}</li>
          ))}
      </ul>
      <h1>Studentenlijst.</h1>
      <ol>
        {
          students.map((student) => (
            <li key={student.id}> {student.naam}   </li>
          ))
        }
      </ol>
      <ol>
        {
          students.filter(student => student.naam.startsWith("J")).map((student) => (
            <li key={student.id}>{student.naam}</li>
          ))
        }
      </ol>
      <h1>Select</h1>
      <select>
         {students.map((student) =>   
        <option>{student.naam} </option>
        )}
      </select>
      <h1>Table</h1>
      <table>
         <thead>
          <th>Naam</th>
          <th>Leeftijd </th>
         </thead>
         <tbody>
           {
            students.map((student) => (
              <tr>
                <td>{student.naam} </td>
                <td>{student.leeftijd}</td>
              </tr>
            ))
           }
         </tbody>
      </table>
    </div>
  )
}

export default App
