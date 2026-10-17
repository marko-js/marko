// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_label#0:4/init __tests__/template.marko_1_count#0:5/init;D ;<p> </p>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	frame_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label + ":" + count)}</p>`);
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4")));
	}, $scope0_id) });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:count/7": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
