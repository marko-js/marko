// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2,<i>loading</i>",
	a3: "a3;D ;<b> </b>",
	a4: "a4;D ;<em> </em>",
	a5: "a5;D%b%;<div><!><!></div>",
	a: "a !a6;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fast__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<div>");
		_await($scope1_id, "a", input.fast, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "a", a, void 0, $scope0_reason, 1)}</b>`);
			_scope($scope3_id, {});
		}, 1, "a1", 1);
		_await($scope1_id, "b", input.slow, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "a", b, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", 1);
		_html("</div>");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fast__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a2", $scope0_id) }) }, 1);
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	$scope0_page && _scope($scope0_id, {
		g: $input_fast__closures,
		h: $input_slow__closures
	});
}, 1, 0);
