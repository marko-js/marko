// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $cg__input_w = _client_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1), $fg__input_v = _filled_guard($scope0_reason, 0), $fg__input_w = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			let x = input.v;
			_if(() => {
				if (x === "a") {
					const $scope2_id = _scope_id();
					_html(`<p>A ${_text_mark($scope2_id, "#text/0", input.w, $wg__input_w * 2)}</p>`);
					$cg__input_w && _patch_render($scope2_id, "__tests__/template.marko_2_input_w#0:5/subscribe");
					_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, {}, "__tests__/template.marko", "5:4"), $cg__input_w && "__tests__/template.marko_2_input_w#0:5/subscribe", $wg__input_w);
					return 0;
				} else {
					const $scope3_id = _scope_id();
					_html(`<p>B ${_text_mark($scope3_id, "#text/0", input.w, $wg__input_w * 2)}</p>`);
					$cg__input_w && _patch_render($scope3_id, "__tests__/template.marko_3_input_w#0:5/subscribe");
					_subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, { "ClosureSignalIndex:input_w/8": $wi__input_w && 1 }, "__tests__/template.marko", "8:4"), $cg__input_w && "__tests__/template.marko_3_input_w#0:5/subscribe", $wg__input_w);
					return 1;
				}
			}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_v#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_v && _patch_render($scope0_id, "__tests__/template.marko_1_input_v#0:4/setup", "input_v");
	$fg__input_w && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_w#5/subscribers", "input_w");
	_scope($scope0_id, {
		input_v: input.v,
		input_w: input.w,
		on,
		"ClosureScopes:input_w/8": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"],
		on: "1:6"
	}) || ($fg__input_v && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 0)), $fg__input_w && _patch_write($scope0_id, "PatchMarkedWrite:input_w", input.w, !_server_guard($scope0_reason, 1)));
}, 1);
