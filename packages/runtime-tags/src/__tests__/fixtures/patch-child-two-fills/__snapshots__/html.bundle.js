// tags/card/index.marko
_shells({ b: "b;D lD ;<h3> </h3><p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h3><p>${_text_resume($scope0_id, "b", input.body, 1, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.title,
		f: input.body,
		g: show
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.title, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va2", input.body, !_server_guard($scope0_reason, 2)));
}, 1);
