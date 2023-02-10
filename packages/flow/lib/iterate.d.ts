/** Iterates the given object and returns the value of the given function using each value. */

import { GetAppropriateFunctionBasedOnWhetherOrNotAGeneratorOfAnIterableWithTheForEachMethodIsPassed, } from "./shared";


export function iterate<T extends Iterable<unknown>, U extends GetAppropriateFunctionBasedOnWhetherOrNotAGeneratorOfAnIterableWithTheForEachMethodIsPassed<T> >(
	iterable: T,
	render?: U
): AsyncGenerator<any, void, any>
