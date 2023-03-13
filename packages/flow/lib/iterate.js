import {
	entries,
	getNormalizedGenerator,
	isIterable,
} from './shared.js'

export const iterate = /** @type {import('./iterate.d').iterate} */ (
	async function* (iterable, generator) {
		const normalizedGenerator = getNormalizedGenerator(generator)

		if (isIterable(iterable)) {
			let index = -1

			for await (const value of iterable) {
				yield * normalizedGenerator(value, ++index)
			}
		} else if (typeof iterable === 'object' && iterable !== null) {
			for (const [ name, value ] of entries(iterable)) {
				yield * normalizedGenerator(value, name)
			}
		}
	}
)

export default iterate
