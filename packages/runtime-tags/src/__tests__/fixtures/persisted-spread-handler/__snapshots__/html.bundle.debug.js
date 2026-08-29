// template.marko
const $template = "<main><!><em> </em></main>";
const $walks = "D%bD m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;D%bD ;<main><!><em> </em></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_input_attrs#5; ;<a>go</a>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attrs({
				...input.attrs,
				onClick: _resume(function() {
					count++;
				}, "__tests__/template.marko_1/onClick", $scope1_id)
			}, "#a/0", $scope1_id, "a", void 0, $scope0_owned, 2)}>go</a>${_el_resume($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#5");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4", { "EventAttributes:#a/0": ["...{ ...input.attrs, onClick() { count++ } }", "4:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<em>${_text_resume($scope0_id, "#text/1", count)}</em></main>`);
	$scope0_reason && _scope($scope0_id, {
		input_attrs: input.attrs,
		count
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
