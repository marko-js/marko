// tags/tagger/index.marko
_shells({ b: "b,<span>t</span>" });
var tagger_default = _template_persisted("b", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	const g = $global().locale + "!";
	_html("<span>t</span>");
	const $return = g;
	_global_subscribe("b0", $scope0_id);
	return $return;
}, 0, 1);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	_html(`<p>${_patch_text($scope0_id, "c", tagger_default({}))}</p></main>`);
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [tagger_default]);
