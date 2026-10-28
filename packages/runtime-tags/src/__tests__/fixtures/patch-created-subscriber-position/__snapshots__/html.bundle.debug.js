// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});

// template.marko
const $template = "<!><!><button class=a>a</button><button class=b>b</button>";
const $walks = "b%b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content __tests__/template.marko_3_input_label#0:6/subscribe __tests__/template.marko_3_b#0:8/init __tests__/template.marko_3_input_label#0:6_b#0:8/init;D%c%;<p class=b><!> <!></p>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_input_label#0:6/subscribe __tests__/template.marko_2_a#0:7/init __tests__/template.marko_2_input_label#0:6_a#0:7/init;D ;<p class=a> </p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b b ;<!><!><button class=a>a</button><button class=b>b</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)("D%l", "D%l")};${/*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$1, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $a__closures = new Set();
	const $b__closures = new Set();
	let a = 0;
	let b = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<main>");
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			frame_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p class=a>${_text_resume($scope2_id, "#text/0", input.label + ":" + a)}</p>`);
				_subscribe($a__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6")));
			}, $scope1_id, 1) });
			_patch_child_end();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			frame_default({ content: _content("__tests__/template.marko_3*content", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p class=b>${_text_resume($scope3_id, "#text/0", b)} ${_text_resume($scope3_id, "#text/1", input.label + ":" + b, 2)}</p>`);
				_subscribe($b__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/9": $wi__input_label && 1
				}, "__tests__/template.marko", "6:6")));
			}, $scope1_id, 1) });
			_patch_child_end();
			_html("</main>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=a>a</button>${_el_resume($scope0_id, "#button/1")}<button class=b>b</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		a,
		b,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures,
		"ClosureScopes:a/10": $a__closures,
		"ClosureScopes:b/11": $b__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		a: "1:6",
		b: "2:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
