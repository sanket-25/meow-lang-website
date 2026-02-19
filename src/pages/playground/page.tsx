function PlaygroundPage() {
  return (
    <section className="page">
      <h1>Playground</h1>
      <p className="lead">Prototype code in the browser. Backend wiring can be added later.</p>

      <article className="card">
        <h2>Editor Preview</h2>
        <div className="playground-shell" aria-label="Playground preview">
          <div className="playground-pane">
            <p className="pane-title">Input</p>
            <pre>
{`fn greet(name) {
  say("meow, " + name)
}

greet("developer")`}
            </pre>
          </div>
          <div className="playground-pane">
            <p className="pane-title">Output</p>
            <pre>{`meow, developer`}</pre>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PlaygroundPage
