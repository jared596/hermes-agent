import assert from 'node:assert/strict'
import path from 'node:path'
import test from 'node:test'

import { isPathInside, shouldUseActiveRuntime } from './runtime-resolution'

test('active runtime requires both a health probe and an independent completion signal', () => {
  const base = {
    bootstrapComplete: false,
    installMethodPresent: false,
    packagedAppInsideActiveRoot: false,
    runtimeUsable: true
  }

  assert.equal(shouldUseActiveRuntime(base), false, 'an interrupted partial runtime is not trusted')
  assert.equal(shouldUseActiveRuntime({ ...base, bootstrapComplete: true }), true)
  assert.equal(shouldUseActiveRuntime({ ...base, installMethodPresent: true }), true)
  assert.equal(shouldUseActiveRuntime({ ...base, packagedAppInsideActiveRoot: true }), true)
  assert.equal(
    shouldUseActiveRuntime({ ...base, bootstrapComplete: true, runtimeUsable: false }),
    false,
    'a completion signal cannot override a failed runtime probe'
  )
})

test('path containment distinguishes a local packaged build from an installed app', () => {
  const activeRoot = path.join(path.sep, 'Users', 'test', '.hermes', 'hermes-agent')

  assert.equal(isPathInside(path.join(activeRoot, 'apps', 'desktop', 'release', 'Hermes.app'), activeRoot), true)
  assert.equal(isPathInside(path.join(path.sep, 'Applications', 'Hermes.app'), activeRoot), false)
})
