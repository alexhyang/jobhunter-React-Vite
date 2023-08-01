import { IPostingGet } from '../../interfaces';

export default function NotesTable(props: { data: IPostingGet[] }) {
  const { data } = props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Level</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((posting) => (
          <tr key={posting._id}>
            <td>
              <a href={posting._id}>{posting.jobTitle}</a>
            </td>
            <td>{posting.jobLevel}</td>
            <td>{posting.other}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
