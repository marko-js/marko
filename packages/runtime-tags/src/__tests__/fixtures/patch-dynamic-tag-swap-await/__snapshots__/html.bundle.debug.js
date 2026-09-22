// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>interactive</button></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	_html("<main>");
	const $tag = input.as;
	const $input2 = { class: "box" };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", v, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_2*content");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6"));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, "__tests__/template.marko_1*content", 0, $scope0_reason, 1));
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_p: _source_if($scope0_reason, 1) && input.p,
		"ClosureScopes:input_p": $input_p__closures
	}, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1, 1);
