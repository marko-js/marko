// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>interactive</button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $fg__input_p = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.as, { class: "box" }, 1, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "#text/0", v, 1, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 2) && 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_p#0:5/subscribe", 1);
		$wi__input_as__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6"));
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_p: input.p }] : []), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	_html(`<button>interactive</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_p && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#5/subscribers", "input_p");
	_scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.p,
		"ClosureScopes:input_p/6": _write_if($scope0_reason, 2) && $input_p__closures
	}, "__tests__/template.marko", 0, { input_p: ["input.p"] }) || $fg__input_p && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 1)) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 2));
}, 1);
