import AnimateOnScroll from './AnimateOnScroll'

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-12 lg:p-20 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                准备好开始了吗？
              </h2>
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                立即体验 Seeon，让您的业务迈上新台阶。
                免费试用 14 天，无需信用卡。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  免费开始
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors"
                >
                  预约演示
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}