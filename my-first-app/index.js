/**
 * This is the main entrypoint to your Probot app  https://www.youtube.com/watch?v=2ZIpFytCSVc
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for yeehawing uiko!' })
    return context.github.issues.createComment(issueComment)
  })

  app.on('pull_request.opened', async context => {
    const bruh = context.issue({ body: 'test1' })
    return context.github.issue.createComment(bruh)
    //return context.github.pull_request.createComment(bruh)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
