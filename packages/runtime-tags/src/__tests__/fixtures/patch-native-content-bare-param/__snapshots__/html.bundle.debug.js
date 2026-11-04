// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<div></div>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Frag = { content: _content_resume("__tests__/template.marko_1*content", (x) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", typeof x, 1, 4, 0)}</em>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_html("<div>");
	_attr_content("#div/0", $scope0_id, input.show ? Frag : undefined, 0, 1, $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "#div/0", _updates_from($scope0_reason, 0))}`);
	_scope($scope0_id, { Frag: _unfilled_if($scope0_reason, 0) && Frag }, "__tests__/template.marko", 0, { Frag: "1:9" });
}, 1);
