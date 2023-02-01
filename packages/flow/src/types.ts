type ScalarValues = string | number | bigint | boolean | symbol | null;

interface HasForEachMethod {
	forEach(callbackfn: (...args: Array<unknown>) => void, thisArg?: unknown): void;
}
interface FilledCase<T extends ScalarValues> {
	of: T | ((value: T) => boolean);
	default?: never;
}
interface DefaultCase {
	of?: never;
	default: true;
}

type Case<T extends ScalarValues> = FilledCase<T> | DefaultCase;

interface ValueHasRenderedCaseAndDefault {
	value: unknown;
	hasRenderedCase: boolean;
	hasRenderedDefault: boolean;
}

export { HasForEachMethod, Case, ScalarValues, ValueHasRenderedCaseAndDefault };
