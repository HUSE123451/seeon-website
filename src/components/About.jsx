import AnimateOnScroll from './AnimateOnScroll'

const team = [
  {
    name: '陈思远',
    role: '创始人 & CEO',
    bio: '连续创业者，前 Google 工程总监，专注于企业级产品设计。',
    avatar: 'C',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    name: '林雨薇',
    role: '首席技术官',
    bio: '15年分布式系统经验，前阿里云核心架构师。',
    avatar: 'L',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: '王浩然',
    role: '产品副总裁',
    bio: '前字节跳动产品负责人，擅长用户增长与产品策略。',
    avatar: 'W',
    gradient: 'from-pink-500 to-red-500',
  },
  {
    name: '赵晓晨',
    role: '设计总监',
    bio: '前 Apple 设计团队成员，专注于极致简约的用户体验。',
    avatar: 'Z',
    gradient: 'from-cyan-500 to-blue-500',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-primary)] mb-4">
              关于我们
            </h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
              我们是一群热爱技术与设计的人，致力于用最简约的方式解决最复杂的问题
            </p>
          </div>
        </AnimateOnScroll>

        {/* Mission */}
        <AnimateOnScroll>
          <div className="mb-20 p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">我们的使命</h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                让每一家企业都能拥有世界级的数字体验。我们相信，好的产品不需要复杂的说明书，
                它应该像呼吸一样自然。
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimateOnScroll key={member.name} delay={index * 0.1}>
              <div className="p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-lg text-center h-full">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-semibold`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-accent)] mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
