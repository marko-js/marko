// card.marko
_shells({ a: "a;D ;<em> </em>" });
var card_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_text_resume($scope0_id, "a", $global$1.brand, void 0, 4, 0)}</em>`);
	_fill_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
_shells({ b: "b !b0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", card_default, {});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: on });
}, 1);
