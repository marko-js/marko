// child.marko
_shells({ a: "a;D ;<span> </span>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({ b: "b !b0; D lD%;<button class=n> </button><main><!></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.show ? $Child_withLoadAssets : null, { label: `${input.label}${n}` });
	_html("</main>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.show,
		g: input.label,
		h: n
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.show, !_server_guard($scope0_reason, 0)), _content_withhold(input.show), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label));
}, 1);
