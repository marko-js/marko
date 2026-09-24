// tags/frame.marko
const $template = "<section></section>";
_shells({
	b: "b; ;<section></section>",
	b0: "b0;b%;<!><!><!>"
});
var frame_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const $tag = input.content;
			_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0, void 0, void 0, ["b0"]);
	_html("</section>");
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<b> </b>",
	a3: "a3;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a6;${_w0};${_w1}`)(((_w0) => `D%b/${_w0}& l`)(" b"), ((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_q__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	const $tag = input.as;
	const $input2 = { class: "box" };
	_dynamic_tag($scope0_id, "a", $tag, $input2, _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", v, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a1");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a5", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "a", $tag, $input2, "a4", 0, $scope0_reason, 1));
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	frame_default({ content: _content_elide("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_patch_text($scope4_id, "a", w, void 0, $scope0_reason, 3)}</b>`);
			_scope($scope4_id, {});
		}, 1, "a0");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button>interactive</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a6");
	$scope0_page && _scope($scope0_id, {
		g: _source_if($scope0_reason, 1) && input.p,
		i: $input_p__closures,
		j: $input_q__closures,
		b: _existing_scope($childScope)
	});
}, 1, 1);
