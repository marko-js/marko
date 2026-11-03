// template.marko
_shells({ a: "a !a0 a1; b bD lD l ;<div id=spread></div><input name=spread><div> </div><p> </p><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let html = "<b>a</b>";
	let attrs = { title: "a" };
	_html("<div id=spread");
	_attrs_partial_content(attrs, { id: 1 }, "a", $scope0_id, "div", 0);
	_html(`</div>${_el_resume($scope0_id, "a")}<input name=spread${_attrs_partial(attrs, { name: 1 }, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<div>${_html_resume($scope0_id, "c", html)}</div><p>${_text_resume($scope0_id, "d", input.n, 1, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
