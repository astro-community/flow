/** Iterates the given object and returns the value of the given function using each value. */

import { HasForEachMethod } from "./shared";

type GetAppropriateFunction<T> = T extends HasForEachMethod
	? Parameters<T["forEach"]>[0] : T extends Generator
	? <U>(value: ReturnType<T["next"]>["value"])=> U : <V>(value:unknown)=> V

export function iterate<T extends Iterable<unknown>, U extends GetAppropriateFunction<T> >(
	iterable: T,
	render?: U
): AsyncGenerator<any, void, any>
