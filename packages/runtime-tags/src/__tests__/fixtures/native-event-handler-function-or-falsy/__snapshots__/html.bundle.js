// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>one</button>${_el_mark($scope0_id, "a")}<button>two</button>${_el_mark($scope0_id, "b")}<button>three</button>${_el_mark($scope0_id, "c")}<button>four</button>${_el_mark($scope0_id, "d")}<button>five</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: input.x,
		i: input.count,
		j: input.onClick
	});
}, 1);
