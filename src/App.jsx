import {
  Header,
  Footer,
  Description,
  Graph,
  OfferForm,
  SpeakerForm,
  Archive,
  News
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
      </div>
    </>
  )
}

export default App
