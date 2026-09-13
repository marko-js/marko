// tags/one.marko
_shells({ b: "b,<i>one</i>" });
var one_default = _template_persisted("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>one</i>");
	return input.a + "!";
}, 0, 0);

// tags/two.marko
_shells({ c: "c,<b>two</b>" });
var two_default = _template_persisted("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<b>two</b>");
	return input.a + "?";
}, 0, 0);

// template.marko
_shells({ a: "a;b1bD ;<!><!><p> </p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $tag = input.which ? one_default : two_default;
	const $input2 = { a: input.a };
	const $inputwhichonetwo_scope = _peek_scope_id();
	let x = _dynamic_tag($scope0_id, "a", $tag, $input2, void 0, void 0, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, "a0", $scope0_reason, 0));
	_var($scope0_id, "b", $inputwhichonetwo_scope, "a0");
	_html(`<p>${_patch_text($scope0_id, "c", x, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.which,
		g: _source_if($scope0_reason, 1) && input.a
	});
}, 1, 1);
