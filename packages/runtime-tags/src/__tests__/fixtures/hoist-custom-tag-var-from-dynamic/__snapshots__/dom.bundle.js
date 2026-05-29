// total: 13613 (min) 5217 (brotli)
// tags/thing.marko: 0 (min) 1 (brotli)
const $template$1 = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag(1);
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content);
	$dynamicTag2($scope, input_content);
};

// tags/child.marko: 59 (min) 63 (brotli)
const $template = "<div></div>";
function $setup($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko: 593 (min) 261 (brotli)
const $setHtml3_getter = _hoist(2, "B4");
const $inputshowsectionnull_content__setHtml = _var_resume("a6", /* @__PURE__ */ _const(2));
const $inputshowsectionnull_content__setup = ($scope) => {
	_var($scope, 0, $inputshowsectionnull_content__setHtml);
	$setup($scope.a);
};
const $inputshowsectionnull_content = _content_resume("a4", $template, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $inputshowsectionnull_content__setup, 0, "B4");
const $setHtml2_getter = _hoist(2, "B3", "B2");
const $thing_content2__setHtml = _var_resume("a7", /* @__PURE__ */ _const(2));
const $thing_content2__setup = ($scope) => {
	_var($scope, 0, $thing_content2__setHtml);
	$setup($scope.a);
};
const $thing_content2 = /* @__PURE__ */ _content("a2", $template, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $thing_content2__setup, 0, "B3");
const $inputshowThingnull_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope.a);
	$input_content($scope.a, $thing_content2($scope));
};
const $inputshowThingnull_content = _content_resume("a3", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks), $inputshowThingnull_content__setup, 0, "B2");
const $setHtml_getter = _hoist_resume("a0", 2, "B1");
const $thing_content__setHtml = _var_resume("a8", /* @__PURE__ */ _const(2));
const $setup__script = _script("a5", ($scope) => {
	for (const fn of $setHtml_getter($scope)) fn("Hoist from custom tag");
	$setHtml2_getter($scope)()("Hoist from dynamic tag");
	$setHtml3_getter($scope)()("Hoist from dynamic tag");
});
