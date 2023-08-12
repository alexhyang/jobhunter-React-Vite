import { IPostingGet } from '@/interfaces';

export default function PostingCard(props: { data: IPostingGet }) {
  const { data } = props;
  return (
    <article>
      <header className="mb-3">
        <h2 className="text-2xl font-bold">
          {data.jobTitle}{' '}
          <span>
            <a
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
              href={data.postingUrl}
            >
              link
            </a>
          </span>
        </h2>
        <p>
          {data.jobLevel} ({data.jobType}) @ {data.company} - {data.location}
        </p>
        <p>{`Due Date: ${data.applicationDueDate.slice(0, 10)}`}</p>
      </header>
      <section>
        <div className="mb-3">
          <h4 className="text-lg font-bold">Skills</h4>
          <p>{data.skills.join(', ')}</p>
        </div>
        <div className="mb-3">
          <h4 className="text-lg font-bold">Responsibilities</h4>
          <ul className="pl-4">
            {data.responsibilities.map((elem) => (
              <li className="list-disc pl-3" key={elem}>
                {elem}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="text-lg font-bold">Qualifications</h4>
          <ul className="pl-5">
            {data.qualifications.map((elem) => (
              <li className="list-disc pl-3" key={elem}>
                {elem}
              </li>
            ))}
          </ul>
        </div>
        {data.other && (
          <>
            <h4 className="text-lg font-bold">Notes</h4>
            <p>{data.other}</p>
          </>
        )}
      </section>
    </article>
  );
}
