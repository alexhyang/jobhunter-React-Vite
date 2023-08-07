import { Routes, Route } from 'react-router-dom';
import { Nav, Footer } from '@components';
import { Home, Skills, Notes, Posting, NewPosting } from '@pages';

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/postings" element={<NewPosting />} />
          <Route path="/postings/:id" element={<Posting />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
