// frag-a.marko
const $template$2 = "<em>alpha</em>";
const $walks$2 = "b";
_shells({ "__tests__/frag-a.marko": "__tests__/frag-a.marko,<em>alpha</em>" });
var frag_a_default = _template_persisted("__tests__/frag-a.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<em>alpha</em>");
}, 0, 0);

// frag-b.marko
const $template$1 = "<strong>beta</strong>";
const $walks$1 = "b";
_shells({ "__tests__/frag-b.marko": "__tests__/frag-b.marko,<strong>beta</strong>" });
var frag_b_default = _template_persisted("__tests__/frag-b.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<strong>beta</strong>");
}, 0, 0);

// template.marko
const $template = "<main><section></section><p> </p></main>";
const $walks = "D bD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D bD ;<main><section></section><p> </p></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main><section>");
	_patch_dynamic_tag($scope0_id, "#section/0", input.mode === "a" ? frag_a_default : frag_b_default, $scope0_owned, 0);
	_attr_content("#section/0", $scope0_id, input.mode === "a" ? frag_a_default : frag_b_default);
	_html(`</section>${_el_resume($scope0_id, "#section/0")}<p>${_patch_text($scope0_id, "#text/1", input.note, void 0, $scope0_owned, 1)}</p></main>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
