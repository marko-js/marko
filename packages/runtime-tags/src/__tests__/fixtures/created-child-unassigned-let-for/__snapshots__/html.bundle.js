// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	let items = input.items;
	forOf(items, (item) => {
		_scope_id();
		_html(`<li>${_escape(item)}</li>`);
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { items: input.items }, 0, 0, _write_guard($scope0_reason, 0));
	_html("</main>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && input.on,
		g: _write_if($scope0_reason, 1) && input.items,
		i: c
	});
}, 1);
