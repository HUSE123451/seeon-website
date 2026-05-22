import { useEffect, useRef, useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 99.9, suffix: '%', label: '服务可用性' },
  { value: 50, suffix: 'ms', label: '平均响应时间' },
  { value: 10, suffix: 'M+', label: '活跃用户' },
  { value: 500, suffix: '+', label: '企业客户' },
]

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-semibold text-[var(--color-primary)] mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[var(--color-text)] text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}