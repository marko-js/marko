// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/big.marko
var big_default = _template("__tests__/tags/big.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<strong>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</strong>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/big.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {
		input_tag: _write_if($scope0_reason, 1) && input.tag,
		input_tagChange: _write_if($scope0_reason, 0) && input.tagChange,
		input_label: input.label,
		T: _write_if($scope0_reason, 2) && T,
		"TagVariableChange:T": input.tagChange || void 0
	}, "__tests__/tags/outer.marko", 0, {
		input_tag: ["input.tag"],
		input_tagChange: ["input.tagChange"],
		input_label: ["input.label"],
		T: "1:6",
		"TagVariableChange:T": ["TChange", "1:6"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		tag: input.big ? big_default : card_default,
		tagChange: _resume(function() {}, "__tests__/template.marko_0/tagChange"),
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
