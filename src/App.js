
import './App.css';
import solarPanels from './assets/Desktop-SolarPanels.jpeg';
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg' ;
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
     <Header/>
      <div className="App__items">
      <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          deslink=""
          backgroundimg={solarPanels}
          leftitemtext="ORDER NOW"
          leftitemlink=''
          rightitemtext="LEARN MORE"
          rightitemlink=''
          twobuttons={true}
          first
          />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          deslink=""
          backgroundimg={ModelS}
          leftitemtext="CUSTOM ORDER"
          leftitemlink=''
          rightitemtext="EXISTING INVENTORY"
          rightitemlink=''
          twobuttons={true}
          />
          <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          deslink=""
          backgroundimg={Model3}
          leftitemtext="CUSTOM ORDER"
          leftitemlink=''
          rightitemtext="EXISTING INVENTORY"
          rightitemlink=''
          twobuttons={true}
          />
          <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          deslink=""
          backgroundimg={ModelX}
          leftitemtext="CUSTOM ORDER"
          leftitemlink=''
          rightitemtext="EXISTING INVENTORY"
          rightitemlink=''
          twobuttons={true}
          />
          <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          deslink=""
          backgroundimg={ModelY}
          leftitemtext="CUSTOM ORDER"
          leftitemlink=''
          rightitemtext="LEARN MORE"
          rightitemlink=''
          twobuttons={true}
          />
          <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          deslink=""
          backgroundimg={SolarRoof}
          leftitemtext="ORDER NOW"
          leftitemlink=''
          rightitemtext="LEARN MORE"
          rightitemlink=''
          twobuttons={true}
          />
          <Item
          title="Accessories"
          desc=""
          deslink=""
          backgroundimg={Accessories}
          leftitemtext="SHOP NOW"
          leftitemlink=''
          rightitemtext=""
          rightitemlink=''
          twobuttons={false}
          />
          

      </div>
    </div>
  );
}

export default App;
