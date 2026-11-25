// template.marko
function $onClick() {
	document.getElementById("el").textContent += "[onClick(parent)]";
}
function $onclick() {
	throw new Error("Should never be called.");
}
_resume("a1", $onClick);
_resume("a0", $onclick);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=el></div>");
	({ content: _content("a2", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<button");
		_attrs_partial_content(input, { "on-click": 1 }, "a", $scope1_id, "button");
		_html(`</button>${_el_mark($scope1_id, "a")} `);
		_script($scope1_id, "a3");
		_script($scope1_id, "a4");
		_scope($scope1_id, { d: input.onClick });
	}, $scope0_id) }).content({
		"on-click": $onclick,
		onClick: $onClick,
		content: _content("a5", () => {
			_scope_reason();
			_scope_id();
			_html("Click Me");
		}, $scope0_id)
	});
}, 1);
