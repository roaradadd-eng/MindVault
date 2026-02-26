import { motion } from 'framer-motion'

const SearchResultsList = ({ results }) => {
    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Similar Ideas</h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {results.map((result, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    >
                        <p className="text-white">{result.snippet}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default SearchResultsList