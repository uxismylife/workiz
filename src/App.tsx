import './App.css'
import Breadcrumbs from './components/Breadcrumbs'
import Header from './components/Header'
import AiCoachCard from './components/AiCoachCard'
import CourierCard from './components/CourierCard'
import MapCard from './components/MapCard'
import AvailableSavingsCard from './components/AvailableSavingsCard'
import EnergyProfileCard from './components/EnergyProfileCard'
import PropertyDetailsCard from './components/PropertyDetailsCard'
import DoorCta from './components/DoorCta'

function App() {
  return (
    <div className="app">
      <Header />
      <Breadcrumbs />
      <div className="app__map">
        <div className="app__map-layout">
          <div className="app__map-layout__sync">
            <div className="app__map-stack">
              <MapCard />
              <CourierCard />
              <div className="app__map-stack__spacer" aria-hidden="true" />
              <AiCoachCard />
            </div>
            <div className="app__map-right__cards">
              <PropertyDetailsCard />
              <EnergyProfileCard />
              <AvailableSavingsCard />
            </div>
          </div>
          <div className="app__map-cta-row">
            <div className="app__map-cta-row__spacer" aria-hidden="true" />
            <DoorCta />
          </div>
        </div>
      </div>
      <main className="app__main" aria-label="Main content" />
    </div>
  )
}

export default App
