// tags/show-await.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $setup$1 = [["#childScope/0>__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe"], []];
_shells({
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D ;<p> </p>",
	"__tests__/tags/show-await.marko_1_#text#0/await": "__tests__/tags/show-await.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/tags/show-await.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/show-await.marko_1*content __tests__/tags/show-await.marko_1_input_promise#0:3/subscribe;${_w0};${_w1}`)($Row_content__walks, $Row_content__template),
	"__tests__/tags/show-await.marko": /*@__PURE__*/ (() => `__tests__/tags/show-await.marko #childScope/0>__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)()
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const Row = { content: _content("__tests__/tags/show-await.marko_1*content", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__text = _write_if($scope1_reason, 0);
		_await($scope1_id, "#text/0", text && input.promise, (x) => {
			const $scope2_id = _scope_id();
			_filled_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && _patch_write($scope2_id, "PatchMarkedWrite:x", x, !_server_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0));
			_html(`<p>${_text_resume($scope2_id, "#text/0", x, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
			_script($scope2_id, "__tests__/tags/show-await.marko_2_x#2", 1, (_filled_guard($scope0_reason, 0) || _filled_guard($scope1_reason, 0)) && ($cg__input_promise || _client_guard($scope1_reason, 0) ? 2 : 1), _filled_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "x");
			_scope($scope2_id, { x }, "__tests__/tags/show-await.marko", "2:4", { x: "2:10" });
		}, 1, "__tests__/tags/show-await.marko_2*content", _unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && 2);
		$cg__input_promise && _patch_write($scope1_id, "PatchMarkedWrite:text", text, !(_filled_guard($scope1_reason, 0) && $cg__input_promise));
		_patch_join_init($scope1_id, "__tests__/tags/show-await.marko_1_input_promise#0:3_text#3/init", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">input_promise", _filled_guard($scope1_reason, 0) && "text");
		($wi__input_promise || $wi__text) && _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_promise && $input_promise__closures, _scope($scope1_id, {
			text: $wi__input_promise && text,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/show-await.marko", "1:2", { text: "1:15" }), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe", 0);
		($wi__input_promise || $wi__text) && _resume_branch($scope1_id);
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({ text: input.label });
	_patch_child_end();
	_scope($scope0_id, {
		input_promise: _write_if($scope0_reason, 1) && input.promise,
		"ClosureScopes:input_promise/5": $wi__input_promise && $input_promise__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/show-await.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/show-await.marko_fill0", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks$1)};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
