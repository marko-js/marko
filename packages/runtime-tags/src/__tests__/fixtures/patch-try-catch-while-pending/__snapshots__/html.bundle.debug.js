// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<em><!> <!></em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%;<em><!> <!></em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", $global$1.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", $global$1.name)} ${_patch_text($scope4_id, "#text/1", v, 2)}</em>`);
			_fill_global_subscribe("__tests__/template.marko_4_$global_name#5/global", $scope4_id);
			_scope($scope4_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_4*content", 1);
		_fill_global_subscribe("__tests__/template.marko_1_$global_promise#2/global", $scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("<s>caught</s>");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", "__tests__/template.marko_1*content");
	_html("</main>");
}, 1);
