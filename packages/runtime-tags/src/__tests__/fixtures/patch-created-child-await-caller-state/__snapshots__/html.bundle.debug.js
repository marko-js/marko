// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content;D ;<p> </p>",
	"__tests__/tags/card.marko_0_#text#0/await": "__tests__/tags/card.marko_0_#text#0/await;D ;<p> </p>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, 1, $scope0_reason, 0)}</p>`);
		_scope($scope1_id, {}, "__tests__/tags/card.marko", "1:2");
	}, 1, "__tests__/tags/card.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
});

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=toggle>toggle</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_n#0:6/init"], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c")};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ promise: Promise.resolve(n) });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			card_default({ promise: input.p });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_p#0:5/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.p,
		n
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.p, !_server_guard($scope0_reason, 1));
}, 1);
