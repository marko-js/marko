// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tag = "input";
	_html("<div>");
	_dynamic_tag($scope0_id, "a", tag, {});
	_attr_select_value($scope0_id, "b", void 0, _resume(function(next) {
		tag = next;
	}, "a0", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("a")}>a</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "b")}<button>Swap</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: tag });
}, 1);
