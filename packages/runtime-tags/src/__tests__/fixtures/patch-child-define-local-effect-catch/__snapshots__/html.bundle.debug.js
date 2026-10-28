// tags/wrap.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $setup$1 = [["#childScope/0>"], []];
_shells({
	"__tests__/tags/wrap.marko_4*content": "__tests__/tags/wrap.marko_4*content;D ;<em> </em>",
	"__tests__/tags/wrap.marko_3*content": "__tests__/tags/wrap.marko_3*content __tests__/tags/wrap.marko_3_x#1:1/subscribe!__tests__/tags/wrap.marko_3_x#1:1",
	"__tests__/tags/wrap.marko_2_#text#0/await": "__tests__/tags/wrap.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/tags/wrap.marko_2*content": "__tests__/tags/wrap.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/wrap.marko_1*content !;${_w0};${_w1}`)($Card_content__walks, $Card_content__template),
	"__tests__/tags/wrap.marko": /*@__PURE__*/ (() => `__tests__/tags/wrap.marko #childScope/0>;${((_w0) => `b/${_w0}&b`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const $input_label__closures = new Set();
	const Card = { content: _content("__tests__/tags/wrap.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $Card_content__x__closures = new Set();
		const $scope1_reason = _scope_reason();
		const x = input.label + "!";
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.promise, (v) => {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", v, 1, $scope0_reason, 2)}</em>`);
				_scope($scope4_id, {}, "__tests__/tags/wrap.marko", "4:6");
			}, 1, "__tests__/tags/wrap.marko_4*content");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/tags/wrap.marko_2_input_promise#0:4/init" : "__tests__/tags/wrap.marko_2_input_promise#0:4/subscribe");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/wrap.marko", "3:4"), $cg__input_promise && "__tests__/tags/wrap.marko_2_input_promise#0:4/subscribe", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, 1, 4, 0)}</b>`);
			_script($scope3_id, "__tests__/tags/wrap.marko_3_x#1:1");
			$cg__input_label && _patch_init($scope3_id, "__tests__/tags/wrap.marko_3_x#1:1/init");
			_subscribe($wi__input_label && $Card_content__x__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/wrap.marko", "5:6"), "__tests__/tags/wrap.marko_3_x#1:1/subscribe");
		}, void 0, "__tests__/tags/wrap.marko_3*content", "__tests__/tags/wrap.marko_2*content", void 0, 1, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"ClosureScopes:x/7": $wi__input_label && $Card_content__x__closures
		}, "__tests__/tags/wrap.marko", "1:2", { x: "2:10" }), $cg__input_label && "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe", 0) || _filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/wrap.marko_fill0", x, !_server_guard($scope0_reason, 1));
		_resume_branch($scope1_id);
	}, $scope0_id, 1) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Card.content({});
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_promise/6": $wi__input_promise && $input_promise__closures,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks$1)};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		label: input.label,
		promise: input.promise
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
