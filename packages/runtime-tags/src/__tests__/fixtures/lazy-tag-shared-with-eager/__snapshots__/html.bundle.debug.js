// shared.marko
var shared_default = _template("__tests__/shared.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=shared>shared:${_text_resume($scope0_id, "#text/1", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/shared.marko_0");
	_scope($scope0_id, { n }, "__tests__/shared.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// lazy-part.marko
var lazy_part_default = _template("__tests__/lazy-part.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=lazy>");
	shared_default({});
	_html("</div>");
});

// inert-a.marko
const $LazyPart_withLoadAssets = withLoadAssets(lazy_part_default, "ready:__tests__/lazy-part.marko", [{
	type: "visible",
	selector: "body"
}]);
var inert_a_default = _template("__tests__/inert-a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$LazyPart_withLoadAssets({});
});

// inert-b.marko
var inert_b_default = _template("__tests__/inert-b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	shared_default({});
	_html("</section>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	inert_a_default({});
	inert_b_default({});
}, 1);
