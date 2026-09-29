// template.marko
const $template = "<main><h1> </h1><!><button>Next</button></main>";
const $walks = "E l%b l";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><h1> </h1><!><button>Next</button></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("v" + n, n), (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "#text/0", value)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, 1, 0, 1);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_n#0:6/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	_html(`<button>Next</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		n,
		"ClosureScopes:n/7": $n__closures
	}, "__tests__/template.marko", 0, { n: "3:6" });
}, 1, 0);
