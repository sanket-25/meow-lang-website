function AboutPage() {
  return (
    <section className="page">
      <h1>About Meow Lang</h1>
      <p className="lead">
        Meow Lang is a personal language project focused on clarity, developer flow, and low mental overhead.
      </p>

      <section className="grid two">
        <article className="card">
          <h2>Design Principles</h2>
          <ul>
            <li>Readable by default</li>
            <li>Simple tooling over complex magic</li>
            <li>Consistent syntax across use-cases</li>
          </ul>
        </article>
        <article className="card">
          <h2>Roadmap</h2>
          <ul>
            <li>Improved package manager</li>
            <li>LSP and formatter support</li>
            <li>WASM compilation target</li>
          </ul>
        </article>
      </section>
    </section>
  )
}

export default AboutPage
