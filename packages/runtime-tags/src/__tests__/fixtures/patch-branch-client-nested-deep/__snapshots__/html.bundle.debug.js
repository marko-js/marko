// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_b = _write_if($scope0_reason, 1), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			if ($scope0_page) _if(() => {
				if (input.a) {
					const $scope2_id = _scope_id();
					if ($scope0_page) _if(() => {
						if (input.b) {
							const $scope3_id = _scope_id();
							_html("<p>both</p>");
							$wi__input_b && _scope($scope3_id, {}, "__tests__/template.marko", "5:8");
							return 0;
						}
					}, $scope2_id, "#text/0", $wg__input_b, $wg__input_b, 0, 0, 1);
					_subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_2_input_b#0:5/subscribe", $wg__input_b);
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_a, $wg__input_a);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		open,
		"ClosureScopes:input_b/8": $wi__input_b && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.b, !_server_guard($scope0_reason, 1)));
}, 1);
