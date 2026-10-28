// frag-a.marko
_shells({ a: "a,<em>alpha</em>" });
var frag_a_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<em>alpha</em>");
});

// frag-b.marko
_shells({ b: "b,<strong>beta</strong>" });
var frag_b_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<strong>beta</strong>");
});

// template.marko
_shells({ c: "c;D bD ;<main><section></section><p> </p></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main><section>");
	_attr_content("a", $scope0_id, input.mode === "a" ? frag_a_default : frag_b_default, 0, 1, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<p>${_text_resume($scope0_id, "b", input.note, 1, $scope0_reason, 1)}</p></main>`);
	_scope($scope0_id, {});
}, 1);
