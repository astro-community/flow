import { getNormalizedGenerator, isIterable } from './shared.js'

/** @type {import('./iterate-component').Iterate} */
export const Iterate = Object.assign(
	function Iterate(_result, attributes, slots) {
		const render = Promise.resolve(slots.default?.()).then(
			(result) => result.expressions.at(0),
			() => null
		)

		return {
			get [Symbol.toStringTag]() {
				return 'AstroComponent'
			},
			async *[Symbol.asyncIterator]() {
				const normalizedGenerator = getNormalizedGenerator(await render)

				for (const iterable of Object.values(attributes)) {
					if (isIterable(iterable)) {
						for await (const iteration of iterable) {
							yield * normalizedGenerator(iteration)
						}
					}
				}
			},
		}
	},
	{
		isAstroComponentFactory: true
	}
)

export default Iterate
