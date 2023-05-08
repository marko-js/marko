import "./tags-html";

declare module "*.marko" {
  const template: Marko.Template;
  export default template;
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ReadableStream {}
  }

  namespace Marko {
    /** A mutable global object for the current render. */
    export interface Global {
      /** A list of globals that should be serialized to the browser. */
      serializedGlobals?: Record<string, boolean>;
      /** A CSP Nonce to add to each script output from Marko. */
      cspNonce?: string;
      /** Used to uniquely identify a instance of a Marko runtime. */
      runtimeId?: string;
      /** Used for rendering multiple Marko templates in a single hydrated page. */
      componentIdPrefix?: string;
      [attr: PropertyKey]: unknown;
    }

    export type TemplateInput<Input> = Input & {
      $global?: Global;
    };

    export interface Out<Component extends Marko.Component = Marko.Component>
      extends PromiseLike<RenderResult<Component>> {
      /** The underlying ReadableStream Marko is writing into. */
      stream: unknown;
      /** A mutable global object for the current render. */
      global: Global;
      /** Disable all async rendering. Will error if something beings async. */
      sync(): void;
      /** Returns true if async rendering is disabled. */
      isSync(): boolean;
      /** Write unescaped text at the current stream position. */
      write(val: string | void): this;
      /** Write javascript content to be merged with the scripts Marko sends out on the next flush. */
      script(val: string | void): this;
      /** Returns the currently rendered html content. */
      toString(): string;
      /** Starts a new async/forked stream. */
      beginAsync(options?: {
        name?: string;
        timeout?: number;
        last?: boolean;
      }): Out;
      /** Marks the current stream as complete (async streams may still be executing). */
      end(val?: string | void): this;
      emit(eventName: PropertyKey, ...args: any[]): boolean;
      on(eventName: PropertyKey, listener: (...args: any[]) => any): this;
      once(eventName: PropertyKey, listener: (...args: any[]) => any): this;
      prependListener(
        eventName: PropertyKey,
        listener: (...args: any[]) => any
      ): this;
      removeListener(
        eventName: PropertyKey,
        listener: (...args: any[]) => any
      ): this;
      /** Register a callback executed when the last async out has completed. */
      onLast(listener: (next: () => void) => unknown): this;
      /** Pipe Marko's stream to another stream. */
      pipe(stream: unknown): this;
      /** Emits an error on the stream. */
      error(e: Error): this;
      /** Schedules a Marko to flush buffered html to the underlying stream. */
      flush(): this;
      /** Creates a detached out stream (used for out of order flushing). */
      createOut(): Out;
      /** Write escaped text at the current stream position. */
      text(val: string | void): void;
    }

    /** Body content created from by a component, typically held in an object with a renderBody property. */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Body<
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      in Params extends readonly any[] = [],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      out Return = void
    > {}

    /** Valid data types which can be passed in as a <${dynamic}/> tag name. */
    export type Renderable =
      | { renderBody: Body<any, any> | Template | string }
      | Body<any, any>
      | Template
      | string;

    /** Extract the return tag type from a renderBody. */
    export type BodyReturnType<B> = B extends Body<any, infer Return>
      ? Return
      : never;

    /** Extract the tag parameter types received by a renderBody. */
    export type BodyParameters<B> = B extends Body<infer Params, any>
      ? Params
      : never;

    export class Component<Input = unknown, State = unknown>
      implements Emitter
    {
      /** A unique id for this instance. */
      public readonly id: string;
      /** The top level element rendered by this instance. */
      public readonly el: Element | void;
      /** The attributes passed to this instance. */
      public readonly input: Input;
      /** @deprecated */
      public readonly els: Element[];
      /** Mutable state that when changed causes a rerender. */
      state: State;

      /** Returns the amount of event handlers listening to a specific event. */
      listenerCount(eventName: PropertyKey): number;
      /**
       * Used to wrap an existing event emitted and ensure that all events are
       * cleaned up once this component is destroyed
       * */
      subscribeTo(
        emitter: unknown
      ): Omit<Emitter, "listenerCount" | "prependListener" | "emit">;
      /** Emits an event on the component instance. */
      emit(eventName: PropertyKey, ...args: any[]): boolean;
      /** Listen to an event on the component instance. */
      on(eventName: PropertyKey, listener: (...args: any[]) => any): this;
      /** Listen to an event on the component instance once. */
      once(eventName: PropertyKey, listener: (...args: any[]) => any): this;
      /** Listen to an event on the component instance before all other listeners. */
      prependListener(
        eventName: PropertyKey,
        listener: (...args: any[]) => any
      ): this;
      /** Remove a listener from the component instance. */
      removeListener(
        eventName: PropertyKey,
        listener: (...args: any[]) => any
      ): this;
      /** Remove all listeners from the component instance. */
      removeAllListeners(eventName?: PropertyKey): this;
      /** Removes the component instance from the DOM and cleans up all active event handlers including all children. */
      destroy(): void;
      /** Schedule an update (similar to if a state had been changed). */
      forceUpdate(): void;
      /** Generates a unique id derived from the current unique instance id (similar to :scoped in the template). */
      elId(key?: string, index?: number): string;
      /** @alias elId */
      getElId(key?: string, index?: number): string;
      /** Gets an element reference by its `key` attribute in the template. */
      getEl<T extends Element | void = Element | void>(
        key?: string,
        index?: number
      ): T;
      /** Gets all element references by their `key` attribute in the template. */
      getEls<T extends Element[] = Element[]>(key: string): T;
      /** Gets a component reference by its `key` attribute in the template. */
      getComponent<T extends Component | void = Component | void>(
        key: string,
        index?: number
      ): T;
      /** Gets all component references by their `key` attribute in the template. */
      getComponents<T extends Component[] = Component[]>(key: string): T;
      /** True if this instance has been removed from the dom. */
      /** True if this instance is scheduled to rerender. */
      isDestroyed(): boolean;
      /** Replace the entire state object with a new one, removing old properties. */
      replaceState(state: this["state"]): void;
      /**
       * Update a property on this.state (should prefer mutating this.state directly).
       * When passed an object as the first argument, it will be merged into the state.
       */
      setState<Key extends PropertyKey>(
        name: Key & keyof this["state"],
        value: (this["state"] & Record<PropertyKey, unknown>)[Key]
      ): void;
      setState(value: Partial<this["state"]>): void;

      /** Schedules an update related to a specific state property and optionally updates the value. */
      setStateDirty<Key extends PropertyKey>(
        name: Key & keyof this["state"],
        value?: (this["state"] & Record<PropertyKey, unknown>)[Key]
      ): void;
      /** Synchronously flush any scheduled updates. */
      update(): void;
      /** Appends the dom for the current instance to a parent DOM element. */
      appendTo(target: ParentNode): this;
      /** Inserts the dom for the current instance after a sibling DOM element. */
      insertAfter(target: ChildNode): this;
      /** Inserts the dom for the current instance before a sibling DOM element. */
      insertBefore(target: ChildNode): this;
      /** Prepends the dom for the current instance to a parent DOM element. */
      prependTo(target: ParentNode): this;
      /** Replaces an existing DOM element with the dom for the current instance. */
      replace(target: ChildNode): this;
      /** Replaces the children of an existing DOM element with the dom for the current instance. */
      replaceChildrenOf(target: ParentNode): this;
      // /** Called when the component is firsted created. */
      // onCreate?(input: this["input"], out: Marko.Out): void;
      // /** Called every time the component receives input from it's parent. */
      // onInput?(input: this["input"], out: Marko.Out): void | this["input"];
      // /** Called after a component has successfully rendered, but before it's update has been applied to the dom. */
      // onRender?(out: Marko.Out): void;
      // /** Called after the first time the component renders and is attached to the dom. */
      // onMount?(): void;
      // /** Called when a components render has been applied to the DOM (excluding when it is initially mounted). */
      // onUpdate?(): void;
      // /** Called when a component is destroyed and removed from the dom. */
      // onDestroy?(): void;
    }

    /** The top level api for a Marko Template. */
    export abstract class Template<Input = unknown, Return = unknown> {
      /** Creates a Marko compatible output stream. */
      createOut(): Out;

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
      /** Asynchronously render the template. */
      abstract render(
        input: Marko.TemplateInput<Input>,
        stream?: {
          write: (chunk: string) => void;
          end: (chunk?: string) => void;
        }
      ): Marko.Out<Marko.Component>;

      /** Asynchronously render the template in buffered mode. */
      abstract render(
        input: Marko.TemplateInput<Input>,
        cb?: (
          err: Error | null,
          result: Marko.RenderResult<Marko.Component>
        ) => void
      ): Marko.Out<Marko.Component>;

      /** Synchronously render the template. */
      abstract renderSync(
        input: Marko.TemplateInput<Input>
      ): Marko.RenderResult<Marko.Component>;

      /** Synchronously render a template to a string. */
      abstract renderToString(input: Marko.TemplateInput<Input>): string;

      /** Render a template and return a stream.Readable in nodejs or a ReadableStream in a web worker environment. */
      abstract stream(
        input: Marko.TemplateInput<Input>
      ): ReadableStream<string> & NodeJS.ReadableStream;
      /** @marko-overload-end */
    }

    export interface RenderResult<
      out Component extends Marko.Component = Marko.Component
    > {
      /** Returns the component created as a result of rendering the template. */
      getComponent(): Component;
      getComponents(selector?: any): any;
      /** Triggers the mount lifecycle of a component without necessarily attaching it to the DOM. */
      afterInsert(host?: any): this;
      /** Gets the DOM node rendered by a template. */
      getNode(host?: any): Node;
      /** Gets the HTML output of the rendered template. */
      toString(): string;
      /** Appends the dom of the rendered template to a parent DOM element. */
      appendTo(target: ParentNode): this;
      /** Inserts the dom of the rendered template after a sibling DOM element. */
      insertAfter(target: ChildNode): this;
      /** Inserts the dom of the rendered template before a sibling DOM element. */
      insertBefore(target: ChildNode): this;
      /** Prepends the dom of the rendered template to a parent DOM element. */
      prependTo(target: ParentNode): this;
      /** Replaces an existing DOM element with the dom of the rendered template. */
      replace(target: ChildNode): this;
      /** Replaces the children of an existing DOM element with the dom of the rendered template. */
      replaceChildrenOf(target: ParentNode): this;
      out: Out<Component>;
      /** @deprecated */
      document: any;
      /** @deprecated */
      getOutput(): string;
      /** @deprecated */
      html: string;
      /** @deprecated */
      context: Out<Component>;
    }

    export interface Emitter {
      listenerCount(eventName: PropertyKey): number;
      emit(eventName: PropertyKey, ...args: any[]): boolean;
      on(eventName: PropertyKey, listener: (...args: any[]) => any): this;
      once(eventName: PropertyKey, listener: (...args: any[]) => any): this;
      prependListener(
        eventName: PropertyKey,
        listener: (...args: any[]) => any
      ): this;
      removeListener(
        eventName: PropertyKey,
        listener: (...args: any[]) => any
      ): this;
      removeAllListeners(eventName?: PropertyKey): this;
    }

    export type AttrTag<T> = T & Iterable<AttrTag<T>>;
    export type RepeatableAttrTag<T> =
      | AttrTag<T>
      | [AttrTag<T>, AttrTag<T>, ...AttrTag<T>[]];

    export interface NativeTag<
      Input extends Record<string, any>,
      Return extends Element
    > {
      input: Input;
      return: () => Return;
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
          ? { value?: Args }
          : 0 extends Length
          ? { value?: [] }
          : { value: Args }
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

    /** @deprecated @see {@link Marko.Input} */
    export type NativeTagInput<Name extends keyof NativeTags> =
      NativeTags[Name]["input"];
    /** @deprecated @see {@link Marko.Return} */
    export type NativeTagReturn<Name extends keyof NativeTags> =
      NativeTags[Name]["return"];
  }
}
