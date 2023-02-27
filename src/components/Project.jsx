export default function Project({ project }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {project.map((p) => (
      <div className="col" key={p.name}>
        <div className="card h-100 d-flex align-items-stretch">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.description}</p>
            <div className="card-stack row">
              {p.stack.map((s) => (
                <div className="project-stack col" key={s}>
                  <p>{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <div className="row links">
                <div className="col-6 "><a className="project-link" href={p.sourceCode}>Repo</a></div>
                <div className="col-6 "><a className="project-link" href={p.livePreview}>Live</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
}