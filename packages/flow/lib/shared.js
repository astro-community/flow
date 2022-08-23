/** @type {import('./shared.d').isIterable} */
export const isIterable = (value) => (
	value != null &&
	(
		typeof value[Symbol.iterator] === 'function' ||
		typeof value[Symbol.asyncIterator] === 'function'
	)
)

/** @type {GeneratorFunctionConstructor} */
const GeneratorFunction = (function * () {}).constructor

/** @type {AsyncGeneratorFunctionConstructor} */
const AsyncGeneratorFunction = (async function * () {}).constructor

/** @type {import('./shared.d').getNormalizedGenerator} */
export const getNormalizedGenerator = (fn) => (
	typeof fn !== 'function'
		? async function * (value) {
			yield await value
		}
	: (
		fn instanceof GeneratorFunction ||
		fn instanceof AsyncGeneratorFunction
	)
		? fn
	: async function * (value) {
		yield await fn(await value)
	}
)
