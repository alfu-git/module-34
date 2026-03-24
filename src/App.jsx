import './App.css'
import MyNav from './Components/MyNav/MyNav'

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

function App() {

  return (
    <>

      <header>
        <MyNav navItems={navItems}></MyNav>
      </header>
    </>
  )
}

export default App
