// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<em> </em>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<i>loading</i>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<div><!><!></div>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>x</button></main>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_fast__closures = new Set();
	const $input_show__closures = new Set();
	const $input_slow__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<div>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_source_if($scope0_reason, 3) && $scope0_page && _client_guard($scope0_reason, 3) && _script($scope2_id, "__tests__/template.marko_2_input_fast#5/pending", 0);
				_await($scope2_id, "#text/0", input.fast, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_patch_text($scope4_id, "#text/0", a, void 0, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "5:10");
				}, 1, "__tests__/template.marko_4*content");
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:8");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_await($scope1_id, "#text/1", input.slow, (b) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_patch_text($scope5_id, "#text/0", b, void 0, $scope0_reason, 4)}</em>`);
			_scope($scope5_id, {}, "__tests__/template.marko", "7:8");
		}, 1, "__tests__/template.marko_5*content", 1);
		_html("</div>");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4")));
		$sg__input_show || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("__tests__/template.marko_3*content", $scope0_id) }) }, 1);
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_fast: _source_if($scope0_reason, 2) && input.fast,
		"ClosureScopes:input_fast": $input_fast__closures,
		"ClosureScopes:input_show": $input_show__closures,
		"ClosureScopes:input_slow": $input_slow__closures
	}, "__tests__/template.marko", 0, { input_fast: ["input.fast"] });
}, 1, 0);
