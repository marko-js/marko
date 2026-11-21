// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>one</button>${_el_mark($scope0_id, "#button/0")}<button>two</button>${_el_mark($scope0_id, "#button/1")}<button>three</button>${_el_mark($scope0_id, "#button/2")}<button>four</button>${_el_mark($scope0_id, "#button/3")}<button>five</button>${_el_mark($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_x#7_input_onClick#9");
	_script($scope0_id, "__tests__/template.marko_0_input_count#8");
	_script($scope0_id, "__tests__/template.marko_0_input_x#7");
	_scope($scope0_id, {
		input_x: input.x,
		input_count: input.count,
		input_onClick: input.onClick
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_count: ["input.count"],
		input_onClick: ["input.onClick"]
	});
}, 1);
