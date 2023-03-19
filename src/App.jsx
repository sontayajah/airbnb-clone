import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/ErrorPage'
import MainLayout from './layout/MainLayout'
import RoomLayout from './layout/RoomLayout'
import Home from './pages/home/Home'
import Room from './pages/room/Room'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="room" element={<RoomLayout />} errorElement={<ErrorPage />}>
        <Route path=":id" element={<Room />}/>
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
