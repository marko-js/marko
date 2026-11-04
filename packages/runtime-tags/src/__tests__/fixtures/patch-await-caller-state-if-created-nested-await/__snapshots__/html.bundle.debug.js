// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D ;<em> </em>",
	"__tests__/tags/show-await.marko_1_#text#2/await": "__tests__/tags/show-await.marko_1_#text#2/await;D ;<em> </em>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D%c%l%;<p><!>:<!></p><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D%c%l%;<p><!>:<!></p><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 1);
		_html(`<p>${_text_mark($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)}:${_text_mark($scope1_id, "#text/1", x, 2, $scope0_reason, 0)}</p>`);
		_await($scope1_id, "#text/2", Promise.resolve(input.label), (y) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "#text/0", y, 1, $scope0_reason, 1)}</em>`);
			_scope($scope2_id, {}, "__tests__/tags/show-await.marko", "3:4");
		}, 1, "__tests__/tags/show-await.marko_2*content", $ui__input_label && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe", 1);
		_subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2"), _client_guard($scope0_reason, 1) && "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { "ClosureScopes:input_label/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = "<button class=open>pend</button><button class=settle>settle</button><!><!>";
const $walks = " b b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b%;<button class=open>pend</button><button class=settle>settle</button><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([["__tests__/template.marko_1_p#0:7/setup"], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_mark($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_mark($scope0_id, "#button/1")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:6/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:6/setup", "input_label");
	_scope($scope0_id, {
		input_label: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label,
		p: _write_if($scope0_reason, 0) && p,
		resolve
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		p: "1:6",
		resolve: "2:6"
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
