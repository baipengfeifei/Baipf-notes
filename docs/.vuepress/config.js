const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Baipf-notes",
  description: 'vdoing博客主题模板',
  base: '/Baipf-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
// vssue 评论插件
plugins: [
  [
    "vuepress-plugin-vssue-global",
    {
      platform: "github",
      title: "[Comment]<%- frontmatter.title %>",
      needComments: true,
      // 其他的 Vssue 配置
      autoCreateIssue: true,
      clientId: "Ov23lizauZ4JbmABzlCV",
      clientSecret: "a09078ef04914c21bbbe796048bf6a21ae932bc9",
      owner: "baipengfei",
      repo: "Baipf-notes",
    },
  ],
],