// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=el></div>");
	({ content: _content("a2", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<button");
		_attrs_partial_content(input, { "on-click": 1 }, "a", $scope1_id, "button");
		_html(`</button>${_el_resume($scope1_id, "a")} `);
		_script($scope1_id, "a3");
		_script($scope1_id, "a4");
		writeScope($scope1_id, {
			c: input,
			d: input.onClick
		});
	}) }).content({
		"on-click": _resume(function() {
			throw new Error("Should never be called.");
		}, "a0"),
		onClick: _resume(function() {
			document.getElementById("el").textContent += "[onClick(parent)]";
		}, "a1"),
		content: _content_resume("a5", () => {
			_scope_reason();
			_scope_id();
			_html("Click Me");
		}, $scope0_id)
	});
}, 1);
