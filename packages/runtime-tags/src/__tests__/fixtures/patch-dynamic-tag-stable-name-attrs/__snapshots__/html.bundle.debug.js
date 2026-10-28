// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;Db%;<b>R<!></b>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<b>R${_text_resume($scope1_id, "#text/0", label, 2, 4, 0)}</b>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", Row, { label: input.y }, 1, 0, 0, $wg__input_y, $scope0_reason, 0, 0, 0, 0);
	_scope($scope0_id, { Row: _unfilled_if($scope0_reason, 0) && Row }, "__tests__/template.marko", 0, { Row: "1:9" });
}, 1);
