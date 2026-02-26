import HeroSection from './components/HeroSection'
import TextSubmissionForm from './components/TextSubmissionForm'
import SearchForm from './components/SearchForm'
import SearchResultsList from './components/SearchResultsList'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
    const [results, setResults] = useState([])

    const handleSubmit = (text) => {
        // Simulate submission and search for similar
        const mockResults = [
            { snippet: `Similar to your thought: ${text.substring(0, 20)}...` },
            { snippet: 'Another similar idea from the vault.' },
            { snippet: 'A thought that resonates.' },
        ]
        setResults(mockResults)
    }

    const handleSearch = (query) => {
        // Simulate search
        const mockResults = [
            { snippet: `Results for: ${query.substring(0, 20)}...` },
            { snippet: 'Matching idea 1.' },
            { snippet: 'Matching idea 2.' },
        ]
        setResults(mockResults)
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <HeroSection />
            <TextSubmissionForm onSubmit={handleSubmit} />
            <SearchForm onSearch={handleSearch} />
            {results.length > 0 && <SearchResultsList results={results} />}
            <Footer />
        </div>
    )
}

export default App