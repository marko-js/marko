// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_3*content": "__tests__/tags/show-await.marko_3*content,<p>waiting</p>",
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko_1_#text#0/await": "__tests__/tags/show-await.marko_1_#text#0/await;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope2_id, "#text/1", x, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "__tests__/tags/show-await.marko_2_input_label#0:4/init" : "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "3:4"), $cg__input_label && "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
		}, 1, "__tests__/tags/show-await.marko_2*content", _unfilled_if($scope0_reason, 1), 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/tags/show-await.marko_1_input_promise#0:3/init" : "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe");
		$wi__input_promise__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/show-await.marko", "1:2"), $cg__input_promise && "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<p>waiting</p>");
	}, void 0, "__tests__/tags/show-await.marko_3*content", void 0, "__tests__/tags/show-await.marko_1*content", 1, 0, 2);
	_scope($scope0_id, {
		"ClosureScopes:input_label/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures,
		"ClosureScopes:input_promise/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = "<button class=open>pend</button><button class=settle>settle</button><!><!>";
const $walks = " b b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b%;<button class=open>pend</button><button class=settle>settle</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_p#0:7/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:6/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		p: _write_if($scope0_reason, 0) && p,
		resolve
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		p: "1:6",
		resolve: "2:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
