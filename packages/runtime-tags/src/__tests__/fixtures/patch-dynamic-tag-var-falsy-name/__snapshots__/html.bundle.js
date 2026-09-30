// tags/wrapper/index.marko
const $template$1 = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/child/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	b0: "b0,content",
	b1: "b1;b1;<!><!><!>",
	b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D%l"), $template$1)
});
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $btn_getter = _hoist($scope0_id, "b2");
	const $wrapper_content__subscribers = /* @__PURE__ */ new Set();
	const $input_a11yText__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	wrapper_default({ content: _content_elide("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $tag = input.a11yText && "button";
		const $input2 = { "aria-label": input.a11yText };
		const $inputa11yTextbutton_scope = _peek_scope_id();
		let $btn = _dynamic_tag($scope1_id, "a", $tag, $input2, _content_elide("b0", () => {
			_scope_id();
			_scope_reason();
			_html("content");
		}, $scope1_id), void 0, void 0, _patch_dynamic_tag($scope1_id, "a", $tag, $input2, "b0", "b3", $scope0_reason, 0));
		_var($scope1_id, "b", $inputa11yTextbutton_scope, "b3");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b4");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a11yText__closures, _subscribe($wrapper_content__subscribers, _scope($scope1_id, {
			c: $btn,
			_: _scope_with_id($scope0_id)
		})));
	}, $scope0_id) });
	const $return = { btn: $btn_getter };
	$scope0_page && _scope($scope0_id, {
		B1: $wrapper_content__subscribers,
		e: $input_a11yText__closures,
		a: _existing_scope($childScope)
	});
	return $return;
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&0${_w1}&`)($walks, $walks), ((_w0, _w1) => `${_w0}${_w1}`)($template, $template)) });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({});
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope2);
	child_default({ a11yText: "Close" });
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1, () => [child_default]);
