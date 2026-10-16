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
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_status#12 __tests__/template.marko_0; b b b ;<button>toggle</button><section></section><section></section><section id=partial></section>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>one ${_text_resume($scope1_id, "#text/0", input.b, $wg__input_b * 2)}${_escape(rendering())}</em>`);
		_subscribe($wi__input_b && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:2"), "__tests__/template.marko_1_input_b#0:6/subscribe", $wg__input_b);
		$wg__input_b || _resume_branch($scope1_id);
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<strong>two ${_text_resume($scope2_id, "#text/0", input.b, $wg__input_b * 2)}${_escape(rendering())}</strong>`);
		_subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_b/13": $wi__input_b && 1
		}, "__tests__/template.marko", "17:2"), "__tests__/template.marko_2_input_b#0:6/subscribe", $wg__input_b);
		$wg__input_b || _resume_branch($scope2_id);
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/1", $scope0_id, mode ? one : two);
	_html(`</section>${_el_resume($scope0_id, "#section/1")}<section`);
	_attrs_content({
		class: input.b,
		content: mode ? one : two
	}, "#section/2", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "#section/2")}<section id=partial`);
	_attrs_partial_content({
		class: input.b,
		content: mode ? one : two
	}, { id: 1 }, "#section/3", $scope0_id, "section");
	const status = `${input.b}: ${takeRenders()} content renders`;
	_html(`</section>${_el_resume($scope0_id, "#section/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_status#12", 1, _client_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0_input_b#6_mode#7_one#8_two#9", 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "PatchEffect:__tests__/template.marko_0_status#12", "status");
	_patch_write($scope0_id, "PatchWrite:one", one, 1);
	_patch_write($scope0_id, "PatchWrite:two", two, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", mode, 1);
	$scope0_page ? _scope($scope0_id, {
		input_b: input.b,
		mode,
		one,
		two,
		status,
		"ClosureScopes:input_b/13": $wi__input_b && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		mode: "12:6",
		one: "14:9",
		two: "17:9",
		status: "23:8",
		"EventAttributes:#section/2": ["...{ class: input.b, content: mode ? one : two }", "21:13"],
		"EventAttributes:#section/3": ["...{ class: input.b, content: mode ? one : two }", "22:13"]
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.b, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:status", status, !_server_guard($scope0_reason, 0)));
}, 1);
