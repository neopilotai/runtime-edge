import type { Request } from '@runtime-edge/primitives'
import { BuildDependencies } from '../types'

export function buildToFetchEvent(dependencies: BuildDependencies) {
  return function toFetchEvent(request: Request) {
    return new dependencies.FetchEvent(request)
  }
}
