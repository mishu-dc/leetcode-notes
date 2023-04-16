import './App.css'
import data from './data';

function App() {
  return (
    <div className="App">
      <ol role="list" style={{"--length": 5}}>
        {
          data.map((d, index)=>{
            return (
              <li style={{"--i": index}} key={d.group}>
                <h3>
                  {
                    d.link ? <a target="_blank" href={d.link}>{d.group}</a> : <span>{d.group}</span>
                  }
                  </h3>
                <table style={{width: '100%'}}>
                  <tbody>
                    {
                      d.problems.map((p)=>{
                        return (
                        <tr key={p.title}>
                            <td style={{width: "25%"}}><a target="_blank" href={p.link}>{p.title}</a></td> 
                            <td>{p.description}</td> 
                        </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </li>
            )
          })
        }      
      </ol>
    </div>
  )
}

export default App
