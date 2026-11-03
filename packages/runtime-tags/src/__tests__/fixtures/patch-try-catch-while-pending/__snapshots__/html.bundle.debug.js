// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<em><!> <!></em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<s>caught</s>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<i>loading</i>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%;<em><!> <!></em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", $global$1.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "#text/0", $global$1.name, 1, 4, 0)} ${_text_resume($scope4_id, "#text/1", v, 2, 4, 0)}</em>`);
			_fill_global_subscribe("__tests__/template.marko_4_$global_name#0:9", $scope4_id);
			_scope($scope4_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_4*content", void 0, 1);
		_fill_global_subscribe("__tests__/template.marko_1_$global_promise#0:7", $scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<s>caught</s>");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 0, 0, 3);
	_html("</main>");
}, 1);
