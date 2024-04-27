import * as RuntimeEdge from '@runtime-edge/primitives'
import { buildToFetchEvent } from '../../src'

const toFetchEvent = buildToFetchEvent({
  Headers: RuntimeEdge.Headers,
  ReadableStream: RuntimeEdge.ReadableStream,
  Request: RuntimeEdge.Request,
  Uint8Array: Uint8Array,
  FetchEvent: RuntimeEdge.FetchEvent,
})

it('returns a fetch event with a request', () => {
  const request = new RuntimeEdge.Request('https://vercel.com')
  const event = toFetchEvent(request)
  expect(event).toBeInstanceOf(RuntimeEdge.FetchEvent)
  expect(event.request).toBe(request)
})

it('interacts with waitUntil', async () => {
  const request = new RuntimeEdge.Request('https://vercel.com')
  const event = toFetchEvent(request)
  let duration = Date.now()
  event.waitUntil(new Promise((resolve) => setTimeout(resolve, 1000)))
  await Promise.all(event.awaiting)
  duration = Date.now() - duration
  expect(duration).toBeGreaterThanOrEqual(1000)
})
