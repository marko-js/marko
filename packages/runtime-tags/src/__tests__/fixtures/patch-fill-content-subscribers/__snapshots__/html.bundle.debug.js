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
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l");
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_input_label#0:6/subscribe __tests__/template.marko_2_b#0:8/init __tests__/template.marko_2_input_label#0:6_b#0:8/init;D ;<p class=b> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_label#0:6/subscribe __tests__/template.marko_1_a#0:7/init __tests__/template.marko_1_input_label#0:6_a#0:7/init;D ;<p class=a> </p>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l")};${((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template$1, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $a__closures = new Set();
	const $b__closures = new Set();
	let a = 0;
	let b = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	frame_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p class=a>${_text_resume($scope1_id, "#text/0", input.label + ":" + a)}</p>`);
		_subscribe($a__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4")));
	}, $scope0_id) });
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	frame_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p class=b>${_text_resume($scope2_id, "#text/0", input.label + ":" + b)}</p>`);
		_subscribe($b__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/9": $wi__input_label && 1
		}, "__tests__/template.marko", "5:4")));
	}, $scope0_id) });
	_html(`<button class=a>a</button>${_el_resume($scope0_id, "#button/2")}<button class=b>b</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", a, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", b, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		a,
		b,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures,
		"ClosureScopes:a/10": $a__closures,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:b/11": $b__closures,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		a: "1:6",
		b: "2:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
