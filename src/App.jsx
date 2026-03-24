import { Suspense } from 'react';
import './App.css'
import MyNav from './Components/MyNav/MyNav'
import PricingList from './Components/PricingList/PricingList';

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

function App() {

  return (
    <>

      <header>
        <MyNav navItems={navItems}></MyNav>
      </header>

      <main>
        <section className='mt-10  container mx-auto px-5'>
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
      </main>
    </>
  )
}

export default App
