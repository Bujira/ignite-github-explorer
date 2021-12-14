export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? '(no name)'}</strong>
      <p>{props.repository?.description ?? '(no description)'}</p>

      <a href={props.repository?.html_url ?? '#'}>
        Acessar repositório
      </a>
    </li>
  );
}