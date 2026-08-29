// frag-a.marko
_shells({ a: "a,<em>alpha</em>" });
var frag_a_default = _template_persisted("a", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<em>alpha</em>");
}, 0, 0);

// frag-b.marko
_shells({ b: "b,<strong>beta</strong>" });
var frag_b_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<strong>beta</strong>");
}, 0, 0);

// template.marko
_shells({ c: "c;D bD ;<main><section></section><p> </p></main>" });
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main><section>");
	_patch_dynamic_tag($scope0_id, "a", input.mode === "a" ? frag_a_default : frag_b_default, $scope0_owned, 0);
	_attr_content("a", $scope0_id, input.mode === "a" ? frag_a_default : frag_b_default);
	_html(`</section>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_owned, 1)}</p></main>`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
