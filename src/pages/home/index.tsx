import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <section className="page home-page">
            <p className="eyebrow">A language that stays out of your way</p>
            <h1>Build calm software with Meow Lang.</h1>
            <p className="lead">
                Meow Lang is designed for readable syntax, predictable behavior, and joyful learning.
                Black-and-white simplicity in code and in philosophy.
            </p>

            <div className="button-row">
                <Link className="btn solid" to="/docs">Read Docs</Link>
                <Link className="btn ghost" to="/learn">Start Learning</Link>
            </div>

            <section className="grid two">
                <article className="card">
                    <h2>Why Meow?</h2>
                    <p>Small core, expressive tools, and straightforward error messages.</p>
                </article>
                <article className="card">
                    <h2>Who is it for?</h2>
                    <p>New learners, rapid prototypes, and teams that value clean code.</p>
                </article>
            </section>
        </section>
    )
}

export default HomePage