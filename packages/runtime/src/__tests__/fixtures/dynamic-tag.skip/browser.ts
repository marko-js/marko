// import {
//   dynamicTag,
//   walk,
//   attr,
//   register,
//   render,
//   createRenderer,
//   createRenderFn
// } from "../../../../src/dom/index";
// import { get, over, inside } from "../../utils/walks";
// import { Renderer } from "../../../../src/dom/dom";

// export const steps = [
//   {
//     tag: "span"
//   },
//   {
//     tag: createRenderer("Hello")
//   },
//   {
//     tag: "span"
//   },
//   {
//     tag: "a"
//   },
//   {
//     tag: createRenderer(
//       "<div></div>",
//       get + inside + over(1),
//       ["a", "renderBody"],
//       (input: { a: 1; renderBody: Renderer }) => {
//         walk();
//         attr("a", input.a);
//         render(input.renderBody);
//       }
//     )
//   }
// ];

// export const template = `<!>`;
// export const walks = get + over(1);
// export const hydrate = register(
//   __dirname.split("/").pop()!,
//   (input: typeof inputs[number]) => {
//     dynamicTag(input.tag, { a: 1, renderBody }, renderBody);
//   }
// );

// const renderBody_template = "BODY";
// const renderBody = createRenderer(renderBody_template);

// export default createRenderFn(template, walks, ["tag"], hydrate);

export {};
