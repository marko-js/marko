// template.marko
_shells({ a: "a !a3;b%b D ;<!><!><button> </button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Content = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<em>${_patch_text($scope1_id, "b", label)} ${_text_resume($scope1_id, "c", count, 2)} ${_text_resume($scope1_id, "d", n, 2)}</em>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_subscribe($n__closures, _scope($scope1_id, {
			h: count,
			_: _scope_with_id($scope0_id)
		}), "a2");
	}, $scope0_id) };
	const $tag = input.show ? Content : "span";
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.show,
		g: _source_if($scope0_reason, 1) && input.label,
		h: n,
		i: _source_if($scope0_reason, 0) && Content,
		k: $n__closures
	});
}, 1, 1);
