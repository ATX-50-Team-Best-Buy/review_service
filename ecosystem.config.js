module.exports = {
  apps: [{
    name: 'Review_Service',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-189-114.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FEC-BestBuy-RW.pem',
      ref: 'origin/master',
      repo: 'https://github.com/ATX-50-Team-Best-Buy/review_service.git',
      path: '/home/ubuntu/review-service',
      'post-deploy': 'npm install && cd client && npm install && npm run build && cd .. && pm2 startOrRestart ecosystem.config.js'
    }
  }
}