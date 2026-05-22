import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = [
    { label: '产品', href: '#products' },
    { label: '解决方案', href: '#solutions' },
    { label: '案例', href: '#cases' },
    { label: '博客', href: '#blog' },
    { label: '关于我们', href: '#about' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[980px] mx-auto px-4 lg:px-0">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <a href="#" className="text-[var(--color-primary)] font-semibold text-xl tracking-tight">
              Seeon
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium rounded-full bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity"
              >
                联系我们
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-[var(--color-secondary)]"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[var(--color-bg)] border-l border-[var(--color-border)] md:hidden"
            >
              <div className="flex flex-col p-8 pt-20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="py-3 text-lg text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors border-b border-[var(--color-border)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity"
                  onClick={() => setMenuOpen(false)}
                >
                  联系我们
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
