import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '产品', href: '#products' },
    { label: '解决方案', href: '#solutions' },
    { label: '案例', href: '#cases' },
    { label: '博客', href: '#blog' },
    { label: '关于我们', href: '#about' },
  ]

  return (
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
            <button className="md:hidden p-2 text-[var(--color-secondary)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}