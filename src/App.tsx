import './App.css'
import Logo from './components/Logo'
import Post from './components/Post'
import postData from "./assets/postData.json"

function App() {

  return (
    <>
    <Logo/>
    <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>
    <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>

    </>
  )
}

export default App
