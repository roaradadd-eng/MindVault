import { useState } from 'react'
import { motion } from 'framer-motion'

const TextSubmissionForm = ({ onSubmit }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim()) {
            onSubmit(text)
            setText('')
            // Show toast or success message
            alert('Thought submitted successfully!')
        }
    }

    return (
        <section className="py-16 px-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Submit Your Thought</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <motion.textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your thought here..."
                    className="w-full h-32 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-teal"
                    whileFocus={{ scale: 1.02 }}
                />
                <p className="text-gray-400 text-sm text-center">Your identity remains private. Your thoughts help discover similar ideas.</p>
                <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-accent-teal to-accent-purple text-white font-semibold rounded-lg hover:from-accent-teal/80 hover:to-accent-purple/80 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Submit
                </motion.button>
            </form>
        </section>
    )
}

export default TextSubmissionForm