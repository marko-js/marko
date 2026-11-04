// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n      .b { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19server-19copy-19never-19client-19if-1btags-1bshow-19await-1amarko_0); }\n    ";

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D l%;<p> </p><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D l%;<p> </p><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_2*shell": "__tests__/tags/show-await.marko_2*shell; bD%c%c%;<style></style><b class=b><!>:<!>:<!></b>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $ui__input_promise = _unfilled_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "#text/0", x, 1, $scope0_reason, 1)}</p>`);
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				let n = 1;
				_html(`${_style_html(`${_escape_style_value("red", $scope2_id, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19server-19copy-19never-19client-19if-1btags-1bshow-19await-1amarko_0", 0, 0)};`)}${_el_mark($scope2_id, "#style/0", 0)}<b class=b>${_text_mark($scope2_id, "#text/1", x, 1, $scope0_reason, 1)}:${_text_mark($scope2_id, "#text/2", n, 2, 0, 0, 1)}:${_text_mark($scope2_id, "#text/3", input.label, 2, $scope0_reason, 2)}</b>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe", $cg__input_label);
				$cg__input_promise && _patch_render($scope2_id, "__tests__/tags/show-await.marko_2_x#1:3/setup");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), $cg__input_label && "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/show-await.marko_2*shell"], $scope0_reason, 1);
		_scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", $ui__input_promise && 2, 1);
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && ($ui__input_promise || $ui__input_label) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_promise) && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && $ui__input_promise && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && $cg__input_promise && _patch_subscribers($scope0_id, "__tests__/tags/show-await.marko_0_input_label#4/subscribers", "input_label");
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
