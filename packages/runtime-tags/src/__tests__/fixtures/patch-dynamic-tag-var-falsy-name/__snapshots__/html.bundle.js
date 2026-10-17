// tags/wrapper/index.marko
const $template$1 = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// tags/child/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	b0: "b0,content",
	b1: "b1;b1;<!><!><!>",
	b: /*@__PURE__*/ ((_w0) => `b;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a11yText = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $btn_getter = _hoist($scope0_id, "b2");
	const $wrapper_content__subscribers = /* @__PURE__ */ new Set();
	const $input_a11yText__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	wrapper_default({ content: _content_elide("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $inputa11yTextbutton_scope = _peek_scope_id();
		let $btn = _dynamic_tag($scope1_id, "a", input.a11yText && "button", { "aria-label": input.a11yText }, _content_elide("b0", () => {
			_scope_id();
			_scope_reason();
			_html("content");
		}, $scope1_id), void 0, void 0, "b3", 1, $scope0_reason, 0);
		_var($scope1_id, "b", $inputa11yTextbutton_scope, "b3");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "b4" : "b5");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a11yText__closures, _subscribe($wrapper_content__subscribers, _scope($scope1_id, {
			c: $btn,
			_: $wi__input_a11yText && _scope_with_id($scope0_id)
		})));
	}, $scope0_id) });
	const $return = { btn: $btn_getter };
	$scope0_page && _scope($scope0_id, {
		B1: $wrapper_content__subscribers,
		e: $wi__input_a11yText && _unfilled_if($scope0_reason, 0) && $input_a11yText__closures,
		a: _existing_scope($childScope)
	});
	return $return;
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0, _w1) => `0${_w0}&0${_w1}&`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({});
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "c");
	child_default({ a11yText: "Close" });
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
