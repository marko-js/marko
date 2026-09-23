// tags/wrap.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a4;${_w0};${_w1}`)(((_w0) => `D%b/${_w0}& Db%m`)("D%l"), ((_w0) => `<main><!>${_w0}<button>Count <!></button></main>`)($template)),
	a3: "a3;D ;<p class=error> </p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_error = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.error) {
			const $scope1_id = _scope_id();
			_html(`<p class=error>${_patch_text($scope1_id, "a", input.error, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_error, $sg__input_error, void 0, void 0, ["a3"], $scope0_reason, 0);
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	wrap_default({ content: _content_elide("a2", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button>Count ${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	$scope0_page && _scope($scope0_id, {
		g: _source_if($scope0_reason, 0) && input.error,
		i: count,
		k: $input_promise__closures,
		b: _existing_scope($childScope)
	});
}, 1, () => [wrap_default]);
