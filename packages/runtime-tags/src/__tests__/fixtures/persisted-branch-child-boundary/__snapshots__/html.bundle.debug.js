// tags/loader.marko
const $template$1 = "<div class=ld><!></div>";
const $walks$1 = "D%l";
_shells({
	"__tests__/tags/loader.marko_1*content": "__tests__/tags/loader.marko_1*content; ; ",
	"__tests__/tags/loader.marko_0_#text#0/await": "__tests__/tags/loader.marko_0_#text#0/await; ; ",
	"__tests__/tags/loader.marko": "__tests__/tags/loader.marko;D%;<div class=ld><!></div>"
});
var loader_default = _template_persisted("__tests__/tags/loader.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "#text/0", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(_patch_text($scope1_id, "#text/0", v, void 0, $scope0_owned, 0));
		_scope($scope1_id, {}, "__tests__/tags/loader.marko", "1:18");
	}, void 0, "__tests__/tags/loader.marko_0_#text#0/await", 1);
	_html("</div>");
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<em>closed</em>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			loader_default({ promise: input.promise });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && _scope($scope2_id, {}, "__tests__/template.marko", "5:4");
			return 1;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"]);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { input_promise: input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1, () => [loader_default]);
