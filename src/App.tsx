import './App.css'
import { Card } from './components/Card'
import { CardHolder } from './components/CardHolder'
import { MyComponent } from './components/MyComponent'

function App() {
  return (
    <>
      <main>
        <h1>This is the main content!</h1>
        <MyComponent name="mr. frog" />
        <Card>
          <p>this is card is floating on its own</p>
          <MyComponent name="card person" />
        </Card>
        <CardHolder>
          <Card>
            <p>this is card is <span>inside</span> a CardHolder</p>
            <MyComponent name="card person" />
          </Card>
          <Card>
            <p>this is card is <span>inside</span> a CardHolder</p>
            <MyComponent name="card person" />
          </Card>
          <Card>
            <p>this is card is <span>inside</span> a CardHolder</p>
            <MyComponent name="card person" />
          </Card>
          <Card>
            <p>this is card is <span>inside</span> a CardHolder</p>
            <MyComponent name="card person" />
          </Card>
        </CardHolder>
      </main>
    </>
  )
}

export default App
