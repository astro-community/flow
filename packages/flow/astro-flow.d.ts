export { iterate } from './lib/iterate.d'
export { Iterate } from './lib/iterate-component.d'
export { Iterate as For } from './lib/iterate-component.d'

// -----------------------------------------------------------------------------

export function Case<T>(props: CaseProps<T>): any
export function Switch(props: SwitchProps): any

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

// -----------------------------------------------------------------------------

export function When(props: WhenProps): any

type WhenProps = Record<any, any>
