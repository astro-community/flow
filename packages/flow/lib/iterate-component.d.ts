/** Iterates the given object and returns the value of the given function using each value. */
export function Iterate<T>(props: Props<T>): any

type Props<T extends Record<string, any>> = {
	[K in keyof T]: K extends 'children'
		? {
			(entry: any): any
		}
	: T[K]
} & {
	children?: {
		(item: IterableValue<T[Exclude<keyof T, 'children'>]>): any
	}
}

type IterableValue<T> = (
	number extends keyof T
		? T[number]
	: typeof Symbol.asyncIterator extends keyof T
		? IterableReturnType<T[typeof Symbol.asyncIterator]>
	: typeof Symbol.iterator extends keyof T
		? IterableReturnType<T[typeof Symbol.iterator]>
	: never
)

type IterableReturnType<T> = (
	T extends (() => Generator<infer P, void, unknown>)
		? P
	: never
)
