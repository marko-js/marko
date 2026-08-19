// tags/card/index.marko
const $template$1 = "<section><h2> </h2><p> </p></section>";
const $walks$1 = " E lD m";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section${_patch_attr_class($scope0_id, "#section/0", input.klass, $scope0_owned, 0)}><h2>${_patch_text($scope0_id, "#text/1", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</h2><p>${_patch_text($scope0_id, "#text/2", input.note, $scope0_owned, 2)}${_el_resume($scope0_id, "#text/2")}</p></section>${_el_resume($scope0_id, "#section/0")}`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let note = input.note;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(card_default)) {
		_set_serialize_reason(32);
		_patch_child($scope0_id, "#childScope/0", $childScope);
		card_default({
			title: "fixed",
			klass: "c",
			note
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
