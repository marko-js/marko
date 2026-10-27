// template.marko
const $template = "<button>toggle</button><section></section>";
const $walks = " b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<button>toggle</button><section></section>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>one ${_text_resume($scope1_id, "#text/0", input.b, $wg__input_b * 2)}</em>`);
		$scope1_page && _subscribe($wi__input_b && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_b#0:4/subscribe", $wg__input_b);
		$wg__input_b || _resume_branch($scope1_id);
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_html(`<strong>two ${_text_resume($scope2_id, "#text/0", input.b, $wg__input_b * 2)}</strong>`);
		$scope2_page && _subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_b/9": $wi__input_b && 1
		}, "__tests__/template.marko", "6:2"), "__tests__/template.marko_2_input_b#0:4/subscribe", $wg__input_b);
		$wg__input_b || _resume_branch($scope2_id);
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/1", $scope0_id, mode ? one : two, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_b: input.b,
		mode,
		one,
		two,
		"ClosureScopes:input_b/9": $wi__input_b && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		mode: "1:6",
		one: "3:9",
		two: "6:9"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.b, !_server_guard($scope0_reason, 0));
}, 1);
