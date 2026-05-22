import AnimateOnScroll from './AnimateOnScroll'

const plans = [
  {
    name: '基础版',
    price: '免费',
    period: '',
    description: '适合个人项目和小型团队试用',
    features: [
      '最多 3 个项目',
      '基础分析功能',
      '社区支持',
      '1GB 存储空间',
      'API 访问',
    ],
    cta: '免费开始',
    highlight: false,
  },
  {
    name: '专业版',
    price: '¥299',
    period: '/月',
    description: '适合成长中的企业，解锁全部核心功能',
    features: [
      '无限项目',
      '高级数据分析',
      '优先技术支持',
      '50GB 存储空间',
      '自定义域名',
      '团队协作',
    ],
    cta: '立即升级',
    highlight: true,
  },
  {
    name: '企业版',
    price: '定制',
    period: '',
    description: '为大型企业量身定制，享受专属服务',
    features: [
      '一切专业版功能',
      '无限存储空间',
      '专属客户经理',
      'SLA 保障',
      '私有化部署',
      '定制开发',
    ],
    cta: '联系我们',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-primary)] mb-4">
              简单透明的定价
            </h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
              选择适合您的方案，随时升级或降级
            </p>
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimateOnScroll key={plan.name} delay={index * 0.1}>
              <div
                className={`relative p-8 rounded-2xl border h-full flex flex-col ${
                  plan.highlight
                    ? 'border-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/10'
                    : 'border-[var(--color-border)]'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)] text-white">
                    最受欢迎
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-semibold text-[var(--color-primary)]">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[var(--color-text)]">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text)]">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[var(--color-secondary)]">
                      <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full transition-all ${
                    plan.highlight
                      ? 'bg-[var(--color-accent)] text-white hover:opacity-90'
                      : 'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
