import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateOnScroll from './AnimateOnScroll'

const faqs = [
  {
    question: 'Seeon 支持哪些平台？',
    answer: 'Seeon 支持 Web、iOS、Android 以及桌面端（Windows 和 macOS）。所有平台共享同一套数据，实时同步，确保您在任何设备上都能获得一致的体验。',
  },
  {
    question: '数据安全如何保障？',
    answer: '我们采用银行级别的 AES-256 加密技术，所有数据传输使用 TLS 1.3 协议。数据中心位于中国大陆，符合等保三级认证要求，并提供多地域备份机制。',
  },
  {
    question: '是否支持私有化部署？',
    answer: '企业版支持完全私有化部署，可部署在您自己的服务器或私有云环境中。我们提供完整的部署文档和技术支持，通常 3-5 个工作日即可完成。',
  },
  {
    question: '如何获取技术支持？',
    answer: '基础版用户可通过社区论坛获取帮助。专业版用户享有工作日 9:00-18:00 的在线客服支持。企业版用户拥有专属客户经理和 7x24 小时紧急响应通道。',
  },
  {
    question: '是否提供 API 接口？',
    answer: '是的，我们提供完整的 RESTful API 和 GraphQL 接口，支持 Webhook 回调。详细的 API 文档可在开发者中心获取，所有版本均支持 API 访问。',
  },
  {
    question: '可以随时取消订阅吗？',
    answer: '当然可以。您可以随时在账户设置中取消订阅，取消后当前计费周期内仍可正常使用所有功能。我们不会收取任何取消费用。',
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-[var(--color-primary)] pr-4">
          {faq.question}
        </span>
        <motion.svg
          className="w-5 h-5 text-[var(--color-text)] flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[var(--color-text)] leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-primary)] mb-4">
              常见问题
            </h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
              找到您关心的问题解答
            </p>
          </div>
        </AnimateOnScroll>

        {/* FAQ List */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
