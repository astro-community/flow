export type Props<T> = 'of' extends keyof T
	? T['of'] extends (string | number | bigint | boolean | symbol | null | undefined)
		? {
			of: T
		}
	: T['of'] extends ((value: unknown) => boolean)
		? {
			of: T
		}
	: T['of'] extends object
		? {
			of: T
		}
	: never
: 'default' extends keyof T
	? {
		default: "" | true
	}
: any

export default function Case<T>(props: Props<T>): any
