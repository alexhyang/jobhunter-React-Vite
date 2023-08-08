import { useState, useEffect } from 'react';
import axios from 'axios';
import { IPostingGet } from '@/interfaces';

import NotesTable from './NotesTable';

export default function Notes() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IPostingGet[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/summaries/notes`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setError('Error when fetching notes');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      {loading && <p>Loading...</p>}
      {data && <NotesTable data={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
