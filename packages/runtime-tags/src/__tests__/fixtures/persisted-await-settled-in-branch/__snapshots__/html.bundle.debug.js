// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<b> </b>",
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D%;<section><!></section>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_await($scope1_id, "#text/0", input.value, (v) => {
				const $scope2_id = _scope_id();
				_html(`<b>${_patch_text($scope2_id, "#text/0", v, void 0, $scope0_reason, 2)}</b>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "3:6");
			}, 1, "__tests__/template.marko_1_#text#0/await");
			_html("</section>");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 3)}</p>`);
	$scope0_page && _scope($scope0_id, { input_value: _source_if($scope0_reason, 1) && input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, 0);
