// tags/frame.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/frame.marko": "__tests__/tags/frame.marko; ;<section></section>",
	"__tests__/tags/frame.marko_1*shell": "__tests__/tags/frame.marko_1*shell;b%;<!><!><!>"
});
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html("<section>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/frame.marko", "2:11");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, 0, void 0, void 0, void 0, ["__tests__/tags/frame.marko_1*shell"]);
	_html("</section>");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)(" b");
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D%b/${_w0}& l`)(" b")};${((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $wi__input_q = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	const $input_q__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.as, { class: "box" }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", v, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_3*content");
		$wi__input_as__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:6"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_p#0:6/subscribe", 0);
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_p: input.p }]), 0, _write_guard($scope0_reason, 1), void 0, 1, $scope0_reason, 1);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	frame_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_patch_text($scope4_id, "#text/0", w, void 0, $scope0_reason, 3)}</b>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "6:6");
		}, 1, "__tests__/template.marko_4*content");
		_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_q#0:7/init");
		$wi__input_q && _subscribe(_unfilled_if($scope0_reason, 3) && $input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		$wi__input_q && _resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_p", input.p, 1);
	$scope0_page && _scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.p,
		"ClosureScopes:input_p/8": _write_if($scope0_reason, 2) && $input_p__closures,
		"ClosureScopes:input_q/9": $wi__input_q && $input_q__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1);
