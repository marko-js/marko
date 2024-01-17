import type {
  Context,
  ITemplate,
  Input,
  InsertResult,
  Renderer,
} from "../common/types";
import { register } from "./serializer";
import { type Writable, createRenderFn } from "./writer";

export const createTemplate = (renderer: Renderer, id = "") =>
  register(new Template(renderer), id);

export class Template implements ITemplate {
  public _: Renderer;
  public writeTo: (
    writable: Writable,
    input?: Input,
    context?: Context,
  ) => void;

  constructor(renderer: Renderer) {
    this._ = renderer;
    this.writeTo = createRenderFn(renderer);
  }

  insertBefore(): InsertResult {
    throw new Error("Not implemented");
  }

  asHTML(input?: Input, context?: Context) {
    return new Promise<string>((resolve, reject) => {
      let html = "";
      this.writeTo(
        {
          write(data: string) {
            html += data;
            return true;
          },
          emit(name, error: Error) {
            if (name === "error") {
              reject(error);
            }
          },
          end() {
            resolve(html);
            return this;
          },
        },
        input,
        context,
      );
    });
  }

  asReadableStream(input?: Input, context?: Context) {
    return new ReadableStream({
      start: (controller) => {
        this.writeTo(
          {
            write(data: string) {
              controller.enqueue(data);
              return true;
            },
            emit(name, err: Error) {
              if (name === "error") {
                controller.error(err);
              }
            },
            end() {
              controller.close();
            },
          },
          input,
          context,
        );
      },
    });
  }

  asPipeableStream(input?: Input, context?: Context) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const template = this;
    // Trying to hide the `require` from bundlers/tools
    // This should throw outside of Node.js
    const dynamicRequire = typeof require === "function" ? require : undefined;
    const stream = dynamicRequire!(
      "node:stream",
    ) as typeof import("node:stream");
    const readable = new stream.Readable({
      read() {
        template.writeTo(
          {
            write(data: string) {
              readable.push(data);
              return true;
            },
            emit(name: string, data: unknown) {
              readable.emit(name, data);
            },
            end() {
              readable.push(null);
            },
          },
          input,
          context,
        );
      },
    });
    return readable;
  }
}
