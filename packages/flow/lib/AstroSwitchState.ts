// @ts-check

import { ValueHasRenderedCaseAndDefault } from './types';

/** Returns the current shared state of the switch. */
export function getSwitchState() {
	return statesOfSwitch.at(-1);
}

const symbol = Symbol.for('astro-switch');

const enhancedGlobalThis = Object.assign(globalThis, { [symbol]: [] });

export const statesOfSwitch: Array<ValueHasRenderedCaseAndDefault> = (enhancedGlobalThis[symbol] =
	enhancedGlobalThis[symbol] || []);
