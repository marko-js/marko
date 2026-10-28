// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; bD lD ;<ul></ul><div> </div><p> </p>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<li>static</li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html("<li>static</li>");
			}, 0, $scope1_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			_html(`</ul>${_el_resume($scope1_id, "#ul/0")}<div>${_html_resume($scope1_id, "#text/1", "<b>hi</b>", 1, 0, 0)}</div><p>${_text_resume($scope1_id, "#text/2", input.show, 1, $scope0_reason, 0)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_show#0:3/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
