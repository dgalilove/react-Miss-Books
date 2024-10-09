const { useState } = React
import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { Home } from "./pages/Home.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"



export function App() {
    const [page, setPage] = useState('home')


    return (
        <section className="app">
            <AppHeader onSetPage={(page) => setPage(page)} />
            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'books' && <BookIndex />}
            </main>
        </section>
    )
}