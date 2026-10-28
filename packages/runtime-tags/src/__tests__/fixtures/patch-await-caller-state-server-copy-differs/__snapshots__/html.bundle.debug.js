// tags/echo.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/echo.marko": "__tests__/tags/echo.marko;D ;<span> </span>" });
var echo_default = _template("__tests__/tags/echo.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value.length, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/echo.marko", 0);
});

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": /*@__PURE__*/ (() => `__tests__/tags/show-await.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/6>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l")};${/*@__PURE__*/ ((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$2)}`)(),
	"__tests__/tags/show-await.marko_0_#text#0/await": /*@__PURE__*/ (() => `__tests__/tags/show-await.marko_0_#text#0/await${_shell_marker(_shell_setup([[], []], ["#childScope/6>", $setup$2]))};${((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l")};${((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$2)}`)(),
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_2*shell": "__tests__/tags/show-await.marko_2*shell,<em>long</em>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const upper = x.toUpperCase();
		_html(`<p${_attr("title", x, $scope1_id, "PatchAttr:#p/0 title", $scope0_reason, 1)}>${_text_resume($scope1_id, "#text/1", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope1_id, "#text/2", x, 2, $scope0_reason, 1)}:${_text_resume($scope1_id, "#text/3", upper, 2, $scope0_reason, 1)}:${_text_resume($scope1_id, "#text/4", input.label + x, 2, $scope0_reason, 0)}</p>${_el_resume($scope1_id, "#p/0", _mask_group($scope0_reason, 1))}`);
		_if(() => {
			if (x.length > 6) {
				const $scope2_id = _scope_id();
				_html("<em>long</em>");
				_write_if($scope0_reason, 1) && _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/5", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/show-await.marko_2*shell"], $scope0_reason, 1);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/6", 0);
		echo_default({ value: x });
		_patch_child_end();
		_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_write($scope1_id, "PatchMarkedWrite:x", x);
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, $cg__input_label ? "__tests__/tags/show-await.marko_1_input_label#0:4/init" : "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
		_patch_join_init($scope1_id, "__tests__/tags/show-await.marko_1_input_label#0:4_x#8/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_label", _filled_guard($scope0_reason, 1) && "x");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
			x: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && x,
			"#childScope/6": _existing_scope($childScope)
		}, "__tests__/tags/show-await.marko", "1:2", { x: "1:8" }), $cg__input_label && "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 1), 1);
	$cg__input_promise && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !(_filled_guard($scope0_reason, 2) && $cg__input_promise));
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
