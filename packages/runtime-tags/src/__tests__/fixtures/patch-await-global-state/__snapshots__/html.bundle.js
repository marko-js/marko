// template.marko
_shells({
	a2: "a2;D ;<p> </p>",
	a: "a a3!a1;b%b D ;<!><!><button> </button>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_await($scope0_id, "a", Promise.resolve(count + $global$1.suffix), (v) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", v)}</p>`);
		_scope($scope1_id, {});
	}, 1, 0);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: count });
}, 1);
