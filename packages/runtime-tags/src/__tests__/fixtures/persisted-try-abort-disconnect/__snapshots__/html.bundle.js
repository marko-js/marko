// template.marko
_shells({
	a0: "a0;Db%;<p>A:<!></p>",
	a1: "a1,caught-a",
	a2: "a2,<em>wait</em>",
	a3: "a3;Db%;<p>A:<!></p>",
	a4: "a4;b%;<!><!><!>",
	a: "a !a5; D l%;<button> </button><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_patch_text($scope4_id, "a", v, 2, $scope0_reason, 0)}</p>`);
			_scope($scope4_id, {});
		}, 1, "a3", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_shell("a2", $scope0_id) }),
		catch: attrTag({ content: _content_shell("a1", $scope0_id) })
	}, 1);
	_script($scope0_id, "a5");
	$scope0_page && _scope($scope0_id, {
		g: n,
		h: $input_a__closures
	});
}, 1, 0);
