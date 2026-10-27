// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : _resume(() => "-", "__tests__/tags/card.marko_0/g");
	_script($scope0_id, "__tests__/tags/card.marko_0_g#5", 0);
	_scope($scope0_id, {
		open: _write_if($scope0_reason, 0) && open,
		g
	}, "__tests__/tags/card.marko", 0, {
		open: "1:6",
		g: "2:8"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "__tests__/template.marko_0/fn", $scope0_id) });
	_html(`<button>more</button>${_el_resume($scope0_id, "#button/1")}<span>${_text_resume($scope0_id, "#text/2", input.x, _write_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	});
}, 1);
