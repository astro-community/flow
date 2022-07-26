export function For<T>(props: ForProps<T>): any

export interface ForProps<T> {
	of: T[]
	children: {
		(entry: T): any
	}
}

export function Switch(props: SwitchProps): any
export function Case<T>(props: CaseProps<T>): any

export interface SwitchProps {
	of: any
}

export type CaseProps<T> = (
	'of' extends keyof T
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
)
