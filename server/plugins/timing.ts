export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    event.context.timing = { start: new Date() }
  })
  nitroApp.hooks.hook('render:html', (htmlContext, { event }) => {
    const renderTime = Date.now() - event.context.timing.start.getTime()
    htmlContext.body.push(`
<script>
const message = "Server-Side-Rendering took ${renderTime}ms";
document.querySelector('#render-time').innerText = message;
</script>
    `)
  })
})
