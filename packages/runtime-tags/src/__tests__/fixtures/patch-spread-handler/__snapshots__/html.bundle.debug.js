// template.marko
const $template = "<main><!><em> </em></main>";
const $walks = "D%bD m";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;D%bD ;<main><!><em> </em></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_input_attrs#0:5; ;<a>go</a>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs({
				...input.attrs,
				onClick: _resume(function() {
					count++;
				}, "__tests__/template.marko_1/onClick", $scope1_id)
			}, "#a/0", $scope1_id, "a", 0, $scope0_reason, 1)}>go</a>${_el_resume($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:5");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_attrs#0:5/init");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4", { "EventAttributes:#a/0": ["...{ ...input.attrs, onClick() { count++ } }", "4:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<em>${_text_resume($scope0_id, "#text/1", count)}</em></main>`);
	_scope($scope0_id, {
		input_attrs: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.attrs,
		count
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		count: "1:6"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.attrs, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.attrs));
}, 1);
