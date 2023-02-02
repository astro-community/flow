import { isIterable, getGenerator } from './shared.js'

/** @type {import('./iterate.d').iterate} */
export async function * iterate(iterable, render) {
	const generator = getGenerator(render)

	if (isIterable(iterable)) {
		for await (const iteration of iterable) {
			yield * generator(iteration)
		}
	}
}
