import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/hello/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<header${_$.classAttr(input.header.class)}>`);
  _$.dynamicTag($scope0_id, "#text/1", input.header.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.header.content */2));
  _$.write(`</header>${_$.markResumeNode($scope0_id, "#header/0", _$.serializeGuard($serialize, /* input.header.class */1))}<main>`);
  _$.dynamicTag($scope0_id, "#text/2", input.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.content */3));
  _$.write(`</main><footer${_$.classAttr(input.footer.class)}>`);
  _$.dynamicTag($scope0_id, "#text/4", input.footer.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.footer.content */5));
  _$.write(`</footer>${_$.markResumeNode($scope0_id, "#footer/3", _$.serializeGuard($serialize, /* input.footer.class */4))}`);
  _$.serializeGuard($serialize, /* input.header.class,input.header.content,input.content,input.footer.class,input.footer.content */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});