// child.marko
_shells({ a: "a;Db%;<span class=child>child <!></span>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_text_mark($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// other.marko
_shells({ b: "b;Db%;<span class=other>other <!></span>" });
var other_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=other>other ${_text_mark($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	c: "c; ;<main></main>",
	c3: "c3 !c0; b%;<button>toggle</button><!><!>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let alt = false;
			_html(`<button>toggle</button>${_el_mark($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", other_default, { label: input.label });
			_script($scope1_id, "c0");
			_patch_render($scope1_id, "c1", _filled_guard($scope0_reason, 1) && ">e");
			_patch_fill($scope1_id, "vc2", alt, 1);
			_scope($scope1_id, {
				c: alt,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c3"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "c4", "e");
	_scope($scope0_id, { e: input.label }) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
