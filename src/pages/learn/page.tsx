function LearnPage() {
  return (
    <section className="page">
      <h1>Learn Meow Lang</h1>
      <p className="lead">A step-by-step path from zero to your first real project.</p>

      <section className="grid three">
        <article className="card">
          <h2>01 Basics</h2>
          <p>Variables, functions, and values with tiny, readable examples.</p>
        </article>
        <article className="card">
          <h2>02 Building Blocks</h2>
          <p>Collections, loops, modules, and patterns used in real apps.</p>
        </article>
        <article className="card">
          <h2>03 Project Track</h2>
          <p>Build and ship a small app while learning idiomatic Meow.</p>
        </article>
      </section>
    </section>
  )
}

export default LearnPage
