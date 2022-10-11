import './App.css';

function App() {
  const data = [
    {
      city: 'Ottawa',
      country: 'Canada',
      population: 1_000_000,
      elevation: '70 m',
    },
    {
      city: 'New York',
      country: 'USA',
      population: 8_300_000,
      elevation: '10 m'
    },
    {
      city: 'Port of Spain',
      country: 'Trinidad and Tobago',
      population: 37_000,
      elevation: '66 m'
    },
    {
      city: 'Chongqing',
      country: 'China',
      population: 31_000_000,
      elevation: '244 m'
    }
  ]
  
  function createHead(headerKeys) {
    return (
      <thead><tr>{ headerKeys.map((e) => <th>{e}</th>) }</tr></thead>
    )
  }

  // function to create a body
  function createBody(data) {
    return (
      <tbody>{ data.map(entry => { return readRows(entry);}) }</tbody>
    )
  }

  // function to read a 'row'
  function readRows(entry) {
    const newRow = Object.keys(entry).map((key, index) => {
      console.log(entry[key]);
      return (
        <td key={index}>{entry[key]}</td>
      )
    }); 
    return <tr>{ newRow }</tr>;
  }

  function generateTable(data) {
    // getting a list of header keys
    const headerKeys = Object.keys(data[0]);

    // creating a header JSX object
    const header = createHead(headerKeys);

    // creating a body JSX object
    const body = createBody(data);
    
    // combining and returning them inside a table element
    return (
      <table className='mainTable'>
        {header}
        {body}
      </table>
    );
  }

  const table = generateTable(data);

  return (
    <div className="App">
      {table}
    </div>
  );
}

export default App;
