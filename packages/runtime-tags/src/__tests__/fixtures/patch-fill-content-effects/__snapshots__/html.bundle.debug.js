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
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button> </button>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& D l`)("D%l", "D%l", "D%l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& D l`)("D%l", "D%l", "D%l")};${((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button> </button>`)($template$1, $template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	const $input_title__closures = new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	frame_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label + ": " + count)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1_input_label#0:7");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_label#0:7/subscribe"), "__tests__/template.marko_1_count#0:9/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	frame_default({ content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.label + ": " + count)}</p>`);
		_script($scope2_id, "__tests__/template.marko_2_input_label#0:7");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/10": $wi__input_label && 1,
			"ClosureSignalIndex:count/12": 1
		}, "__tests__/template.marko", "6:2"), "__tests__/template.marko_2_input_label#0:7/subscribe"), "__tests__/template.marko_2_count#0:9/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/2", 2);
	frame_default({ content: _content("__tests__/template.marko_3*content", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", input.title + ": " + count)}</p>`);
		_script($scope3_id, "__tests__/template.marko_3_input_title#0:8");
		_subscribe($count__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count/12": 2
		}, "__tests__/template.marko", "10:2"), "__tests__/template.marko_3_input_title#0:8/subscribe"), "__tests__/template.marko_3_count#0:9/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "#text/4", count)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		input_title: input.title,
		count,
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures,
		"ClosureScopes:count/12": $count__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"ClosureScopes:input_title/11": $wi__input_title && $input_title__closures,
		"#childScope/2": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_title: ["input.title"],
		count: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.title, !_server_guard($scope0_reason, 1)));
}, 1);
