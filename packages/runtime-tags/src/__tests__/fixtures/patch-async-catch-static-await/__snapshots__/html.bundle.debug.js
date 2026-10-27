// template.marko
const $template = "<main><p> </p><!></main>";
const $walks = "E l%l";
function fail() {
	return Promise.reject(new Error("down"));
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<p>oops</p>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><p> </p><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", fail(), (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", v, void 0, 0, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "7:6");
		}, 1, "__tests__/template.marko_3*content", 1);
	}, void 0, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<p>oops</p>");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", void 0, void 0, 1);
	_html("</main>");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
