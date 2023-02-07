
type AllowedTypes = string | null | bigint | Record<PropertyKey, unknown> | undefined | number | boolean

type FilledCase = {
    of: AllowedTypes |  ((value:unknown)=> boolean);
    default?:never
}

type DefaultCase = {
    default:true;
    of?:never
    }
type Case =  FilledCase |  DefaultCase

export type Props = Case

export default function Case(props: Props): any
