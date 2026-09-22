// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<i>loading</i>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<div><!><!></div>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fast__closures = new Set();
	const $input_slow__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<div>");
		_await($scope1_id, "#text/0", input.fast, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "#text/0", a, void 0, $scope0_reason, 1)}</b>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "4:8");
		}, 1, "__tests__/template.marko_3*content", 1);
		_await($scope1_id, "#text/1", input.slow, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", b, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "5:8");
		}, 1, "__tests__/template.marko_4*content", 1);
		_html("</div>");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fast__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4")));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("__tests__/template.marko_2*content", $scope0_id) }) }, 1);
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_fast": $input_fast__closures,
		"ClosureScopes:input_slow": $input_slow__closures
	}, "__tests__/template.marko", 0);
}, 1, 0);
