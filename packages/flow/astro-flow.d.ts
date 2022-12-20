export { HTMLString } from './lib/HTMLString.d'
export { iterate } from './lib/iterate.d'
export { default as Iterate, Props as IterateProps } from './lib/AstroIterate.astro.d'
export { default as For, Props as ForProps } from './lib/AstroIterate.astro.d'
export { default as Switch, Props as SwitchProps } from './lib/AstroSwitch.d'
export { default as Case, Props as CaseProps } from './lib/AstroCase.d'
export { default as When, Props as WhenProps } from './lib/AstroWhen.d'

declare module '@astropub/flow/Iterate' {
	export * from './lib/AstroIterate.astro.d'
}
