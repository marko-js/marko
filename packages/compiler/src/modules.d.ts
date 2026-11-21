// Packages the compiler imports that ship no typings.
declare module "jsesc" {
  export default function jsesc(
    value: unknown,
    options?: Record<string, unknown>,
  ): string;
}
