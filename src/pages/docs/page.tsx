function Docs() {
    return (
        <section className="page">
            <h1>Documentation</h1>
            <p className="lead">Everything you need to install, write, test, and ship Meow Lang programs.</p>

            <section className="grid three">
                <article className="card">
                    <h2>Quick Start</h2>
                    <p>Install CLI, create your first file, and run in under 2 minutes.</p>
                </article>
                <article className="card">
                    <h2>Language Guide</h2>
                    <p>Syntax, type system, modules, control flow, and standard patterns.</p>
                </article>
                <article className="card">
                    <h2>CLI Reference</h2>
                    <p>All commands, flags, examples, and troubleshooting tips.</p>
                </article>
            </section>

            <article className="card">
                <h2>Starter snippet</h2>
                <pre>
{`fn main() {
    say("meow world")
}`}
                </pre>
            </article>
        </section>
    )
}

export default Docs