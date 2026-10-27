// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=toggle>toggle</button><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	let show = true;
	const Show = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $sg__v = _server_guard($scope1_reason, 0);
		_filled_guard($scope1_reason, 0) && _unfilled_if($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !$sg__v);
		const f = _bind_resume(function() {
			return v;
		}, "__tests__/template.marko_1/f", $scope1_id);
		_if(() => {
			if (input.x) {
				const $scope3_id = _scope_id();
				_html(`<span>${_patch_text($scope3_id, "#text/0", f(), void 0, $scope1_reason, 0)}</span>`);
				_client_guard($scope1_reason, 0) && _patch_init($scope3_id, "__tests__/template.marko_3_f#1:4/init");
				$scope1_page && _scope($scope3_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_x, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 0);
		$scope1_page ? _subscribe(_unfilled_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, {
			v: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && v,
			f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && f,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			v: "2:16",
			f: "3:10"
		}), "__tests__/template.marko_1_input_x#0:4/subscribe", $wg__input_x) : _filled_guard($scope1_reason, 0) && _client_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", f, !$sg__v);
		$wg__input_x || _resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
			Show.content({ v: input.a });
			_patch_child_end();
			$scope0_page && _scope($scope2_id, { "#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_x: input.x,
		input_a: input.a,
		show,
		"ClosureScopes:input_x/7": _write_if($scope0_reason, 0) && $input_x__closures
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_a: ["input.a"],
		show: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.x, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.a, !_server_guard($scope0_reason, 1)));
}, 1);
