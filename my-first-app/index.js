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
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })

  app.on('pull_request.assigned', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })

  app.on('pull_request.closed', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })
  app.on('pull_request.edited', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })
  app.on('pull_request.labeled', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })
  app.on('pull_request.reopened', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })
  app.on('pull_request.review_request_removed', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })
  app.on('pull_request.synchronize', async context => {
    const bruh = context.pull_request({ body: 'test1' })
    //return context.github.pull_request.createComment(bruh)
    return context.github.pull_request.createComment(bruh)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
