(function(){

    HTMLDivElement.prototype.internationalCode = function(options,fun){
        "use strict";
        //配置
        var defaultOption = {
            language:'zh-cn',//语言
            default:'+86',//默认值
            allowDrop:true,//允许下拉
            maxLine:4, //下拉列表最大行数
            LineHeight:32//下拉列表每一行的高度
        };
        /**
         * 默认滚动到中心位置显示
         * @param ul 列表所在的dom元素
         * @param li 每一行所在的dom元素
         * @param index 从上到下在列表中的位置，从0开始
         */
        var scrollerToMiddle = function(ul,li,index){
//            var liHeight = window.getComputedStyle(li).height;
            var liWidth = options.LineHeight;
            var offset = liWidth * parseInt(index);
            ul.scrollTo(0,offset);
//            ul.scrollTop = offset;
        }
        /**
         * 隐藏所有的ul下拉区域
         */
        var hideAllUl = function(){
            //隐藏下拉列表区域
            var uls = document.querySelectorAll('ul.internationalCode__countryList');
            for(ul of uls){
                if(!ul.classList.contains('notshow')){
                    ul.classList.add('notshow');
                }
            }
        }
        if(options == undefined){
            options = defaultOption;
        }else{
            var newOptions = defaultOption;
            for(var key in options){
                newOptions[key] = options[key];
            }
            options = newOptions;
        }
        var countryArray;
        if(options.language == 'zh-cn'){
            countryArray = [
                ['-请选择-',''],
                ['阿尔巴尼亚','+355'],
                ['阿尔及利亚','+213'],
                ['阿富汗','+93'],
                ['阿根廷','+54'],
                ['阿拉伯联合酋长国','+971'],
                ['阿鲁巴','+297'],
                ['阿曼','+968'],
                ['阿塞拜疆','+994'],
                ['阿森松岛','+247'],
                ['埃及','+20'],
                ['埃塞俄比亚','+251'],
                ['爱尔兰','+353'],
                ['爱沙尼亚','+372'],
                ['安道尔','+376'],
                ['安哥拉','+244'],
                ['安圭拉岛','+1264'],
                ['安提瓜和巴布达','+1268'],
                ['奥地利','+43'],
                ['澳大利亚','+61'],
                ['澳大利亚海外领地','+672'],
                ['澳门','+853'],
                ['巴巴多斯','+1246'],
                ['巴布亚新几内亚','+675'],
                ['巴哈马','+1242'],
                ['巴基斯坦','+92'],
                ['巴拉圭','+595'],
                ['巴勒斯坦','+970'],
                ['巴林','+973'],
                ['巴拿马','+507'],
                ['巴西','+55'],
                ['白俄罗斯','+375'],
                ['百慕大','+1441'],
                ['保加利亚','+359'],
                ['贝宁','+229'],
                ['比利时','+32'],
                ['冰岛','+354'],
                ['波多黎各','+1787'],
                ['波多黎各','+1939'],
                ['波黑','+387'],
                ['波兰','+48'],
                ['玻利维亚','+591'],
                ['伯利兹','+501'],
                ['博茨瓦纳','+267'],
                ['不丹','+975'],
                ['布基纳法索','+226'],
                ['布隆迪','+257'],
                ['朝鲜','+850'],
                ['赤道几内亚','+240'],
                ['丹麦','+45'],
                ['德国','+49'],
                ['迪戈加西亚','+246'],
                ['东德','+37'],
                ['东帝汶','+670'],
                ['多哥','+228'],
                ['多米尼加共和国','+1809'],
                ['多米尼克','+1767'],
                ['俄罗斯','+7'],
                ['厄瓜多尔','+593'],
                ['厄立特里亚','+291'],
                ['法国','+33'],
                ['法罗群岛','+298'],
                ['法属波利尼西亚','+689'],
                ['法属圭亚那','+594'],
                ['梵蒂冈','+379'],
                ['菲律宾','+63'],
                ['斐济','+679'],
                ['芬兰','+358'],
                ['佛得角','+238'],
                ['福克兰群岛','+500'],
                ['冈比亚','+220'],
                ['刚果共和国（布）','+242'],
                ['刚果民主共和国（金）','+243'],
                ['哥伦比亚','+57'],
                ['哥斯达黎加','+506'],
                ['格林纳达','+1473'],
                ['格陵兰','+299'],
                ['格鲁吉亚','+995'],
                ['古巴','+53'],
                ['瓜德罗普','+590'],
                ['关岛','+1671'],
                ['圭亚那','+592'],
                ['国际电信公众通信服务试验','+991'],
                ['国际费率服务','+979'],
                ['国际海事卫星组织"SNAC"卫星电话','+870'],
                ['国际网络','+882'],
                ['哈萨克斯坦','+7'],
                ['海地','+509'],
                ['韩国','+82'],
                ['荷兰','+31'],
                ['荷兰加勒比区','+599'],
                ['荷属圣马丁','+599'],
                ['黑山','+382'],
                ['洪都拉斯','+504'],
                ['环欧洲服务','+388'],
                ['环球个人通讯服务','+878'],
                ['基里巴斯，吉尔伯特群岛','+686'],
                ['吉布提','+253'],
                ['吉尔吉斯斯坦','+996'],
                ['几内亚','+224'],
                ['几内亚比绍','+245'],
                ['加拿大','+1'],
                ['加纳','+233'],
                ['加蓬','+241'],
                ['柬埔寨','+855'],
                ['捷克共和国','+420'],
                ['捷克斯洛伐克','+42'],
                ['津巴布韦','+263'],
                ['喀麦隆','+237'],
                ['卡塔尔','+974'],
                ['开曼群岛','+1345'],
                ['科摩罗和马约特','+269'],
                ['科特迪瓦','+225'],
                ['科威特','+965'],
                ['克罗地亚','+385'],
                ['肯尼亚','+254'],
                ['库克群岛','+682'],
                ['库拉索','+5999'],
                ['拉脱维亚','+371'],
                ['莱索托','+266'],
                ['老挝','+856'],
                ['黎巴嫩','+961'],
                ['立陶宛','+370'],
                ['利比里亚','+231'],
                ['利比亚','+218'],
                ['列支敦士登','+423'],
                ['留尼汪','+262'],
                ['卢森堡','+352'],
                ['卢旺达','+250'],
                ['罗马尼亚','+40'],
                ['马达加斯加','+261'],
                ['马尔代夫','+960'],
                ['马耳他','+356'],
                ['马拉维','+265'],
                ['马来西亚','+60'],
                ['马里','+223'],
                ['马其顿','+389'],
                ['马绍尔群岛','+692'],
                ['马提尼克','+596'],
                ['毛里求斯','+230'],
                ['毛里塔尼亚','+222'],
                ['美国','+1'],
                ['美属萨摩亚','+1684'],
                ['美属维京群岛','+1340'],
                ['蒙古','+976'],
                ['蒙特塞拉特','+1664'],
                ['孟加拉国','+880'],
                ['秘鲁','+51'],
                ['密克罗尼西亚联邦','+691'],
                ['缅甸','+95'],
                ['摩尔多瓦','+373'],
                ['摩洛哥','+212'],
                ['摩纳哥','+377'],
                ['莫桑比克','+258'],
                ['墨西哥','+52'],
                ['纳米比亚','+264'],
                ['南非','+27'],
                ['南斯拉夫','+38'],
                ['南苏丹','+211'],
                ['瑙鲁','+674'],
                ['尼泊尔','+977'],
                ['尼加拉瓜','+505'],
                ['尼日尔','+227'],
                ['尼日利亚','+234'],
                ['纽埃','+683'],
                ['挪威','+47'],
                ['帕劳','+680'],
                ['葡萄牙','+351'],
                ['日本','+81'],
                ['瑞典','+46'],
                ['瑞士','+41'],
                ['萨尔瓦多','+503'],
                ['萨摩亚','+685'],
                ['塞尔维亚','+381'],
                ['塞拉利昂','+232'],
                ['塞内加尔','+221'],
                ['塞浦路斯','+357'],
                ['塞舌尔','+248'],
                ['桑给巴尔','+259'],
                ['沙特阿拉伯','+966'],
                ['圣多美和普林西比','+239'],
                ['圣赫勒拿','+290'],
                ['圣基茨和尼维斯','+1869'],
                ['圣卢西亚','+1758'],
                ['圣马力诺','+378'],
                ['圣皮埃尔和密克隆群岛','+508'],
                ['圣文森特和格林纳丁斯','+1784'],
                ['斯里兰卡','+94'],
                ['斯洛伐克','+421'],
                ['斯洛文尼亚','+386'],
                ['斯威士兰','+268'],
                ['苏丹','+249'],
                ['苏里南','+597'],
                ['所罗门群岛','+677'],
                ['索马里','+252'],
                ['塔吉克斯坦','+992'],
                ['台湾省','+886'],
                ['泰国','+66'],
                ['坦桑尼亚','+255'],
                ['汤加','+676'],
                ['特克斯和凯科斯群岛','+1649'],
                ['特立尼达和多巴哥','+1868'],
                ['突尼斯','+216'],
                ['图瓦卢，埃利斯群岛','+688'],
                ['土耳其','+90'],
                ['土库曼斯坦','+993'],
                ['托克劳群岛','+690'],
                ['瓦利斯和富图纳群岛','+681'],
                ['瓦努阿图','+678'],
                ['危地马拉','+502'],
                ['委内瑞拉','+58'],
                ['文莱','+673'],
                ['乌干达','+256'],
                ['乌克兰','+380'],
                ['乌拉圭','+598'],
                ['乌兹别克斯坦','+998'],
                ['西班牙','+34'],
                ['希腊','+30'],
                ['香港','+852'],
                ['新加坡','+65'],
                ['新喀里多尼亚','+687'],
                ['新西兰','+64'],
                ['匈牙利','+36'],
                ['叙利亚','+963'],
                ['牙买加','+1876'],
                ['亚美尼亚','+374'],
                ['也门','+967'],
                ['也门民主共和国','+969'],
                ['伊拉克','+964'],
                ['伊朗','+98'],
                ['移动卫星系统','+881'],
                ['以色列','+972'],
                ['意大利','+39'],
                ['印度','+91'],
                ['印度尼西亚','+62'],
                ['英国','+44'],
                ['英属维京群岛','+1284'],
                ['约旦','+962'],
                ['越南','+84'],
                ['赞比亚','+260'],
                ['乍得','+235'],
                ['直布罗陀','+350'],
                ['智利','+56'],
                ['中非共和国','+236'],
                ['中国','+86']
            ];
        }else if(options.language == 'en-us'){
            countryArray = [
                ['-Select-',''],
                ['Afghanistan','+93'],
                ['Albania','+355'],
                ['Algeria','+213'],
                ['America','+1'],
                ['American Samoa','+1684'],
                ['Andorra','+376'],
                ['Angola','+244'],
                ['Anguilla','+1264'],
                ['Antigua and Barbuda','+1268'],
                ['Argentina','+54'],
                ['Armenia','+374'],
                ['Aruba','+297'],
                ['Ascension Island','+247'],
                ['Australia','+61'],
                ['Australian overseas territory','+672'],
                ['Austria','+43'],
                ['Azerbaijan','+994'],
                ['Bahamas','+1242'],
                ['Bahrain','+973'],
                ['Bangladesh','+880'],
                ['Barbados','+1246'],
                ['Belize','+501'],
                ['Benin','+229'],
                ['Bermuda','+1441'],
                ['Bhutan','+975'],
                ['Bolivia','+591'],
                ['Bosnia and Herzegovina','+387'],
                ['Botswana','+267'],
                ['Brazil','+55'],
                ['British Virgin Islands','+1284'],
                ['Brunei','+673'],
                ['Bulgaria','+359'],
                ['Burkina Faso','+226'],
                ['Burma','+95'],
                ['Burundi','+257'],
                ['Byelorussia','+375'],
                ['Cambodia','+855'],
                ['Cameroon','+237'],
                ['Canada','+1'],
                ['Cape Verde','+238'],
                ['Cayman Islands','+1345'],
                ['Central African Republic','+236'],
                ['Chad','+235'],
                ['Chile','+56'],
                ['China','+86'],
                ['Circum-european service','+388'],
                ['Columbia','+57'],
                ['Comorin','+269'],
                ['Cook Islands','+682'],
                ['Costa Rica','+506'],
                ['Cote d\'Ivoire','+225'],
                ['Croatia','+385'],
                ['Cuba','+53'],
                ['Curacao','+5999'],
                ['Cyprus','+357'],
                ['Czech Republic','+420'],
                ['Czechoslovakia','+42'],
                ['Democratic Republic of the Congo','+243'],
                ['Democratic Republic of Yemen','+969'],
                ['Denmark','+45'],
                ['Diego Garcia','+246'],
                ['Djibouti','+253'],
                ['Dominica','+1767'],
                ['Dominican Republic','+1809'],
                ['Dutch Caribbean','+599'],
                ['East Germany','+37'],
                ['East Timor','+670'],
                ['Ecuador','+593'],
                ['Egypt','+20'],
                ['England','+44'],
                ['Equatorial Guinea','+240'],
                ['Eritrea','+291'],
                ['Estonia','+372'],
                ['Ethiopia','+251'],
                ['Falkland Islands','+500'],
                ['Faroe Islands','+298'],
                ['Fiji','+679'],
                ['Finland','+358'],
                ['France','+33'],
                ['French Guiana','+594'],
                ['French Polynesia','+689'],
                ['Gabon','+241'],
                ['Gambia','+220'],
                ['Georgia','+995'],
                ['Germany','+49'],
                ['Ghana','+233'],
                ['Gibraltar','+350'],
                ['Global Mobile Satellite System','+881'],
                ['Greece','+30'],
                ['Greenland','+299'],
                ['Grenada','+1473'],
                ['Guadeloupe','+590'],
                ['Guam','+1671'],
                ['Guatemala','+502'],
                ['Guinea-Bissau','+245'],
                ['Guyana','+592'],
                ['Haiti','+509'],
                ['Honduras','+504'],
                ['Hong Kong','+852'],
                ['Hungary','+36'],
                ['Iceland','+354'],
                ['India','+91'],
                ['Indonesia','+62'],
                ['International Networks','+882'],
                ['International Premium Rate Service','+979'],
                ['Iran','+98'],
                ['Iraq','+964'],
                ['Ireland','+353'],
                ['Israel','+972'],
                ['Italy','+39'],
                ['ITPCS','+991'],
                ['Jamaica','+1876'],
                ['Japan','+81'],
                ['Jordan','+962'],
                ['Katar','+974'],
                ['Kazakhstan','+7'],
                ['Kenya','+254'],
                ['Kiribati','+686'],
                ['Korea','+82'],
                ['Korea','+850'],
                ['Kuwait','+965'],
                ['Kyrgyzstan','+996'],
                ['Laos','+856'],
                ['Latvia','+371'],
                ['Lebanon','+961'],
                ['Lesotho','+266'],
                ['Liberia','+231'],
                ['Libya','+218'],
                ['Liechtenstein','+423'],
                ['Lithuania','+370'],
                ['Luxembourg','+352'],
                ['Macao','+853'],
                ['Macedonia','+389'],
                ['Malawi','+265'],
                ['Malaysia','+60'],
                ['Maldives','+960'],
                ['Mali','+223'],
                ['Malta','+356'],
                ['Marshall Islands','+692'],
                ['Martinique','+596'],
                ['Mauritania','+222'],
                ['Mauritius','+230'],
                ['Mexico','+52'],
                ['Moldova','+373'],
                ['Monaco','+377'],
                ['Mongolia','+976'],
                ['Montserrat','+1664'],
                ['Morocco','+212'],
                ['Mozambique','+258'],
                ['Namibia','+264'],
                ['Nauru','+674'],
                ['Nepal','+977'],
                ['Netherlands','+31'],
                ['New Caledonia','+687'],
                ['New Zealand','+64'],
                ['Nicaragua','+505'],
                ['Niger','+227'],
                ['Nigeria','+234'],
                ['Niue','+683'],
                ['Norway','+47'],
                ['Oman','+968'],
                ['Pakistan','+92'],
                ['Palau','+680'],
                ['Palestine','+970'],
                ['Panama','+507'],
                ['Papua New Guinea','+675'],
                ['Paraguay','+595'],
                ['Peru','+51'],
                ['Philippines','+63'],
                ['Poland','+48'],
                ['Portugal','+351'],
                ['Puerto Rico','+1787'],
                ['Puerto Rico','+1939'],
                ['Republic of Montenegro','+382'],
                ['Reunion','+262'],
                ['Romania','+40'],
                ['Russia','+7'],
                ['Rwanda','+250'],
                ['Saint Helena','+290'],
                ['Saint Lucia','+1758'],
                ['Saint Pierre and Miquelon','+508'],
                ['Saint Vincent and the Grenadines','+1784'],
                ['Salvador','+503'],
                ['Samoa','+685'],
                ['San Marino','+378'],
                ['Sao Tome and Principe','+239'],
                ['Saudi Arabia','+966'],
                ['Senegal','+221'],
                ['Serbia','+381'],
                ['Seychelles','+248'],
                ['Sierra Leone','+232'],
                ['Singapore','+65'],
                ['Sint Maarten','+599'],
                ['Slovakia','+421'],
                ['Slovenia','+386'],
                ['SNAC','+870'],
                ['Solomon Islands','+677'],
                ['Somalia','+252'],
                ['South Africa','+27'],
                ['South Sudan','+211'],
                ['Spain','+34'],
                ['SRI LANKA','+94'],
                ['Sudan','+249'],
                ['Surinam','+597'],
                ['Swaziland','+268'],
                ['Sweden','+46'],
                ['Switzerland','+41'],
                ['Syria','+963'],
                ['Tajikistan','+992'],
                ['Tanzania','+255'],
                ['Thailand','+66'],
                ['The Federated States of Micronesia','+691'],
                ['The Federation of Saint Kitts and Nevis','+1869'],
                ['The Kingdom of Belgium','+32'],
                ['The Republic of Congo','+242'],
                ['The Republic of Guinea','+224'],
                ['The republic of Madagascar','+261'],
                ['The United Arab Emirates','+971'],
                ['Togo','+228'],
                ['Tokelau','+690'],
                ['Tonga','+676'],
                ['Trinidad and Tobago','+1868'],
                ['Tunisia','+216'],
                ['Turkey','+90'],
                ['Turkmenistan','+993'],
                ['Turks and Caicos Islands','+1649'],
                ['Tuvalu','+688'],
                ['TWN-ROC','+886'],
                ['Uganda','+256'],
                ['Ukraine','+380'],
                ['Union of Comoros','+269'],
                ['Universal Personal Telecommunications','+878'],
                ['Uruguay','+598'],
                ['Uzbekistan','+998'],
                ['Vanuatu','+678'],
                ['Vatican','+379'],
                ['Venezuela','+58'],
                ['Vietnam','+84'],
                ['Virgin Islands','+1340'],
                ['Wallis and Futuna','+681'],
                ['Yemen','+967'],
                ['Yugoslavia','+38'],
                ['Zambia','+260'],
                ['Zanzibar','+259'],
                ['Zimbabwe','+263']
            ];
        }
        //国家对应的国际冠码
        var countryMap = new Map(countryArray);

        //添加国际冠码组件区域
        var internationalCodeDom = document.createElement('div');
        internationalCodeDom.setAttribute('class','internationalCode');
        var countryCodeDom = document.createElement('div');
        internationalCodeDom.appendChild(countryCodeDom);
        var ul = document.createElement('ul');
        ul.setAttribute('class','internationalCode__countryList notshow');

        //设置下拉列表最大显示高度
        ul.setAttribute('style','height:' + options.LineHeight * options.maxLine + 'px');
        internationalCodeDom.appendChild(ul);
        this.parentNode.insertBefore(internationalCodeDom,this);

        //允许下拉吗?
        if(options.allowDrop){
            countryCodeDom.setAttribute('class','internationalCode__countryCode allow-dropdown');
             //下拉列表赋值区域点击事件
            countryCodeDom.onclick = function(){
                //判断是否是允许下拉
                if(this.classList.contains('allow-dropdown')){
                    var ul = this.nextSibling;
                    //添加临时样式来确认当前ul是显示的
                    if(ul.classList.contains('notshow')){
                        ul.classList.add('isInterimDisplay');
                    }
                    hideAllUl();
                    if(ul.classList.contains('isInterimDisplay')){
                        ul.classList.remove('notshow');
                        ul.classList.remove('isInterimDisplay');
                    }
                }
            }
        }else{
            countryCodeDom.setAttribute('class','internationalCode__countryCode');
        }

        //添加下拉列表code赋值区域
        var countryCodeContainer = document.createElement('div');
        countryCodeContainer.setAttribute('class','internationalCode__countryCode__codeArea');
        //添加下拉列表name赋值区域
        var countryCodeNameContainer = document.createElement('div');
        countryCodeNameContainer.setAttribute('class','internationalCode__countryCode__nameArea');
        //存在默认值吗?
        if(options.default){
            countryCodeContainer.innerText = options.default;
            for(var [name,code] of countryArray){
                if(code  == options.default){
                    countryCodeNameContainer.innerText = '(' + name + ')';
                    countryCodeDom.setAttribute('title',code + '(' + name  + ')');
                }
            }
        }
        countryCodeDom.appendChild(countryCodeContainer);
        countryCodeDom.appendChild(countryCodeNameContainer);

        //添加下拉列表选取区域
        var scrollLi,scrollIndex;
        for(var index = 0;index < countryArray.length; index++){
            var [countryName,countryCode] = countryArray[index];
            var li = document.createElement('li');
            //判断是否是默认值
            if(countryCode == options.default){
                li.setAttribute('class','internationalCode__countryList__country preferred active');
                //默认值滚动到中心位置显示
                scrollLi = li;
                scrollIndex = index;
            }else{
                li.setAttribute('class','internationalCode__countryList__country preferred');
            }
            li.setAttribute('data-dial-code',countryCode);
            li.setAttribute('data-name-code',countryName);
            ul.appendChild(li);
            var countryCodeDom = document.createElement('span');
            countryCodeDom.setAttribute('class','internationalCode__countryList__country__dialCode');
            countryCodeDom.innerText = countryCode;
            li.appendChild(countryCodeDom);
            var countryNameDom = document.createElement('span');
            countryNameDom.setAttribute('class','internationalCode__countryList__country__countryName');
            countryNameDom.innerText = '(' + countryName + ')';
            li.appendChild(countryNameDom);
            //li添加title
            li.setAttribute('title',countryCode + '(' + countryName  + ')');

            //点击事件，点击li的时候，吧点击的作为active，
            //并且更新countryCode的值，隐藏下拉列表
            li.onclick = function(){
                //移除当前的active
//                var activeLi = document.querySelector('.internationalCode__countryList__country.preferred.active');
                var activeLi = this.parentNode.querySelector('.internationalCode__countryList__country.preferred.active');
                activeLi.classList.remove('active');
                //把点击的对象设置为active
                this.classList.add('active');
                //赋值
//                var codeArea = document.querySelector('.internationalCode__countryCode__codeArea');
                var codeArea = this.parentNode.previousSibling.querySelector('.internationalCode__countryCode__codeArea');
                codeArea.innerText = this.getAttribute('data-dial-code');
                var nameArea = this.parentNode.previousSibling.querySelector('.internationalCode__countryCode__nameArea');
                nameArea.innerText = '(' + this.getAttribute('data-name-code') + ')';
                var countryCodeArea = this.parentNode.previousSibling.setAttribute('title',this.getAttribute('data-dial-code') + '(' + this.getAttribute('data-name-code') + ')');
                //隐藏下拉列表
                var ul = document.querySelector('ul.internationalCode__countryList');
                ul.classList.add('notshow');
                if(fun != undefined){
                    fun(this.getAttribute('data-dial-code'));
                }
            }
        }
        if(scrollLi != undefined &&  scrollIndex != undefined){
            scrollerToMiddle(ul,scrollLi,scrollIndex);
        }

        //点击其他任意位置，隐藏下拉列表
        document.addEventListener('click',function(e){
            if(e.target){
                //判断点击区域是否是下拉列表区域
                if(!(e.target.classList.contains('internationalCode__countryCode')
                || e.target.classList.contains('internationalCode__countryCode__codeArea')
                || e.target.classList.contains('internationalCode__countryCode__nameArea'))){
                    //隐藏所有的下拉区域
                    hideAllUl();
                }
            }
        });
    };

})();

/**
 * 获取url参数
 * @param paramer url参数字符串
 * @return 返回字符串的对应url参数值
 */
function getParamer(paramer){
    var url=window.location.href.split("?")[1];
    //获取url里"?"后面的值
    if(url.indexOf("&")>0){
        //判断是否是一个参数还是多个参数
        urlParamArry=url.split("&");
        //分开每个参数，并放到数组里
        for(var i=0; i<urlParamArry.length; i++){
            var paramerName=urlParamArry[i].split("=");
            //匹配输入的参数和数组循环出来的参数是否一样
            if(paramer==paramerName[0]){
                //返回想要的参数值
                return paramerName[1];
            }
        }
    }else{
        //判断只有个参数
        var paramerValue=url.split("=")[1];
        return paramerValue;
    }
}