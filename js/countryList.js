(function(){
    HTMLSelectElement.prototype.countryList = function(){
//        console.log(this);
        function matchCustom(params, data) {
            // 如果没有搜索条件，返回所有的数据
            if ($.trim(params.term) === '') {
              return data;
            }

            // 如果没有“文本”属性，则不要显示条目
            if (typeof data.text === 'undefined') {
              return null;
            }

            // 'params.term' 属性是用来搜索的
            // 'data.text'属性是数据用来展示的
            if (data.text.toLowerCase().indexOf(params.term.toLowerCase()) > -1) {
              var modifiedData = $.extend({}, data, true);
//              modifiedData.text += ' (matched)';

              return modifiedData;
            }

            // 返回null 如果搜索条件不应该被显示
            return null;
        }
        $(this).select2({
            matcher:matchCustom
        });
    };
})();