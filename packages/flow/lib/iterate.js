import {
	isIterable,
	getNormalizedGenerator,
	hasForEachMethod,
} from './shared.js'

/** @type {import('./iterate.d').iterate} */
export const iterate = async function* (iterable, generator) {
	const normalizedGenerator = getNormalizedGenerator(generator)

	if (isIterable(iterable)) {
		if (hasForEachMethod(iterable)) {
			for await (const [key, value] of Object.entries(iterable)) {
				yield* normalizedGenerator(value, key, iterable)
			}
			return
		}

		for await (const iteration of iterable) {
			yield* normalizedGenerator(iteration)
		}
	}
}

export default iterate
