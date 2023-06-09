const gulp = require('gulp')
const { Service, project } = require('@wasm/studio-utils')

gulp.task("build", async () => {
  const data = await Service.assembleWat(project.getFile("src/main.wat").getData())
  const outWasm = project.newFile("out/main.wasm", "wasm", true)
  outWasm.setData(data)
})

gulp.task("default", ['build'], async () => {})

