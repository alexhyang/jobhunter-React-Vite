import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import baseURL from '../../env';

import { IPostingGet } from '../../interfaces';
import PostingCard from './PostingCard';

export default function Posting() {
  const { id } = useParams<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IPostingGet>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    axios
      .get(`${baseURL}/api/postings/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setError('Error when fetching posting');
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && <PostingCard data={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
