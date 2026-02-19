import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page not-found">
      <h1>404</h1>
      <p className="lead">This page does not exist in the current route map.</p>
      <Link className="btn solid" to="/">Back Home</Link>
    </section>
  )
}

export default NotFoundPage
