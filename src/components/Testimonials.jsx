const testimonials = [
  {
    content: 'Seeon 的解决方案彻底改变了我们的工作流程。界面简洁直观，功能却异常强大，团队效率提升了 300%。',
    author: '张明',
    role: 'CEO',
    company: '科技创新公司',
    avatar: 'Z',
  },
  {
    content: '我们对比了市面上所有的产品，Seeon 是唯一能够满足我们所有需求的平台。技术支持响应速度极快。',
    author: '李华',
    role: 'CTO',
    company: '数字传媒集团',
    avatar: 'L',
  },
  {
    content: '从部署到上线只用了三天时间，这在以前是不可想象的。Seeon 真正做到了开箱即用。',
    author: '王芳',
    role: '产品总监',
    company: '互联网金融公司',
    avatar: 'W',
  },
]

import AnimateOnScroll from './AnimateOnScroll'

export default function Testimonials() {
  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-primary)] mb-4">
              客户评价
            </h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
              来自各行业领先企业的真实反馈
            </p>
          </div>
        </AnimateOnScroll>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.15}>
              <div className="p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] h-full">
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-[var(--color-accent)] mb-6 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Content */}
                <p className="text-[var(--color-secondary)] mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-primary)]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[var(--color-text)]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}