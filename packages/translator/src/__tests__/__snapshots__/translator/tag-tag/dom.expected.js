import { data as _data, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("165E3TM6", input => {
  const MyTag = input => _data(input.name);

  _dynamicTag(MyTag, {
    name: "World"
  });
});
export default _createRenderFn(template, walks, [], hydrate);