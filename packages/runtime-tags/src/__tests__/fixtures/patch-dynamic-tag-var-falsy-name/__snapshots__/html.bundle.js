// tags/wrapper/index.marko
const $template$1 = "<div><!></div>";
const $setup$2 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/child/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	b1: "b1,content",
	b4: "b4;b1;<!><!><!>",
	b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a11yText = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $btn_getter = _hoist($scope0_id, "b0");
	const $wrapper_content__subscribers = /* @__PURE__ */ new Set();
	const $input_a11yText__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	wrapper_default({ content: _content("b4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $inputa11yTextbutton_scope = _peek_scope_id();
		let $btn = _dynamic_tag($scope1_id, "a", input.a11yText && "button", { "aria-label": input.a11yText }, 1, _content("b1", () => {
			_scope_id();
			_scope_reason();
			_html("content");
		}, $scope1_id, 1), 0, 1, $scope0_reason, 0, 0, void 0, void 0, "b2");
		_var($scope1_id, "b", $inputa11yTextbutton_scope, "b2");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b3");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a11yText__closures, _subscribe($wrapper_content__subscribers, _scope($scope1_id, {
			c: $btn,
			_: $wi__input_a11yText && _scope_with_id($scope0_id)
		})));
	}, $scope0_id, 1) });
	_patch_child_end();
	const $return = { btn: $btn_getter };
	_scope($scope0_id, {
		B1: $wrapper_content__subscribers,
		e: $wi__input_a11yText && _unfilled_if($scope0_reason, 0) && $input_a11yText__closures,
		a: _existing_scope($childScope)
	});
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&0${_w1}&`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({});
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	child_default({ a11yText: "Close" });
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
