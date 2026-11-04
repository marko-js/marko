// template.marko
const $template = "<button>toggle</button><section></section><section></section><section id=partial></section>";
const $walks = " b b b b";
let contentRenders = 0;
function rendering() {
	contentRenders++;
	return "";
}
function takeRenders() {
	const renders = contentRenders;
	contentRenders = 0;
	return renders;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b b ;<button>toggle</button><section></section><section></section><section id=partial></section>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0), $cg__input_b = _client_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 0), $sg__input_b = _server_guard($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	let mode = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "#text/0", input.b, $wg__input_b * 2)}${_escape(rendering())}</em>`);
		$cg__input_b && _patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:6/subscribe");
		_subscribe($wi__input_b && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:2"), $cg__input_b && "__tests__/template.marko_1_input_b#0:6/subscribe", $wg__input_b);
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "#text/0", input.b, $wg__input_b * 2)}${_escape(rendering())}</strong>`);
		$cg__input_b && _patch_render($scope2_id, "__tests__/template.marko_2_input_b#0:6/subscribe");
		_subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_b/14": $wi__input_b && 1
		}, "__tests__/template.marko", "17:2"), $cg__input_b && "__tests__/template.marko_2_input_b#0:6/subscribe", $wg__input_b);
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/1", $scope0_id, mode ? one : two, 0);
	const attrs = {
		class: input.b,
		content: mode ? one : two
	};
	_html(`</section>${_el_mark($scope0_id, "#section/1")}<section`);
	_attrs_content(attrs, "#section/2", $scope0_id, "section", 1);
	_html(`</section>${_el_mark($scope0_id, "#section/2")}<section id=partial`);
	_attrs_partial_content(attrs, { id: 1 }, "#section/3", $scope0_id, "section", 2);
	const status = `${input.b}: ${takeRenders()} content renders`;
	_html(`</section>${_el_mark($scope0_id, "#section/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_status#13", 1, $fg__input_b, "status");
	_script($scope0_id, "__tests__/template.marko_0_attrs#12", 1, $sg__input_b && 2, "input_b");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_b && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_b#6/subscribers", "input_b");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_b#6_mode#7_one#8_two#9/setup", $fg__input_b && "input_b");
	_scope($scope0_id, {
		input_b: input.b,
		mode,
		one,
		two,
		status,
		"ClosureScopes:input_b/14": $wi__input_b && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		mode: "12:6",
		one: "14:9",
		two: "17:9",
		status: "24:8",
		"EventAttributes:#section/2": ["...attrs", "22:13"],
		"EventAttributes:#section/3": ["...attrs", "23:13"]
	}) || ($fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !$sg__input_b), $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:status", status, !$sg__input_b));
}, 1);
