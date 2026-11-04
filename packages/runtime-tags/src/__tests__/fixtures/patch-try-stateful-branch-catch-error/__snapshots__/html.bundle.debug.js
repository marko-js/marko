// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wg__input_p = _write_guard($scope0_reason, 1), $wi__input_p = _write_if($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 0), $fg__input_p = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_p__closures = new Set();
	let show = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", input.p, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_mark($scope4_id, "#text/0", v, $wg__input_p)}</em>`);
					$wi__input_p && _scope($scope4_id, {}, "__tests__/template.marko", "5:6");
				}, $wg__input_p, void 0, 2);
				$cg__input_p && _patch_render($scope3_id, "__tests__/template.marko_3_input_p#0:5/subscribe");
				_subscribe($wi__input_p && $input_p__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), $cg__input_p && "__tests__/template.marko_3_input_p#0:5/subscribe", 0);
				$wg__input_p && _resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", input.title, $wg__input_title)} ${_text_mark($scope2_id, "#text/1", err.message, $wg__err_message * 2)}</p>`);
				$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_input_title#0:4/subscribe");
				_subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:6"), $cg__input_title && "__tests__/template.marko_2_input_title#0:4/subscribe", $wg__input_title || $wg__err_message);
			}, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#4/subscribers", "input_title");
	$fg__input_p && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#5/subscribers", "input_p");
	_scope($scope0_id, {
		input_title: input.title,
		input_p: input.p,
		show,
		"ClosureScopes:input_title/7": $wi__input_title && $input_title__closures,
		"ClosureScopes:input_p/8": $wi__input_p && $input_p__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_p: ["input.p"],
		show: "1:6"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0)), $fg__input_p && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 1)));
}, 1);
