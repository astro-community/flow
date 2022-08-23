import { isIterable, getNormalizedGenerator } from './shared.js'

/** @type {import('./iterate.d').iterate} */
export const iterate = async function * (iteratable, generator) {
	const normalizedGenerator = getNormalizedGenerator(generator)

	if (isIterable(iteratable)) {
		for await (const iteration of iteratable) {
			yield * normalizedGenerator(iteration)
		}
	}
}

export default iterate
