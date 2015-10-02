/**
 * Created by tcstory on 9/19/15.
 */
"use strict";
var MyRegion = (function () {
    function MyRegion() {
        this.items = {};
        this.userProvince = document.querySelector('#user_province');
        this.userCity = document.querySelector('#user_city');
        this.userCounty = document.querySelector('#user_county');
    }
    /**
     * 初始化省份选项
     */
    MyRegion.prototype.init = function () {
        // 初始化选项
        var newOption = document.createElement('option');
        newOption.innerHTML = '省份';
        newOption.setAttribute('value', '');
        this.userProvince.appendChild(newOption);
        newOption = document.createElement('option');
        newOption.innerHTML = '地级市';
        newOption.setAttribute('value', '');
        this.userCity.appendChild(newOption);
        newOption = document.createElement('option');
        newOption.innerHTML = '市、县级市';
        newOption.setAttribute('value', '');
        this.userCounty.appendChild(newOption);
        this.render(0);
    };
    MyRegion.prototype.render = function (which, dataName) {
        var _this = this;
        if (dataName === void 0) { dataName = ''; }
        if (which === 0) {
            if (this.items['0'] != undefined) {
                //this.userCity.innerHTML = '<option value="">地级市</option>';
                //this.userCounty.innerHTML = '<option value="">市、县级市</option>';
                this.items['0'].forEach(function (item, index, array) {
                    var newOption = document.createElement('option');
                    newOption.innerHTML = item;
                    newOption.setAttribute('value', item);
                    _this.userProvince.appendChild(newOption);
                });
            }
            else {
                throw new Error('渲染省份失败');
            }
        }
        else if (which === 1) {
            if (this.items[dataName] != undefined) {
                this.userCity.innerHTML = '<option value="">地级市</option>'; // 渲染之前先清空之前的旧选项
                this.userCounty.innerHTML = '<option value="">市、县级市</option>';
                this.items[dataName].forEach(function (item, index, array) {
                    var newOption = document.createElement('option');
                    newOption.innerHTML = item;
                    newOption.setAttribute('value', item);
                    _this.userCity.appendChild(newOption);
                });
            }
            else {
                throw new Error('渲染地级市失败');
            }
        }
        else if (which === 2) {
            if (this.items[dataName] != undefined) {
                if (this.items[dataName] != undefined) {
                    this.userCounty.innerHTML = '<option value="">市、县级市</option>'; // 渲染之前先清空之前的旧选项
                    this.items[dataName].forEach(function (item, index, array) {
                        var newOption = document.createElement('option');
                        newOption.innerHTML = item;
                        newOption.setAttribute('value', item);
                        _this.userCounty.appendChild(newOption);
                    });
                }
                else {
                    throw new Error('渲染市、县级市失败');
                }
            }
        }
    };
    MyRegion.prototype.binds = function (callback1, callback2) {
        this.userProvince.onchange = callback1;
        this.userCity.onchange = callback2;
    };
    MyRegion.prototype.add = function (id, data) {
        this.items[id] = data;
    };
    /**
     * 给控件设置相应的值,并给下一级控件生成对象的option对象
     * @param which 可选的值为province(省),city(市),county(县)
     * @param value
     */
    MyRegion.prototype.set = function (which, value) {
        if (which === 'province') {
            this.userProvince.value = value;
            var str = '0_' + (this.userProvince.selectedIndex - 1);
            this.render(1, str);
        }
        else if (which === 'city') {
            this.userCity.value = value;
            var str = '0_' + (this.userProvince.selectedIndex - 1) + '_' + (this.userCity.selectedIndex - 1);
            this.render(2, str);
        }
        else if (which === 'county') {
            this.userCounty.value = value;
        }
    };
    return MyRegion;
})();
//# sourceMappingURL=chooseregion.js.map