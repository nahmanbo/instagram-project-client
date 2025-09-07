import './App.css'
import Post from './components/Post'
import postData from "./assets/postData.json"
import PostBoard from './components/PostBoard'

function App() {

  return (
    <>
    <PostBoard>
      <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>
      <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>
      <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>
      <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>
      <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>
      <Post name={postData[0].name} img={postData[0].imjUrl} description={postData[0].description} dateISO={postData[0].dateISO}/>

      </PostBoard>
    </>
  )
}

export default App
