// tags/loader.marko
const $template$1 = "<div class=ld><!></div>";
const $walks$1 = "D%l";
_shells({
	"__tests__/tags/loader.marko_1*content": "__tests__/tags/loader.marko_1*content;D ;<em> </em>",
	"__tests__/tags/loader.marko_0_#text#0/await": "__tests__/tags/loader.marko_0_#text#0/await;D ;<em> </em>",
	"__tests__/tags/loader.marko": "__tests__/tags/loader.marko;D%;<div class=ld><!></div>"
});
var loader_default = _template_patch("__tests__/tags/loader.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "#text/0", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", v, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {}, "__tests__/tags/loader.marko", "1:18");
	}, 1, "__tests__/tags/loader.marko_0_#text#0/await", 1);
	_html("</div>");
}, 0, 0);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1),
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		loader_default({ promise: input.promise });
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4"));
	}, $scope0_id), { catch: attrTag({ content: _content_elide("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:6");
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1, () => [loader_default]);
