import { motion } from 'motion/react'
import { ShoppingCart } from 'lucide-react'
import { Toaster, toast } from 'sonner'

function App() {
  return (
    <>
      <Toaster />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="flex min-h-screen items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
              DevStore
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Tu próximo setup
              <span className="block text-slate-400">empieza aquí.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
              Hardware y accesorios para desarrolladores.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-105"
                onClick={() => toast.success('Bienvenido a DevStore')}
              >
                <ShoppingCart size={18} />
                Ver productos
              </button>

              <button
                className="rounded-lg border border-slate-700 px-5 py-3 text-slate-300 transition hover:bg-slate-800"
                onClick={() => toast.info('La tienda estará disponible pronto')}
              >
                Probar notificación
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default App