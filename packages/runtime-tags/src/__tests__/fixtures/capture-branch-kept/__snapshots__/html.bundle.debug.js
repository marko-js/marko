// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/probe.marko
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/probe.marko", 0, { get: "1:10" });
});

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $if_content__s__closures = new Set();
			const s = input.show;
			_set_scope_reason(2);
			let $item;
			forOf(items, (item) => {
				$item = attrTags($item, { content: _content("__tests__/tags/child.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (s) {
							const $scope3_id = _scope_id();
							_html("<span>shown</span>");
							$wi__input_show && _scope($scope3_id, {}, "__tests__/tags/child.marko", "7:15");
							return 0;
						}
					}, $scope2_id, "#text/0", $wg__input_show, $wg__input_show, 0, 0, 1);
					_subscribe($wi__input_show && $if_content__s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "7:8"), "__tests__/tags/child.marko_2_s#1:2/subscribe", $wg__input_show);
					$wg__input_show || _resume_branch($scope2_id);
				}, $scope1_id) });
			});
			const $childScope = _peek_scope_id();
			list_default({ item: $item });
			const $childScope2 = _peek_scope_id();
			probe_default({ get: _resume(function() {
				return "s:" + s;
			}, "__tests__/tags/child.marko_1/get", $scope1_id) });
			_scope($scope1_id, {
				s,
				_: _scope_with_id($scope0_id),
				"ClosureScopes:s/9": $wi__input_show && $if_content__s__closures,
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": $wi__input_show && _existing_scope($childScope2)
			}, "__tests__/tags/child.marko", "3:2", { s: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {
		input_show: _write_if($scope0_reason, 0) && input.show,
		items
	}, "__tests__/tags/child.marko", 0, {
		input_show: ["input.show"],
		items: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1 | _write_guard($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id();
	child_default({
		on: input.on,
		show: input.show
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
