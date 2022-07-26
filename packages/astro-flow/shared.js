// @ts-check

/** Symbol used to share data between AstroSwitch and AstroCase. */
const $$switch = Symbol.for('astro-switch')

/** @type {Switch[]} Array of shared state to manage AstroSwitch and AstroCase. */
export const statesOfSwitch = globalThis[$$switch] = globalThis[$$switch] || []

export function getSwitchState() {
	return /** @type {Switch} */ (statesOfSwitch.at(-1))
}

/** @typedef {{ value: any, hasRenderedCase: boolean, hasRenderedDefault: boolean }} Switch */

/** @typedef {{ value: any, hasRenderedCase: boolean, hasRenderedDefault: boolean }} When */
