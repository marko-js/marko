// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_sel_id#0:7/subscribe __tests__/template.marko_2_sel_id#0:7_size_id#4/setup!__tests__/template.marko_2; D ;<button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $sel_id__closures = new Set();
	const sizes = [{ id: "s" }, { id: "m" }];
	let sel = sizes[0];
	_if(() => {
		if (input.b) {
			const $scope1_id = _scope_id();
			_for_of(sizes, (size) => {
				const $scope2_id = _scope_id();
				_html(`<button${size.id === sel.id ? " class=on" : ""}>${_text_mark($scope2_id, "#text/1", size.id, 1, 0, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_write($scope2_id, "PatchWrite:size", size, 1);
				_patch_write($scope2_id, "PatchWrite:size_id", size?.id, 1);
				_subscribe($sel_id__closures, _scope($scope2_id, {
					size,
					size_id: size?.id,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "4:4", {
					size: "4:8",
					size_id: ["size.id", "4:8"]
				}), "__tests__/template.marko_2_sel_id#0:7/subscribe");
			}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:sizes", sizes);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_b, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		sizes: _unfilled_if($scope0_reason, 0) && sizes,
		sel_id: _write_if($scope0_reason, 0) && sel?.id,
		"ClosureScopes:sel_id/9": $sel_id__closures
	}, "__tests__/template.marko", 0, {
		sizes: "1:8",
		sel_id: ["sel.id", "2:6"]
	});
	$wg__input_b || _resume_branch($scope0_id);
}, 1);
