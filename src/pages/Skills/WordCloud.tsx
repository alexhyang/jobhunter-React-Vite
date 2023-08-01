import { Skill } from './interfaces';

export default function WordCloud(props: { data: Skill[] }) {
  const { data } = props;
  return (
    <div className="cloud-wrapper">
      <ul
        className="cloud"
        role="navigation"
        aria-label="Webdev tag cloud"
        data-show-value="true"
      >
        {data.map((skill) => {
          const size = Math.log(skill.count) + 1;
          return (
            <li
              key={skill._id}
              data-weight={skill.count > 25 ? `(${skill.count})` : ''}
              style={{ '--size': size } as React.CSSProperties}
            >
              {skill._id}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
