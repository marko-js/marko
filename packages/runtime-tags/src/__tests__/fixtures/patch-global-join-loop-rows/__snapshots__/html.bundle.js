// template.marko
_shells({ a: "a !a1; b b ;<button class=dec>-</button><button class=inc>+</button><ul></ul>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<button class=dec>-</button>${_el_resume($scope0_id, "a")}<button class=inc>+</button>${_el_resume($scope0_id, "b")}<ul>`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}:${_text_resume($scope1_id, "b", $global$1.x, $scope0_page * 2)}</li>`);
		_fill_global_subscribe("a0", $scope0_id, 1);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: n });
}, 1);
