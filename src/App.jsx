import { Suspense } from 'react';
import './App.css'
import MyNav from './Components/MyNav/MyNav'
import PricingList from './Components/PricingList/PricingList';
import Chart from './Components/Chart/Chart';
import axios from 'axios';
import MarksChart from './Components/Chart/MarksChart';

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const pricingDataPromise = fetch('PricingData.json').then(res => res.json());
const marksPromise = axios.get('MarksData.json');

function App() {

  return (
    <>

      <header>
        <MyNav navItems={navItems}></MyNav>
      </header>

      <main>
        <section className='mt-15  container mx-auto px-5'>
          <Suspense 
          fallback={
            <div className='mt-8 flex justify-center items-center'>
              <span className="loading loading-spinner text-primary"></span>
            </div>
          }
        >
          <PricingList pricingDataPromise={pricingDataPromise}></PricingList>
          </Suspense>
        </section>

        <section className='mt-15  container mx-auto px-5'>
          <Chart></Chart>
        </section>

        <section className='mt-15  container mx-auto px-5'>
          <Suspense fallback={
            <div className='mt-8 flex justify-center items-center'>
              <span className="loading loading-spinner text-primary"></span>
            </div>
            }
          >
            <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>
        </section>
      </main>
    </>
  )
}

export default App
