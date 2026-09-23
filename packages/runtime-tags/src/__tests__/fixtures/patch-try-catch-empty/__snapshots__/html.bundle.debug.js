// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", value, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_2*content", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({}) }, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		n,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1, 0);
