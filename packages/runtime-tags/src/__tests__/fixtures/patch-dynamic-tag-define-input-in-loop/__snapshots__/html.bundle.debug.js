// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<h5> </h5>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<h4> </h4>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/template.marko_1*content", ({ record }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<h4>${_text_resume($scope1_id, "#text/0", record.name, 1, 4, 0)}</h4>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ record }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<h5>${_text_resume($scope3_id, "#text/0", record.name, 1, 4, 0)}</h5>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "#text/0", row.useA ? Card : Other, { record: row.record }, 1, 0, 0, $wg__input_rows, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_Card#0:4_Other#0:5_row_useA#3_row_record#4/init");
		_write_if($scope0_reason, 0) && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
	}, "id", $scope0_id, "#main/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0")}`);
	_scope($scope0_id, {
		Card: _unfilled_if($scope0_reason, 0) && Card,
		Other: _unfilled_if($scope0_reason, 0) && Other
	}, "__tests__/template.marko", 0, {
		Card: "1:9",
		Other: "4:9"
	});
}, 1);
