// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $cg__input_x = _client_guard($scope0_reason, 0), $sg__input_x = _server_guard($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $b__closures = new Set();
	let open = true;
	const b = { value: input.x };
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "#text/0", JSON.stringify(b), $wg__input_x)}</i>`);
					$cg__input_x && _patch_render($scope2_id, "__tests__/template.marko_2_b#0:6/subscribe");
					_subscribe($wi__input_x && $b__closures, _scope($scope2_id, {}, "__tests__/template.marko", "5:6"), $cg__input_x && "__tests__/template.marko_2_b#0:6/subscribe", $wg__input_x);
					return 0;
				}
			}, $scope1_id, "#div/0", 1, 1, 1, "</div>", 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_x && _patch_subscribers($scope0_id, "__tests__/template.marko_0_b#6/subscribers", "input_x");
	_scope($scope0_id, {
		open,
		b,
		"ClosureScopes:b/8": $wi__input_x && $b__closures
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		b: "2:8"
	}) || ($fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x), $fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:b", b, !$sg__input_x));
}, 1);
