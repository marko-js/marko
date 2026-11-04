// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content,",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D l%;<p> </p><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D l%;<p> </p><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = new Set();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:x", x, !_server_guard($scope0_reason, 1));
		_html(`<p>${_text_mark($scope1_id, "#text/0", x, 1, $scope0_reason, 1)}</p>`);
		_try($scope1_id, "#text/1", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id(), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 1);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/show-await.marko_2_x#1:3/subscribe");
			_script($scope2_id, "__tests__/tags/show-await.marko_2_input_label#0:4_x#1:3", 0, ($fg__input_promise || $fg__input_label) && ($cg__input_label || $cg__input_promise ? 2 : 1), (($fg__input_label ? " >>input_label" : "") + ($fg__input_promise ? " >x" : "")).slice(1), "__tests__/tags/show-await.marko_2_input_label#0:4_x#1:3/setup", $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), $cg__input_label && "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe", 0), $cg__input_promise && "__tests__/tags/show-await.marko_2_x#1:3/subscribe", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("failed");
		}, 0, "__tests__/tags/show-await.marko_3*content", "__tests__/tags/show-await.marko_2*content", 1);
		_scope($scope1_id, {
			x,
			"ClosureScopes:x/6": _write_if($scope0_reason, 1) && $await_content__x__closures
		}, "__tests__/tags/show-await.marko", "1:2", { x: "1:8" });
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=swap>swap</button><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([["__tests__/template.marko_1_p#0:7/setup"], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:6/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:6/setup", "input_label");
	_scope($scope0_id, {
		input_label: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		p: $wi__input_show && p
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		p: "1:6"
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2));
}, 1);
