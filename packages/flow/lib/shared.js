/** @type {import('./shared.d').isIterable} */
export const isIterable = (value) =>
	value != null &&
	(typeof value[Symbol.iterator] === 'function' ||
		typeof value[Symbol.asyncIterator] === 'function')

/** @type {GeneratorFunctionConstructor} */
const GeneratorFunction = function* () {}.constructor

/** @type {AsyncGeneratorFunctionConstructor} */
const AsyncGeneratorFunction = async function* () {}.constructor

/** @type {import('./shared.d').isGenerator} */
const isGenerator = (value) =>
	value instanceof GeneratorFunction ||
	value instanceof AsyncGeneratorFunction

/** @type {import('./shared.d').getNormalizedGenerator} */
export const getNormalizedGenerator = (fn) =>
	typeof fn !== 'function'
		? async function* (value) {
				yield await value
		  }
		: isGenerator(fn)
		? fn
		: async function* (value) {
				yield await fn(await value)
		  }
/** @type {import('./shared.d').hasForEachMethod} */
export function hasForEachMethod(value) {
	return 'forEach' in value
}
