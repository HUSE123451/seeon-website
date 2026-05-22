import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: '电子邮件',
      value: 'contact@seeon.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: '电话',
      value: '+86 400-888-9999',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: '地址',
      value: '北京市朝阳区建国路 88 号 SOHO 现代城',
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-primary)] mb-4">
              联系我们
            </h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
              有任何问题或合作意向，欢迎随时联系我们
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimateOnScroll>
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text)] mb-1">{info.label}</p>
                    <p className="text-[var(--color-primary)] font-medium">{info.value}</p>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6 border-t border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-text)] mb-4">关注我们</p>
                <div className="flex gap-4">
                  {['微信', '微博', 'Twitter', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 text-sm rounded-full border border-[var(--color-border)] text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-[var(--color-border)]">
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">姓名</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">邮箱</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">消息</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="请输入您想说的..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity"
              >
                {submitted ? '已发送 ✓' : '发送消息'}
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
