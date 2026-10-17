// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<em>static</em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<em>static</em>");
			}, void 0, (err) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<b>${_patch_text($scope3_id, "#text/0", err.message)}</b>`);
				_scope($scope3_id, {}, "__tests__/template.marko", "5:8");
			}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", void 0, "");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
