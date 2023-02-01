import {
	mapArgsFromIterableWithForEachMethodToArray,
	wrapFunctionWithAsyncGenerator,
} from './shared';
import { HasForEachMethod } from './types';

async function* iterate<T extends HasForEachMethod>(
	iterable: T,
	callbackfn: Parameters<T['forEach']>[0]
) {
	for await (const args of mapArgsFromIterableWithForEachMethodToArray(iterable)) {
		yield* wrapFunctionWithAsyncGenerator(callbackfn)(...args);
	}
}

export { iterate };
