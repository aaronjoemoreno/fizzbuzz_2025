'use client'

import { Terminal, ArrowRight, Zap, Coffee } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [mode, setMode] = useState<'fizz' | 'buzz'>('fizz')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  // Theme colors based on mode
  const accentColor = mode === 'fizz' ? 'text-red-400' : 'text-blue-400'
  // const borderColor = mode === 'fizz' ? 'border-red-400' : 'border-blue-400'
  const bgGlow = mode === 'fizz' ? 'bg-red-500/10' : 'bg-blue-500/10'
  const buttonBg =
    mode === 'fizz'
      ? 'bg-red-500 hover:bg-red-600'
      : 'bg-blue-500 hover:bg-blue-600'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'ef074cb2-5b9d-4ba8-bcde-fd58b3576168')

    const object = Object.fromEntries(formData.entries())
    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })

    const data = await response.json()

    if (data.success) {
      router.push('/thank-you')
    } else {
      console.error('Web3Forms error:', data.message || data)
      setSubmitted(false)
    }
  }

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
        className={`absolute inset-0 ${bgGlow} blur-[120px] transition-colors duration-700`}
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
          <h3 className="text-md font-bold tracking-tighter uppercase">
            Focus High || Idle Low
          </h3>
          <p
            className={clsx(
              'text-sm md:text-base opacity-70 flex items-center gap-2',
              mode === 'fizz'
                ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                : 'hover:bg-neutral-800 opacity-50 hover:opacity-100'
            )}
          >
            <span className="animate-pulse">●</span> Drinks Arriving 2026
          </p>
        </motion.div>

        {/* Mode Toggle */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md bg-neutral-900/50 p-1 rounded-lg border border-neutral-800 backdrop-blur-sm">
          <button
            onClick={() => setMode('fizz')}
            className={clsx(
              'flex flex-col items-center justify-center py-4 px-6 rounded-md transition-all duration-300 relative overflow-hidden group',
              mode === 'fizz'
                ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                : 'hover:bg-neutral-800 opacity-50 hover:opacity-100'
            )}
          >
            <Zap className="w-6 h-6 mb-2" />
            <span className="font-bold text-lg">FIZZ</span>
            <span className="text-xs uppercase opacity-70 mt-1">
              Focus / Nootropic
            </span>
            {mode === 'fizz' && (
              <motion.div
                layoutId="active-glow"
                className="absolute inset-0 bg-red-500/5"
              />
            )}
          </button>

          <button
            onClick={() => setMode('buzz')}
            className={clsx(
              'flex flex-col items-center justify-center py-4 px-6 rounded-md transition-all duration-300 relative overflow-hidden group',
              mode === 'buzz'
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                : 'hover:bg-neutral-800 opacity-50 hover:opacity-100'
            )}
          >
            <Coffee className="w-6 h-6 mb-2" />
            <span className="font-bold text-lg">BUZZ</span>
            <span className="text-xs uppercase opacity-70 mt-1">
              Relax / Seltzer
            </span>
            {mode === 'buzz' && (
              <motion.div
                layoutId="active-glow"
                className="absolute inset-0 bg-blue-500/5"
              />
            )}
          </button>
        </div>

        {/* Dynamic Description */}
        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-lg md:text-xl font-medium ${accentColor}`}
            >
              {mode === 'fizz'
                ? '> Initialize deep_work_protocol.exe'
                : '> Execute system_shutdown_relax.sh'}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Email Capture */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="relative group">
            <input
              type="hidden"
              name="access_key"
              value="ef074cb2-5b9d-4ba8-bcde-fd58b3576168"
            />

            <div
              className={`absolute -inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${
                mode === 'fizz' ? 'bg-red-600' : 'bg-blue-600'
              }`}
            ></div>
            <div className="relative flex items-center bg-black rounded-lg border border-neutral-800 p-2">
              <Terminal className="w-5 h-5 ml-3 text-neutral-500" />
              <input
                type="email"
                name="email"
                placeholder="enter email_address..."
                className="w-full bg-transparent border-none focus:ring-0 text-neutral-200 placeholder-neutral-600 ml-3 font-mono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={submitted}
                className={`${buttonBg} text-white px-4 py-2 rounded-md font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {submitted ? 'SAVED' : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
          <div className="mt-4 flex justify-between text-xs text-neutral-600 font-mono">
            <Link href="/about">About</Link>
            <span>[system status: online]</span>
            <span>v1.0.4-beta</span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
