import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 z-10"
            >
                Share your thoughts. Explore ideas anonymously.
            </motion.h1>
            {/* Optional background animation */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-3xl"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>
        </section>
    )
}

export default HeroSection