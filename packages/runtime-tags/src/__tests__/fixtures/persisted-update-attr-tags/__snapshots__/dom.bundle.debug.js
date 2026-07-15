// tags/inner.marko.update.mjs
const $update$2 = (_patch, _live) => {
	if ("ConditionalRenderer:#text/0" in _patch || "BranchScopes:#text/0" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const _merge$2 = _resume("__tests__/tags/inner.marko_0_update", $update$2);
_update_content("__tests__/tags/inner.marko", _merge$2);
function _createPatch$2() {
	return createPatch(_merge$2);
}

// tags/panel.marko.update.mjs
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	if ("ConditionalRenderer:#text/0" in _patch || "BranchScopes:#text/0" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $update$1 = (_patch, _live) => {
	if ("ConditionalRenderer:#text/0" in _patch || "BranchScopes:#text/0" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
	if ("ConditionalRenderer:#text/1" in _patch || "BranchScopes:#text/1" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1");
	if ("BranchScopes:#ul/2" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
const _merge$1 = _resume("__tests__/tags/panel.marko_0_update", $update$1);
_update_content("__tests__/tags/panel.marko", _merge$1);
function _createPatch$1() {
	return createPatch(_merge$1);
}

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $body_content__update = (_patch, _live) => {
	if ("#childScope/0" in _patch) _merge$2(_patch["#childScope/0"], _live["#childScope/0"]);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
_update_content("__tests__/template.marko_3_content", _update_scope);
_update_content("__tests__/template.marko_2_content", $body_content__update);
_update_content("__tests__/template.marko_1_content", _update_scope);
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// data.ts
function getTitle(id) {
	return `server title ${id}`;
}
function getRows(id) {
	return id === 1 ? ["one", "two"] : ["three"];
}

// tags/inner.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_part_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_part = $dynamicTag$1;
const $input$2 = ($scope, input) => $input_part($scope, input.part);
enableBranchesPersisted();
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$2, "D%l", $setup$2, $input$2);

// tags/panel.marko
const $template$1 = "<header><!></header><main><!></main><ul></ul>";
const $walks$1 = "D%lD%l b";
const $setup$1 = () => {};
const $input_header_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $input_body_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_header = $dynamicTag;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_body = $dynamicTag2;
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li><!></li>", "D%l", 0, $for_content__$params);
const $input_item = ($scope, input_item) => {
	if (!updating) $for($scope, [input_item]);
};
const $input$1 = ($scope, input) => {
	$input_header($scope, input.header);
	$input_body($scope, input.body);
	$input_item($scope, input.item);
};
enableBranchesPersisted();
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_4_content", " ", " b"), { row($scope) {
	_text($scope["#text/0"], $scope.row);
} });
const $part_content__input_id = /*@__PURE__*/ _closure_get("input_id", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], getTitle($scope._._.input_id));
	}
}, ($scope) => $scope._._);
const $part_content__setup = ($scope) => {
	if (!updating) $part_content__input_id($scope);
};
const $part_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<p> </p>", "D l", $part_content__setup);
const $body_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_part($scope["#childScope/0"], attrTag({ content: $part_content($scope) }));
};
const $body_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $body_content__setup);
const $header_content__input_id = /*@__PURE__*/ _closure_get("input_id", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], getTitle($scope._.input_id));
	}
});
const $header_content__setup = ($scope) => {
	if (!updating) $header_content__input_id($scope);
};
const $header_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<h2> </h2>", "D l", $header_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_header($scope["#childScope/2"], attrTag({ content: $header_content($scope) }));
	$count($scope, 0);
	$setup__script($scope);
}
const $input_show = /*@__PURE__*/ _const_persisted("input_show", ($scope) => {
	let $body;
	if ($scope.input_show) {
		$body = attrTag({ content: $body_content($scope) });
	}
	$input_body($scope["#childScope/2"], $body);
});
const $input_id__closure = /*@__PURE__*/ _closure($header_content__input_id, $part_content__input_id);
const $input_id = /*@__PURE__*/ _const_persisted("input_id", ($scope) => {
	let $item;
	forOf(getRows($scope.input_id), (row) => {
		$item = attrTags($item, {
			value: row,
			content: $item_content($scope, { row })
		});
	});
	$input_item($scope["#childScope/2"], $item);
	$input_id__closure($scope);
});
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_show($scope, input.show);
};
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
