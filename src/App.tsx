import { Routes, Route } from 'react-router-dom';
import { Nav, Footer } from '@components';
import { Home, Skills, Notes, Posting, NewPosting } from '@pages';

function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto p-3 lg:p-8 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/postings" element={<NewPosting />} />
          <Route path="/postings/:id" element={<Posting />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
