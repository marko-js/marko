// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	let open = false;
	const label = "t:" + input.title;
	const show = input.title !== "hide";
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_mark($scope2_id, "#text/0", label, $wg__input_title)}</p>`);
					$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_label#0:6/subscribe");
					_subscribe($wi__input_title && $label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), $cg__input_title && "__tests__/template.marko_2_label#0:6/subscribe", $wg__input_title);
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_title, $wg__input_title, 0, 0, 1);
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_show#0:7/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_show#0:7/setup", "show");
	_scope($scope0_id, {
		open,
		label,
		show,
		"ClosureScopes:label/8": $wi__input_title && $label__closures
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		label: "2:8",
		show: "3:8"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:label", label, !$sg__input_title) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_label#6/subscribers", "label"), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:show", show, !$sg__input_title));
}, 1);
