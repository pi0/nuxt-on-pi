import { execSync } from 'node:child_process'

export default cachedEventHandler(() => {
  const temp = getTemp()
  return `Temperature: ${temp}`
})

function getTemp() {
  try {
    const tempInfo = execSync('vcgencmd measure_temp').toString().trim()
    // const tempInfo = "temp=38.1'C"
    return /temp=(\d+\.\d+'C)/.exec(tempInfo)?.[1] || '-'
  } catch {
    return '-'
  }
}
