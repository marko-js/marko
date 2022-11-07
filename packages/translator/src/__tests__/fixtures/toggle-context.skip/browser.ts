// import {
//   pushContext,
//   popContext,
//   getInContext
// } from "../../../../src/common/context";
// import {
//   compute,
//   textContent,
//   conditional,
//   register,
//   createRenderer,
//   createRenderFn,
//   walk
// } from "../../../../src/dom/index";
// import { get, next, over } from "../../utils/walks";

// export const template = `<div><!></div>`;
// export const walks = next(1) + get + over(1);
// export const hydrate = register(
//   __dirname.split("/").pop()!,
//   (input: { value: { name: string } | undefined; visible: boolean }) => {
//     const branch0 = createRenderer(
//       branch0_template,
//       branch0_walks,
//       undefined,
//       () => {
//         walk();
//         textContent(compute(value => value, getInContext("KEY"), 1, true));
//       }
//     );
//     pushContext("KEY", input.value);
//     conditional(
//       compute(visible => (visible ? branch0 : undefined), input.visible, 1)
//     );
//     popContext();
//   }
// );

// const branch0_template = "<span></span>";
// const branch0_walks = get + over(1);

// export default createRenderFn(template, walks, ["visible", "value"], hydrate);

export {};
