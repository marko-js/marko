// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;D ;<em> </em>",
	a2: "a2,loading",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;D ;<span> </span>",
	a: "a !a6;E lD%lD%l Db%;<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $si__input_slow = _source_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_related__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 4)}</h1><section>`);
	_try($scope0_id, "b", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.related, input.slow ? 1 : 0), (related) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", related, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a3", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 6) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_related__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a2", $scope0_id) }) }, 1);
	_html("</section><footer>");
	_await($scope0_id, "c", resolveAfter(input.note, input.slow ? 2 : 0), (note) => {
		const $scope4_id = _scope_id();
		_html(`<span>${_patch_text($scope4_id, "a", note, void 0, $scope0_reason, 2)}</span>`);
		_scope($scope4_id, {});
	}, 1, "a5", 1);
	_html(`</footer><button>Count ${_text_resume($scope0_id, "e", count, 2)}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a6");
	$scope0_page && _scope($scope0_id, {
		i: $si__input_slow && input.related,
		j: _source_if($scope0_reason, 1) && input.slow,
		k: $si__input_slow && input.note,
		m: count,
		n: $input_related__closures,
		o: $input_slow__closures
	});
}, 1, 0);
