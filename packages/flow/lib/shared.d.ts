/** Returns whether the given value is iteratble. */
export function isIterable<T>(value: T): value is NonNullable<T> & Iterable<T>

/** Returns the given value as a normalized generator. */
export function getNormalizedGenerator<T>(fn: YieldType<T>): (value: T, index: number | string) => AsyncGenerator<Awaited<T>, void, unknown>

export function isGenerator(fn: any): fn is GeneratorFunction | AsyncGeneratorFunction

export type IterableOrRecordCallback<T> = FunctionType<
	T extends Iterable<infer U>
		? (value: U, index: number) => unknown
	: T extends AsyncGenerator<infer U, unknown, unknown>
		? (value: U, index: number) => unknown
	: T extends Generator<infer U, unknown, unknown>
		? (value: U, index: number) => unknown
	: T extends Entriable<infer U, infer K>
		? (value: U, index: Extract<K, string>) => unknown
	: (value: unknown, index: number) => unknown
>

export type Entriable<T, K extends keyof any = keyof any> = {
	[P in K]: T
}

export type IterableOrRecord<T> = Iterable<T> | Entriable<T>

export type YieldType<T> = T extends Generator<infer P, unknown, unknown> ? P : T extends AsyncGenerator<infer P, unknown, unknown> ? P : any

export type FunctionType<T extends (...args: any) => unknown> = T extends (...args: infer A) => infer R ? (...args: A) => R : any
