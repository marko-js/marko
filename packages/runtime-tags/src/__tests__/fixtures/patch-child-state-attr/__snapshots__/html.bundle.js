// tags/counter/index.marko
const $template = "<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>";
const $walks = "Eb%c%l l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;Eb%c%l ;<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>" });
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let spins = 0;
	_html(`<section><p>Value ${_text_resume($scope0_id, "a", input.value, 2, $scope0_reason, 0)} (spun ${_text_resume($scope0_id, "b", spins, 2)})</p><button class=spin>spin</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", spins, 1);
	_scope($scope0_id, { g: spins });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `E l/${_w0}& l`)($walks)};${((_w0) => `<main><h1> </h1>${_w0}<button class=inc>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	counter_default({ value: count });
	_patch_child_end();
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		b: _existing_scope($childScope)
	});
}, 1);
