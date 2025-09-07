import './App.css'
import Post from './components/Post'
import postData from "./assets/postData.json"
import PostBoard from './components/PostBoard'
import Header from './components/application-layout/Header'
import Title from './components/application-layout/Title'
import Logo from './components/Logo'

function App() {

  return (
    <>
    <Header>
        <Title text="Linkodkod -  Connected at the top" />
        <Logo/>
    </Header>

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
