// tags/wrapper/index.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/wrapper/index.marko": "__tests__/tags/wrapper/index.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrapper/index.marko", 0);
});

// tags/child/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/child/index.marko_2*content": "__tests__/tags/child/index.marko_2*content,content",
	"__tests__/tags/child/index.marko_1*content": "__tests__/tags/child/index.marko_1*content;b1;<!><!><!>",
	"__tests__/tags/child/index.marko": /*@__PURE__*/ ((_w0) => `^__tests__/tags/child/index.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$2)
});
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a11yText = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $btn_getter = _hoist($scope0_id, "__tests__/tags/child/index.marko_0_$btn#1:2/hoist");
	const $wrapper_content__subscribers = new Set();
	const $input_a11yText__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	wrapper_default({ content: _content_elide("__tests__/tags/child/index.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $inputa11yTextbutton_scope = _peek_scope_id();
		let $btn = _dynamic_tag($scope1_id, "#text/0", input.a11yText && "button", { "aria-label": input.a11yText }, 1, _content_elide("__tests__/tags/child/index.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html("content");
		}, $scope1_id), void 0, void 0, $scope0_reason, 0, void 0, void 0, void 0, "__tests__/tags/child/index.marko_1_$btn#2/var");
		_var($scope1_id, "#scopeOffset/1", $inputa11yTextbutton_scope, "__tests__/tags/child/index.marko_1_$btn#2/var");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/child/index.marko_1_input_a11yText#0:3/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_a11yText__closures, _subscribe($wrapper_content__subscribers, _scope($scope1_id, {
			$btn,
			_: $wi__input_a11yText && _scope_with_id($scope0_id)
		}, "__tests__/tags/child/index.marko", "1:2", { $btn: "2:36" })));
		_assert_hoist($btn);
	}, $scope0_id) });
	_patch_child_end();
	const $return = { btn: $btn_getter };
	_scope($scope0_id, {
		"ClosureScopes:1": $wrapper_content__subscribers,
		"ClosureScopes:input_a11yText/4": $wi__input_a11yText && _unfilled_if($scope0_reason, 0) && $input_a11yText__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/child/index.marko", 0);
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}&`)($walks$1, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&0${_w1}&`)($walks$1, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	let plain = child_default({});
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/2", 1);
	let labeled = child_default({ a11yText: "Close" });
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
