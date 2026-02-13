
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Footer from './component/Footer'

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />

      <main className="content">
        <section id="features" className="card-grid">
          <article className="card">
            <h3>Fast Setup</h3>
            <p>Go from idea to published page with simple blocks and clean templates.</p>
          </article>
          <article className="card">
            <h3>Responsive Design</h3>
            <p>Looks great on desktop, tablet, and mobile without extra configuration.</p>
          </article>
          <article className="card">
            <h3>Actionable Analytics</h3>
            <p>Track conversions and understand what content performs best.</p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
