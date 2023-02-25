export default function Project({ project }) {
  return (
    <div className="row">
      {project.map((p) => (

        <div className="card col-3 m-1" key={p.name}>
          <div className="card-title">
            <h3>{p.name}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">{p.description}</p>
            <div className="card-stack row">
              {p.stack.map((s) => (
                <div className="project-stack col" key={s}>
                  <p>{s}</p>
                </div>
              ))}
            </div>
            <a href={p.livePreview}>Live</a>
            <a href={p.sourceCode}>Repo</a>
          </div>
        </div>
      ))}
    </div>
  );
}