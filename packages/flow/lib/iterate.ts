import {
	isAsyncGenerator,
	isGenerator,
	mapArgsFromIterableWithForEachMethodToArray,
	wrapFunctionWithAsyncGenerator,
} from './shared';
import { HasForEachMethod } from './types';


async function* iterate<T extends HasForEachMethod>(
	iterable: T,
	callbackfn: Parameters<T['forEach']>[0] | GeneratorFunction
) {
	for await (const args of mapArgsFromIterableWithForEachMethodToArray(iterable)) {



		if (isGenerator(callbackfn)) {

			yield * callbackfn(...args) 


		}

		else {
			yield* wrapFunctionWithAsyncGenerator(callbackfn)(...args);

		}

	}
}

export { iterate };
