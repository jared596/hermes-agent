import path from 'node:path'

function isPathInside(candidate: string, root: string) {
  const relative = path.relative(path.resolve(root), path.resolve(candidate))

  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative))
}

function shouldUseActiveRuntime({
  bootstrapComplete,
  installMethodPresent,
  packagedAppInsideActiveRoot,
  runtimeUsable
}: {
  bootstrapComplete: boolean
  installMethodPresent: boolean
  packagedAppInsideActiveRoot: boolean
  runtimeUsable: boolean
}) {
  return runtimeUsable && (bootstrapComplete || installMethodPresent || packagedAppInsideActiveRoot)
}

export { isPathInside, shouldUseActiveRuntime }
