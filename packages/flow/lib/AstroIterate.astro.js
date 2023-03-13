import {
	entries,
	getNormalizedGenerator,
	isIterable,
} from './shared.js'

export default Object.assign(
	function Iterate(_result, { of }, slots) {
		const promiseOfGenerator = Promise.resolve(
			typeof slots.default === 'function'
				? slots.default()
				: slots.default
		).then(
			result => result.expressions.at(0)
		).then(getNormalizedGenerator, getNormalizedGenerator)

		return {
			[Symbol.toStringTag]: 'AstroComponent',

			async *[Symbol.asyncIterator]() {
				const generator = await promiseOfGenerator

				if (isIterable(of)) {
					let index = -1

					for await (const value of of) {
						yield * generator(value, ++index)
					}
				} else if (typeof of === 'object' && of !== null) {
					for (const [ name, value ] of entries(of)) {
						yield * generator(value, name)
					}
				}
			},
		}
	},
	{
		isAstroComponentFactory: true,
	}
)
