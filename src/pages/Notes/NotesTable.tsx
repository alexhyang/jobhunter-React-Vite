import { IPostingGet } from '@/interfaces';

export default function NotesTable(props: { data: IPostingGet[] }) {
  const { data } = props;
  return (
    <table className="table-auto w-full border-collapse">
      <thead className="border border-transparent border-b-black">
        <tr>
          <th className="p-2">Title</th>
          <th className="p-2">Level</th>
          <th className="p-2">Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((posting) => (
          <tr key={posting._id}>
            <td className="p-2">
              <a href={posting._id}>{posting.jobTitle}</a>
            </td>
            <td className="p-2">{posting.jobLevel}</td>
            <td className="p-2">{posting.other}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
