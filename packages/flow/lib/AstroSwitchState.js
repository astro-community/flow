// @ts-check

/** Returns the current shared state of the switch. */
export function getSwitchState() {
	return /** @type {Switch} */ (statesOfSwitch.at(-1))
}

/** Symbol used to share data between AstroSwitch and AstroCase. */
const symbol = Symbol.for('astro-switch')

/** @type {Switch[]} Array of shared state to manage AstroSwitch and AstroCase. */
export const statesOfSwitch = globalThis[symbol] = globalThis[symbol] || []

/** @typedef {{ value: any, hasRenderedCase: boolean, hasRenderedDefault: boolean }} Switch */
/** @typedef {{ value: any, hasRenderedCase: boolean, hasRenderedDefault: boolean }} When */
