// total: 14269 (min) 5639 (brotli)
// tags/child.marko: 38 (min) 42 (brotli)
const $template = "<!><!><!>";
const $setup = () => {};
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $for_content__item = /* @__PURE__ */ _const(5, ($scope) => {
	_attrs($scope, "a", $scope.f);
	$for_content__item__script($scope);
});
const $for_content__dynamicTag = /* @__PURE__ */ _dynamic_tag(1);
const $for_content__desc = ($scope, desc) => $for_content__dynamicTag($scope, desc);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
	(({ desc, ...item }) => $for_content__item($scope, item))($temp);
	$for_content__desc($scope, $temp.desc);
};
const $for = /* @__PURE__ */ _for_of(0, "<span><!></span>", " D%l", 0, $for_content__$params);
const $foo = ($scope, foo) => $for($scope, [foo]);

// tags/wrap.marko: 153 (min) 117 (brotli)
_resume_dynamic_tag();
const $_classspandiv_content__input_foo = /* @__PURE__ */ _closure_get(3, ($scope) => $foo($scope.a, $scope._.d));
const $_classspandiv_content__setup = ($scope) => {
	$_classspandiv_content__input_foo($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("c0", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $_classspandiv_content__setup));

// template.marko: 64 (min) 59 (brotli)
const $desc_content2 = _content_resume("a1", "Two", "b");
const $desc_content = _content_resume("a0", "One", "b");
