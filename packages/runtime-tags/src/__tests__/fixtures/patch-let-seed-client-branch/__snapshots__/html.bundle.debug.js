// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			let x = input.v;
			if ($scope0_page) _if(() => {
				if (x === "a") {
					const $scope2_id = _scope_id();
					_html(`<p>A ${_text_resume($scope2_id, "#text/0", input.w, $wg__input_w * 2)}</p>`);
					$scope0_page && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_2_input_w#0:5/subscribe", $wg__input_w);
					return 0;
				} else {
					const $scope3_id = _scope_id();
					_html(`<p>B ${_text_resume($scope3_id, "#text/0", input.w, $wg__input_w * 2)}</p>`);
					$scope0_page && _subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						"ClosureSignalIndex:input_w/8": $wi__input_w && 1
					}, "__tests__/template.marko", "8:4"), "__tests__/template.marko_3_input_w#0:5/subscribe", $wg__input_w);
					return 1;
				}
			}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_v: input.v,
		input_w: input.w,
		on,
		"ClosureScopes:input_w/8": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"],
		on: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.v, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.w, !_server_guard($scope0_reason, 1)));
}, 1);
