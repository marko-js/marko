// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs(input.attrs, "#a/0", $scope1_id, "a")}>x</a>${_el_resume($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#4");
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4", { "EventAttributes:#a/0": ["...input.attrs", "4:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "1:6" }) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.attrs);
	_resume_branch($scope0_id);
}, 1, 0);
