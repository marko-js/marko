// tags/reveal/index.marko
var reveal_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { ["a"]: a, ["aChange"]: aChange } = {
		a: "A",
		aChange(v) {}
	};
	const { "bChange": $bChange, ["b"]: b } = {
		b: "B",
		bChange(v) {}
	};
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	reveal_default({ value: a });
	reveal_default({ value: b });
	_script($scope0_id, "a0");
	_scope($scope0_id, { i: n });
}, 1);
