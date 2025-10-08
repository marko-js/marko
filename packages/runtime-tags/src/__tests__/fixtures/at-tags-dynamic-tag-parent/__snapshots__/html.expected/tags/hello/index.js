import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/hello/index.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  _._html(`<header${_._attr_class(input.header.class)}>`);
  _._dynamic_tag($scope0_id, "#text/1", input.header.content, {}, 0, 0, _._serialize_guard($serialize, /* input.header.content */2));
  _._html(`</header>${_._el_resume($scope0_id, "#header/0", _._serialize_guard($serialize, /* input.header.class */1))}<main>`);
  _._dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _._serialize_guard($serialize, /* input.content */3));
  _._html(`</main><footer${_._attr_class(input.footer.class)}>`);
  _._dynamic_tag($scope0_id, "#text/4", input.footer.content, {}, 0, 0, _._serialize_guard($serialize, /* input.footer.content */5));
  _._html(`</footer>${_._el_resume($scope0_id, "#footer/3", _._serialize_guard($serialize, /* input.footer.class */4))}`);
  _._serialize_guard($serialize, /* input.header.class, input.header.content, input.content, input.footer.class, input.footer.content */0) && _._scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});