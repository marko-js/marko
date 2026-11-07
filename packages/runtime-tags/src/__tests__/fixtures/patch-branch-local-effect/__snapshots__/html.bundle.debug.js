// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D l%;<p> </p><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<span>inner</span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 2), $cg__input_inner = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2), $fg__input_title = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_inner = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !$sg__input_title);
			_html(`<p>${_text_mark($scope1_id, "#text/0", label, 1, $scope0_reason, 2)}</p>`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html("<span>inner</span>");
					_script($scope2_id, "__tests__/template.marko_2_label#1:2", 0, _filled_guard($scope0_reason, 2), ">label");
					$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_label#1:2/setup");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6");
					return 0;
				}
			}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 3);
			_filled_guard($scope0_reason, 2) && ($cg__input_show || $cg__input_inner) && _patch_render($scope1_id, "__tests__/template.marko_2_label#1:2/setup", "label");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			$cg__input_inner && _patch_render($scope1_id, "__tests__/template.marko_1_input_inner#0:5/setup");
			_scope($scope1_id, {
				label,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "2:4", { label: "3:12" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_inner#0:5/setup", "input_inner");
	_scope($scope0_id, {
		input_title: _write_if($scope0_reason, 1) && input.title,
		input_inner: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.inner
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_inner: ["input.inner"]
	}) || ($fg__input_title && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title), $fg__input_inner && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_inner", input.inner, !_server_guard($scope0_reason, 3)));
}, 1);
