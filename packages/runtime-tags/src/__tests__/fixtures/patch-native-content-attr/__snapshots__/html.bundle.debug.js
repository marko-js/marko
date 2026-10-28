// frag-a.marko
const $template$2 = "<em>alpha</em>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/frag-a.marko": "__tests__/frag-a.marko,<em>alpha</em>" });
var frag_a_default = _template("__tests__/frag-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<em>alpha</em>");
});

// frag-b.marko
const $template$1 = "<strong>beta</strong>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/frag-b.marko": "__tests__/frag-b.marko,<strong>beta</strong>" });
var frag_b_default = _template("__tests__/frag-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<strong>beta</strong>");
});

// template.marko
const $template = "<main><section></section><p> </p></main>";
const $walks = "D bD m";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D bD ;<main><section></section><p> </p></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main><section>");
	_attr_content("#section/0", $scope0_id, input.mode === "a" ? frag_a_default : frag_b_default, 0, void 0, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 0))}<p>${_text_resume($scope0_id, "#text/1", input.note, void 0, $scope0_reason, 1)}</p></main>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
