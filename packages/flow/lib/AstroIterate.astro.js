import {
	getNormalizedGenerator,
	hasForEachMethod,
	isIterable,
} from './shared.js'

export default Object.assign(
	function Iterate(_result, { of: each }, slots) {
		const promiseOfGenerator = Promise.resolve(
			typeof slots.default === 'function'
				? slots.default()
				: slots.default
		)
			.then((result) => result.expressions.at(0))
			.then(
				(result) => getNormalizedGenerator(result),
				() => null
			)

		return {
			[Symbol.toStringTag]: 'AstroComponent',

			async *[Symbol.asyncIterator]() {
				const generator = await promiseOfGenerator

				if (isIterable(each)) {
					if (hasForEachMethod(each)) {
						for await (const [key, value] of Object.entries(each)) {
							yield* generator(value, key, each)
						}
						return
					}
					for await (const value of each) {
						yield* generator(value)
					}
				}
			},
		}
	},
	{
		isAstroComponentFactory: true,
	}
)
