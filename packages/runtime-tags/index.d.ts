import "./tags-html";

declare global {
  namespace NodeJS {
    interface ReadableStream {}
  }

  namespace Marko {
    /**
     * A mutable global object for the current render.
     *
     * The open index signature means an unaugmented `$global` is unchecked. To
     * type your own keys, merge into this interface:
     *
     * ```ts
     * declare global {
     *   namespace Marko {
     *     interface Global {
     *       data?: MyRouteContext;
     *     }
     *   }
     * }
     * ```
     *
     * Declare merged members OPTIONAL — a required one makes every
     * `render({ $global: {} })` call fail with TS2741.
     */
    export interface Global {
      [x: PropertyKey]: unknown;
      /** An AbortSignal instance that, when aborted, stops further streamed content. */
      signal?: AbortSignal;
      /** A CSP Nonce to add to each script output from Marko. */
      cspNonce?: string;
      /** Used for rendering multiple Marko templates in a single hydrated page. */
      renderId?: string;
      /**
       * The `window` global this render's Marko runtime owns (default `"M"`): each runtime copy on a page needs its own, and nothing else
       * may define it (e.g. Materialize's `window.M`). Under a bundler, set the plugin's `runtimeId` option: the browser entry knows only that one.
       */
      runtimeId?: string;
      /**
       * A list of globals that should be serialized to the browser, read once at the first flush that writes resume data. Each value must
       * be serializable and is written into the page: never list a `Request` or `Headers`, which would embed every header, cookies included.
       */
      serializedGlobals?: string[] | Record<string, boolean>;
    }

    export type TemplateInput<Input> = Input & {
      /**
       * Data available within all rendered templates as `$global`. `render` and `mount` copy its own enumerable properties
       * (running getters) when called, so later changes to this object are not seen, and `update` ignores it.
       */
      $global?: Global;
    };

    /**
     * The result of calling `template.render`. A template error never throws from `render`: awaiting or iterating the result rejects,
     * `toReadable()` errors, `toString()` throws, and `pipe` reports it on the stream, so read the first chunk before committing a response status.
     */
    export type RenderedTemplate = Promise<string> &
      AsyncIterable<string> & {
        toReadable(): ReadableStream<Uint8Array<ArrayBufferLike>>;
        /**
         * Writes the render to a Node-style writable. On a render error it closes `stream` and emits `error` on it; with no `error`
         * listener (or no `emit`), the error is thrown instead, uncaught once the render is async.
         */
        pipe(stream: {
          write(chunk: string): unknown;
          end(): unknown;
          flush?(): void;
        }): void;
        toString(): string;
      };

    /** The result of calling `template.mount`. */
    export type MountedTemplate<Input = unknown, Return = unknown> = {
      get value(): Return extends { value: infer Value } ? Value : void;
      set value(
        next: Return extends { valueChange?(next: infer Next): any }
          ? Next
          : never,
      );
      update(input: Marko.TemplateInput<Input>): void;
      destroy(): void;
    };

    /** Body content created by a template. */
    export interface Body<
      in Params extends readonly any[] = [],
      out Return = void,
    > {}

    /** Valid data types which can be passed in as a <${dynamic}/> tag name. */
    export type Renderable =
      | { content: Body<any, any> | Template | string }
      | Body<any, any>
      | Template
      | string;

    /** Extract the return tag type from body content. */
    export type BodyReturnType<B> =
      B extends Body<any, infer Return> ? Return : never;

    /** Extract the tag parameter types received by body content. */
    export type BodyParameters<B> =
      B extends Body<infer Params, any> ? Params : never;

    /** The top level api for a Marko Template. */
    export abstract class Template<Input = unknown, Return = unknown> {
      /**
       * The following types are processed up by the @marko/language-tools
       * and inlined into the compiled template.
       *
       * This is done to support generics on each of these methods
       * until TypeScript supports higher kinded types.
       *
       * https://github.com/microsoft/TypeScript/issues/1213
       */

      /** @marko-overload-start */
      /** Render the template to a string. */
      abstract render(
        input: Marko.TemplateInput<Input>,
      ): Marko.RenderedTemplate;

      /**
       * Render and attach the template to a DOM node. Markup is parsed in the namespace of the parent it is inserted into, so that
       * parent must be an Element: to render in a ShadowRoot or DocumentFragment, mount into an element inside it.
       */
      abstract mount(
        input: Marko.TemplateInput<Input>,
        reference: Node,
        position?: "afterbegin" | "afterend" | "beforebegin" | "beforeend",
      ): Marko.MountedTemplate<typeof input, Return>;
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
