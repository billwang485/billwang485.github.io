const { google } = require('googleapis');
const analyticsReporting = google.analyticsreporting('v4');

async function getWeeklyStats() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/analytics.readonly']
  });

  const result = await analyticsReporting.reports.batchGet({
    auth,
    requestBody: {
      reportRequests: [{
        viewId: process.env.GA_VIEW_ID,
        dateRanges: [{
          startDate: '7daysAgo',
          endDate: 'today'
        }],
        metrics: [
          { expression: 'ga:users' },
          { expression: 'ga:pageviews' },
          { expression: 'ga:avgSessionDuration' }
        ]
      }]
    }
  });

  return result.data;
}

module.exports = { getWeeklyStats };
