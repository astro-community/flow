/** Returns whether the given value is iteratble. */
export function isIterable<T>(value: T): T extends Iterable<T> ? true : false

/** Returns the given value as a normalized generator. */
export function getNormalizedGenerator<T>(value: T): (
	<T>(value: T) => AsyncGenerator<string, void, void>
)


export type HasForEachMethod = {
	forEach(callbackfn: (...args:Array<any>) => void, thisArg?: any): void;
}

export function hasForEachMethod(value:unknown): value is HasForEachMethod

export function isGenerator(value:unknown): value is GeneratorFunction | AsyncGeneratorFunction
