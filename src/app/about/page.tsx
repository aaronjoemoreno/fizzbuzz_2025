'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors duration-700">
      {/* Background Grid/Scanlines Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%',
        }}
      />

      <motion.div
        animate={{ opacity: 0.6 }}
        className={`absolute inset-0 bg-neutral-900/50 blur-[120px] transition-colors duration-700`}
      />

      <div className="z-10 w-full max-w-3xl flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex w-1/6">
              <Image
                src="/fizzbuzz-can.png"
                alt="FizzBuzz Can"
                className="w-50 h-auto mb-4 drop-shadow-lg"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/fizzbuzz-main.png"
                alt="FizzBuzz Logo"
                className="w-full max-w-md h-auto drop-shadow-lg"
                width={500}
                height={300}
              />{' '}
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter">
            About FizzBuzz
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            FizzBuzz is a revolutionary beverage designed for developers,
            creators, and deep thinkers. Our two distinct formulas,{' '}
            <span className="text-red-400 font-bold">Fizz</span> and{' '}
            <span className="text-blue-400 font-bold">Buzz</span>, are crafted
            to enhance your mental state, whether you're diving into a complex
            project or winding down after a long day of coding.
          </p>
          <p className="text-lg opacity-80 max-w-2xl">
            We believe in the power of focus and relaxation to unlock peak
            performance and creativity. That's why we're dedicated to sourcing
            the highest quality ingredients to create a drink that not only
            tastes great but also supports your cognitive function.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center bg-neutral-800/50 hover:bg-neutral-700/50 text-white px-6 py-3 rounded-md font-bold transition-all border border-neutral-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Terminal
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
