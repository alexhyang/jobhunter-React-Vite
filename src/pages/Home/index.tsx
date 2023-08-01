import { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../env';

import { IPostingGet } from '../../interfaces';
import ListingTable from './ListingTable';

const fields = [
  'jobTitle',
  'jobLevel',
  'company',
  'location',
  'applicationDueDate',
  'other',
];

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IPostingGet[]>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    axios
      .get(
        `${baseURL}/api/postings?limit=20&sort=-applicationDueDate&fields=${fields.toString()}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setErrorMessage('Error when fetching postings');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Postings</h1>
      {loading && <p>Loading...</p>}
      {data && <ListingTable data={data} />}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
