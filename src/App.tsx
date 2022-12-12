import { Button } from './components/Button'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  return (
    <main className="App flex flex-col items-center justify-center h-screen">
      <h1 className="text-slate-400 italic mb-10 upp text-3xl">Simple calculator w/ React and TypeScript</h1>

      <section className="p-4 rounded-lg bg-slate-600 shadow-md">
        <div id="wrapper-calc" className="w-full bg-white px-3 py-6 rounded shadow-sm text-xl text-right relative">
          <p id="preview" className="absolute right-3 top-4 text-slate-400 italic"></p>
          <p id="result" className="mt-5">0</p>
        </div>

        <div className="flex text-2xl space-x-2 mt-5">
          <Button text="+" styleBtn="action" />
          <Button text="-" styleBtn="action" />
          <Button text="x" styleBtn="action" />
          <Button text="/" styleBtn="action" />
        </div>

        <div className="flex text-2xl space-x-2 mt-2">
          <div className="grid grid-cols-3 gap-2">
            <Button text="7" styleBtn="number" />
            <Button text="8" styleBtn="number" />
            <Button text="9" styleBtn="number" />
            <Button text="4" styleBtn="number" />
            <Button text="5" styleBtn="number" />
            <Button text="6" styleBtn="number" />
            <Button text="1" styleBtn="number" />
            <Button text="2" styleBtn="number" />
            <Button text="3" styleBtn="number" />
            <Button text="0" styleBtn="number" colSpan={true} />
          </div>

          <div className="flex flex-col auto-cols-fr space-y-2">
            <Button text="CE" styleBtn="action" />
            <Button text="C" styleBtn="action" />
            <Button text="=" styleBtn="action" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
