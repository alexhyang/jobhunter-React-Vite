import { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../env';
import { Skill } from './interfaces';

import WordCloud from './WordCloud';
import './skills.css';

export default function Skills() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Skill[]>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    axios
      .get(`${baseURL}/api/summaries/skills/count?sort=-count&limit=30`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setError('Error when fetching skills');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Skills</h1>
      {loading && <p>Loading...</p>}
      {data && <WordCloud data={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
