import { useState } from 'react'
import { motion } from 'framer-motion'

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim()) {
            onSearch(query)
        }
    }

    return (
        <section className="py-8 px-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Search for Similar Ideas</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <motion.textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter a thought to find similar ideas..."
                    className="w-full h-24 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-accent-gold to-accent-teal text-white font-semibold rounded-lg hover:from-accent-gold/80 hover:to-accent-teal/80 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Search
                </motion.button>
            </form>
        </section>
    )
}

export default SearchForm