//App.jsx
import './App.css';
import Post from './components/Post';


function App() {
  return (
    <main>
      <Post author='Steve' body='React gets confusing'/>
      <Post author='Joseph' body='I like dinosaurs'/>
    </main>
  );
}

export default App;
