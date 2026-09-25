// The kinds of value an expression may evaluate to, as flags. Each falsy value
// has its own kind, so `&&`, `||` and `??` narrow what they pass on.
export const Undefined = 1;
export const Null = 2;
export const False = 4;
export const True = 8;
/** `0`, `-0`, `0n` or `NaN`. */
export const Zero = 16;
/** Any other number or bigint. */
export const NonZero = 32;
export const EmptyString = 64;
export const NonEmptyString = 128;
export const Function = 256;
/** Any other object, or a symbol. */
export const Object = 512;

export const Nullish = Undefined | Null;
export const Boolean = False | True;
export const Numeric = Zero | NonZero;
export const String = EmptyString | NonEmptyString;
export const Falsy = Nullish | False | Zero | EmptyString;
export const Any = Falsy | True | NonZero | NonEmptyString | Function | Object;
