import { IPostingGet } from '@/interfaces';

export default function PostingCard(props: { data: IPostingGet }) {
  const { data } = props;
  return (
    <article>
      <header>
        <h2>
          {data.jobTitle}{' '}
          <span>
            <a target="_blank" rel="noopener noreferrer" href={data.postingUrl}>
              link
            </a>
          </span>
        </h2>
        <p>
          {data.company} -{data.location}
        </p>
      </header>
      <section>
        <div>
          <p>
            Job Level:
            {data.jobLevel}
          </p>
          <p>
            Job Type:
            {data.jobType}
          </p>
          <p>{`Due Date: ${data.applicationDueDate.slice(0, 10)}`}</p>
        </div>
        <div>
          <h4>Responsibilities</h4>
          <ul>
            {data.responsibilities.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          <h4>Qualifications</h4>
          <ul>
            {data.qualifications.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          <h4>Skills</h4>
          <ul>
            {data.skills.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          {data.other && (
            <>
              <h4>Notes</h4>
              <p>{data.other}</p>
            </>
          )}
        </div>
      </section>
    </article>
  );
}
