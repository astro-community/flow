// @ts-check

/** Symbol used to share data between AstroSwitch and AstroCase. */
const symbol = Symbol.for('astro-switch')

/** @type {Shared[]} Array of shared state to manage AstroSwitch and AstroCase. */
const shared = globalThis[symbol] = globalThis[symbol] || []

export default shared

/** @typedef {{ value: any, hasRenderedCase: boolean, hasRenderedDefault: boolean }} Shared */
