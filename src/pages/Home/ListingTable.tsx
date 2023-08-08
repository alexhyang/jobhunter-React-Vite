import { Link } from 'react-router-dom';
import { IPostingGet } from '@/interfaces';

export default function ListingTable(props: { data: IPostingGet[] }) {
  const { data } = props;
  return (
    <table className="table-auto w-full border-collapse">
      <thead className="border border-transparent border-b-black">
        <tr>
          <th className="p-2">Title</th>
          <th className="p-2">Level</th>
          <th className="p-2">Company</th>
          <th className="p-2">Location</th>
          <th className="p-2">Due Date</th>
          <th className="p-2">Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((posting: IPostingGet) => (
          <tr key={posting._id}>
            <td className="text-center p-2">
              <Link to={`/postings/${posting._id}`}>{posting.jobTitle}</Link>
            </td>
            <td className="text-center p-2">{posting.jobLevel}</td>
            <td className="text-center p-2">{posting.company}</td>
            <td className="text-center p-2">{posting.location}</td>
            <td className="text-center p-2">
              {posting.applicationDueDate.slice(0, 10)}
            </td>
            <td className="text-center p-2">{posting.other ? 'YES' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
