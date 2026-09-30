// shared.marko
var shared_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=shared>shared:${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, { c: n });
});

// lazy-part.marko
var lazy_part_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div class=lazy>");
	shared_default({});
	_html("</div>");
});

// inert-a.marko
const $LazyPart_withLoadAssets = withLoadAssets(lazy_part_default, "_c", [{
	type: "visible",
	selector: "body"
}]);
var inert_a_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	$LazyPart_withLoadAssets({});
});

// inert-b.marko
var inert_b_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<section>");
	shared_default({});
	_html("</section>");
});

// template.marko
var template_default = _template("e", (input) => {
	_scope_reason();
	_scope_id();
	inert_a_default({});
	inert_b_default({});
}, 1);
