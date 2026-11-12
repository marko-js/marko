// template.marko
const $global_meta_title_length_key = /*@__PURE__*/ _global_key(4, "meta", "title", "length");
const $global_meta_title_length__script = _script("a1", ($scope) => {
	$global_meta_title_length.r($scope);
	document.body.dataset.flag = String($scope.$.meta.title.length);
});
const $global_meta_title_length = /*@__PURE__*/ _global_closure("a3", $global_meta_title_length_key, $global_meta_title_length__script);
