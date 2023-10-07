import './App.css'
import ListPenerbangan from './components/ListPenerbangan'
import DetailPenerbangan from './components/DetailPenerbangan'
import Database from './database/data.json'

function App() {
  return (
    <div className="container mx-auto">
      <div class="grid grid-cols-2 gap-x-8 gap-y-4 justify-items-stretch">
        <ListPenerbangan props={Database}></ListPenerbangan>
        <DetailPenerbangan props={Database} rand={Math.floor(Math.random() * Database.length)}></DetailPenerbangan>
      </div>
    </div>
  )
}

export default App
