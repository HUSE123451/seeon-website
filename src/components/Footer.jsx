const footerLinks = {
  产品: ['功能', '定价', '集成', '更新日志', 'API'],
  解决方案: ['企业', 'SaaS', '电子商务', '金融科技', '医疗健康'],
  资源: ['文档', '博客', '帮助中心', '社区', '状态'],
  公司: ['关于我们', '团队', 'Careers', '联系我们', '新闻'],
}

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-[var(--color-border)]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#" className="text-[var(--color-primary)] font-semibold text-lg">
              Seeon
            </a>
            <span className="text-sm text-[var(--color-text)]">
              &copy; 2026 Seeon Inc. 保留所有权利。
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}