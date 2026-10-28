// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko !;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_1_#text#0/await": "__tests__/tags/show-await.marko_1_#text#0/await;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko_1*shell": "__tests__/tags/show-await.marko_1*shell;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 4)}:${_text_resume($scope2_id, "#text/1", x, 2, $scope0_reason, 3)}</p>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_label ? "__tests__/tags/show-await.marko_2_input_label#0:5/init" : "__tests__/tags/show-await.marko_2_input_label#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "2:4"), $cg__input_label && "__tests__/tags/show-await.marko_2_input_label#0:5/subscribe");
			}, 1, "__tests__/tags/show-await.marko_2*content", _unfilled_if($scope0_reason, 3));
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/show-await.marko_1_input_promise#0:4/init");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/show-await.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/show-await.marko_1*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_promise: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.label,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, {
		input_promise: ["input.promise"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/show-await.marko_fill0", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/show-await.marko_fill1", input.label, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_scope_reason(152 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	show_await_default({
		promise: p,
		label: input.label,
		show: input.show
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", p, 1);
	_scope($scope0_id, {
		resolve,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { resolve: "2:6" });
}, 1);
