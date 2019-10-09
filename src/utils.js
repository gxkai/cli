const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs')

const getRepoName = str => {
  const i = str.lastIndexOf('/')
  let result = str.substr(i + 1)
  const dotI = result.lastIndexOf('.')
  return result.substr(0, dotI)
}

const ignoreDir = ['.git']

exports.downloadGit = (target, name) => new Promise((resolve, reject) => {
  const rootPath = path.resolve(process.cwd(), name)

  execSync(`rm -rf ./${name}`)
  try {
    execSync(`mkdir -p ${name}`)
  } catch (e) {
    // exist
  }
  execSync(`git clone ${target}`, { cwd: rootPath })
  const repoName = getRepoName(target)
  fs.readdirSync(path.resolve(rootPath, repoName)).forEach(file => {
    if (!ignoreDir.includes(file)) {
      execSync(`mv ./${file} ../`, { cwd: path.resolve(rootPath, repoName) })
    }
  })
  execSync(`rm -rf ./${name}/${repoName}`)
  resolve()
})
