import { HasForEachMethod } from './types';

function isIterable<T>(value: unknown): value is Iterable<T> | AsyncIterable<T> {
	return (
		value != null &&
		(typeof value[Symbol.iterator] === 'function' ||
			typeof value[Symbol.asyncIterator] === 'function')
	);
}

const GeneratorFunction = (function * () {}).constructor

const AsyncGeneratorFunction = (async function * () {}).constructor


const isGenerator = (value:unknown):value is GeneratorFunction => value instanceof GeneratorFunction
const isAsyncGenerator = (value:unknown):value is AsyncGeneratorFunction => value instanceof AsyncGeneratorFunction



const mapArgsFromIterableWithForEachMethodToArray = (iterable: HasForEachMethod) => {
	const arrayOfArgs = [];

	iterable.forEach((...args) => {
		arrayOfArgs.push(args);
	});

	return arrayOfArgs;
};

const wrapFunctionWithAsyncGenerator = (cb: (...args: Array<unknown>) => unknown) =>
	async function* (...args: Array<unknown>) {
		yield await cb(...args);
	};



export { isIterable, wrapFunctionWithAsyncGenerator, mapArgsFromIterableWithForEachMethodToArray, isGenerator, isAsyncGenerator };
