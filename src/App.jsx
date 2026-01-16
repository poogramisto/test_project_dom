import {
  Header,
  Footer,
  Description,
  Graph,
  OfferForm,
  SpeakerForm,
  Archive,
  News,
  Questions
} from './components'

function App() {

  return (
    <>
      <div className="container_small">        
        <Header />
        <Description />
        <Graph />
        <OfferForm />
        <SpeakerForm />
        <Footer />
        <Archive/>
        <News/>
        <Questions/>
      </div>
    </>
  )
}

export default App
