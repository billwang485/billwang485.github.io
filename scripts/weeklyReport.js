const nodemailer = require('nodemailer');
const { getWeeklyStats } = require('./analytics');

async function sendWeeklyReport() {
  const stats = await getWeeklyStats();
  const report = generateReport(stats);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'wangbr145@gmail.com',
    subject: '网站周访问统计报告',
    html: report
  });
}

function generateReport(stats) {
  const data = stats.reports[0].data;
  return `
    <h2>本周网站访问统计</h2>
    <p>访问用户数：${data.totals[0].values[0]}</p>
    <p>页面浏览量：${data.totals[0].values[1]}</p>
    <p>平均会话时长：${Math.round(data.totals[0].values[2])}秒</p>
  `;
}

module.exports = { sendWeeklyReport };
