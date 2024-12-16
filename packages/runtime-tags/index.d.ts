import "./tags-html";

declare module "*.marko" {
  const template: Marko.Template;
  export default template;
}

declare global {
  namespace NodeJS {
    interface ReadableStream {}
  }

  namespace Marko {
    /** A mutable global object for the current render. */
    export interface Global {
      [x: PropertyKey]: unknown;
      /** An AbortSignal instance that, when aborted, stops further streamed content. */
      signal?: AbortSignal;
      /** A CSP Nonce to add to each script output from Marko. */
      cspNonce?: string;
      /** Used for rendering multiple Marko templates in a single hydrated page. */
      renderId?: string;
      /** Used to uniquely identify a instance of a Marko runtime. */
      runtimeId?: string;
      /** A list of globals that should be serialized to the browser. */
      serializedGlobals?:
        | (string | number)[]
        | Record<string | number, boolean>;
    }

    export type TemplateInput<Input> = Input & {
      /**  Data available within all rendered templates as `$global`. */
      $global?: Global;
    };

    /** Body content created from by a component, typically held in an object with a renderBody property. */
    export interface Body<
      in Params extends readonly any[] = [],
      out Return = void,
    > {}

    /** Valid data types which can be passed in as a <${dynamic}/> tag name. */
    export type Renderable =
      | { renderBody: Body<any, any> | Template | string }
      | Body<any, any>
      | Template
      | string;

    /** Extract the return tag type from a renderBody. */
    export type BodyReturnType<B> =
      B extends Body<any, infer Return> ? Return : never;

    /** Extract the tag parameter types received by a renderBody. */
    export type BodyParameters<B> =
      B extends Body<infer Params, any> ? Params : never;

    /** The top level api for a Marko Template. */
    export abstract class Template<Input = unknown, Return = unknown> {
      /**
       * The folowing types are processed up by the @marko/language-tools
       * and inlined into the compiled template.
       *
       * This is done to support generics on each of these methods
       * until TypeScript supports higher kinded types.
       *
       * https://github.com/microsoft/TypeScript/issues/1213
       */

      /** @marko-overload-start */
      /** Render the template to a string. */
      abstract render(input: Marko.TemplateInput<Input>): Promise<string> &
        AsyncIterable<string> & {
          toReadable(): ReadableStream;
          pipe(stream: {
            write(chunk: string): unknown;
            end(): unknown;
            flush?(): void;
          }): void;
          toString(): string;
        };

      /** Render and attach the template to a DOM node. */
      abstract mount(
        input: Marko.TemplateInput<Input>,
        reference: ParentNode & Node,
        position?: "afterbegin" | "afterend" | "beforebegin" | "beforeend",
      ): {
        update(input: Marko.TemplateInput<Input>): void;
        destroy(): void;
      };
      /** @marko-overload-end */
    }

    export type AttrTag<T> = T & {
      [Symbol.iterator](): Iterator<T>;
    };

    export interface NativeTag<
      Input extends Record<string, any>,
      Return extends Element,
    > {
      input: Input;
      return: { value: () => Return };
    }
    export interface NativeTags {
      [name: string]: NativeTag<Record<string, any>, Element>;
    }

    export type Input<Name> = 0 extends 1 & Name
      ? any
      : Name extends string
        ? Name extends keyof NativeTags
          ? NativeTags[Name]["input"]
          : Record<string, unknown>
        : Name extends
              | Template<infer Input, any>
              | { _(): () => (input: infer Input) => any }
          ? Input
          : Name extends Body<infer Args, any>
            ? Args extends {
                length: infer Length;
              }
              ? number extends Length
                ? Args[0] | undefined
                : 0 extends Length
                  ? undefined
                  : Args[0]
              : never
            : never;

    export type Return<Name> = 0 extends 1 & Name
      ? any
      : Name extends string
        ? Name extends keyof NativeTags
          ? NativeTags[Name]["return"]
          : () => Element
        : Name extends
              | { _(): () => (input: any) => { return: infer Return } }
              | Template<any, infer Return>
              | Body<any, infer Return>
          ? Return
          : never;
  }
}
