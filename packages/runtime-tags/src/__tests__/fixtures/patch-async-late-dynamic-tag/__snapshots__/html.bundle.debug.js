// tags/frame.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/frame.marko": "__tests__/tags/frame.marko; ;<section></section>",
	"__tests__/tags/frame.marko_1*shell": "__tests__/tags/frame.marko_1*shell;b%;<!><!><!>"
});
var frame_default = _template_patch("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<section>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			const $tag = input.content;
			_dynamic_tag($scope1_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope1_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/frame.marko", "2:11");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, 0, 0, void 0, void 0, ["__tests__/tags/frame.marko_1*shell"]);
	_html("</section>");
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)(" b");
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D%b/${_w0}& l`)(" b"), ((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	const $input_q__closures = new Set();
	_html("<main>");
	const $tag = input.as;
	const $input2 = { class: "box" };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", v, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_3*content");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_p#6/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_p: input.p }]), 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, "__tests__/template.marko_1*content", 0, $scope0_reason, 1));
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	frame_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_patch_text($scope4_id, "#text/0", w, void 0, $scope0_reason, 3)}</b>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "6:6");
		}, 1, "__tests__/template.marko_4*content");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		$scope0_page && _resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_p: _source_if($scope0_reason, 1) && input.p,
		"ClosureScopes:input_p": $input_p__closures,
		"ClosureScopes:input_q": $input_q__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1, 1);
