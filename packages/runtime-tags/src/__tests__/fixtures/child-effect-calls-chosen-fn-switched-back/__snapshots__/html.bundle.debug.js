// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_fn#3", $wg__input_label);
	_scope($scope0_id, { fn: input.fn }, "__tests__/tags/child.marko", 0, { fn: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_pick = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let flag = 0;
	const fa = _resume(function() {
		flag = 1;
		const m = document.querySelector("main");
		m.dataset.a = String(+(m.dataset.a || 0) + 1);
	}, "__tests__/template.marko_0/fa", $scope0_id);
	const fb = _resume(function() {
		flag = 2;
		const m = document.querySelector("main");
		m.dataset.b = String(+(m.dataset.b || 0) + 1);
	}, "__tests__/template.marko_0/fb", $scope0_id);
	_html("<main>");
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	child_default({
		label: input.x,
		fn: input.pick ? fa : fb
	});
	_html(`<p>${_text_resume($scope0_id, "#text/1", flag)}</p></main>`);
	_scope($scope0_id, {
		fa: $wi__input_pick && fa,
		fb: $wi__input_pick && fb,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		fa: "2:8",
		fb: "3:8"
	});
}, 1);
