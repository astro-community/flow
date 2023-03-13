// @ts-check

const GeneratorFunctionConstructor = /** @type {GeneratorFunctionConstructor} */ (function* () {}.constructor)

const AsyncGeneratorFunctionConstructor = /** @type {AsyncGeneratorFunctionConstructor} */ (async function* () {}.constructor)

export const isIterable = /** @type {import('./shared.d').isIterable} */ (
	(value) => value != null &&
	(
		typeof value[Symbol.iterator] === 'function' ||
		typeof value[Symbol.asyncIterator] === 'function'
	)
)

export const { entries } = Object

export const isGenerator = /** @type {import('./shared.d').isGenerator} */ (
	(value) =>
		value instanceof GeneratorFunctionConstructor ||
		value instanceof AsyncGeneratorFunctionConstructor
)

export const getNormalizedGenerator = /** @type {import('./shared.d').getNormalizedGenerator} */ (
	(fn) =>
		typeof fn !== 'function'
			? async function* (value) {
				yield await value
			}
		: isGenerator(fn)
			? fn
		: async function* (...value) {
			yield await fn(...value)
		}
)
