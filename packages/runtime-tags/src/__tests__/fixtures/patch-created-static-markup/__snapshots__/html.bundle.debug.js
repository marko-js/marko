// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; bD lD ;<ul></ul><div> </div><p> </p>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<li>static</li>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html("<li>static</li>");
			}, 0, $scope1_id, "#ul/0", 1, 1, 0, void 0, void 0, "__tests__/template.marko_2*shell", 0, 0);
			_html(`</ul>${_el_resume($scope1_id, "#ul/0")}<div>${_patch_html($scope1_id, "#text/1", "<b>hi</b>", void 0, 0, 0)}</div><p>${_patch_text($scope1_id, "#text/2", input.show, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
