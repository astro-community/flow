import { getNormalizedGenerator, isIterable } from './shared.js'

export default Object.assign(
	function Iterate(_result, attributes, slots) {
		const promiseOfGenerator = Promise.resolve(
			typeof slots.default === 'function'
				? slots.default()
			: slots.default
		).then(
			(result) => result.expressions.at(0)
		).then(
			(result) => getNormalizedGenerator(result),
			() => null
		)

		const iterables = Object.values(attributes)

		return {
			[Symbol.toStringTag]: 'AstroComponent',

			async *[Symbol.asyncIterator]() {
				const generator = await promiseOfGenerator

				for (const iterable of iterables) {
					if (isIterable(iterable)) {
						for await (const element of iterable) {
							yield * generator(element)
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
