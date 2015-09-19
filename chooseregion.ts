/**
 * Created by tcstory on 9/19/15.
 */

"use strict";

class MyRegion {
    private items;
    userProvince;
    userCity;
    userCounty;


    constructor() {
        this.items = {};
        this.userProvince = document.querySelector('#user_province');
        this.userCity = document.querySelector('#user_city');
        this.userCounty = document.querySelector('#user_county');

    }

    /**
     * 初始化省份选项
     */
    init() {
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
    }


    render(which:number, dataName='') {
        if (which === 0) {
            if (this.items['0'] != undefined) {
                //this.userCity.innerHTML = '<option value="">地级市</option>';
                //this.userCounty.innerHTML = '<option value="">市、县级市</option>';
                this.items['0'].forEach((item, index, array) => {
                    var newOption = document.createElement('option');
                    newOption.innerHTML = item;
                    newOption.setAttribute('value', item);
                    this.userProvince.appendChild(newOption);
                });
            } else {
                throw new Error('渲染省份失败');
            }
        } else if (which === 1) {
            if (this.items[dataName] != undefined) {
                this.userCity.innerHTML = '<option value="">地级市</option>'; // 渲染之前先清空之前的旧选项
                this.userCounty.innerHTML = '<option value="">市、县级市</option>';
                this.items[dataName].forEach((item, index, array) => {
                    var newOption = document.createElement('option');
                    newOption.innerHTML = item;
                    newOption.setAttribute('value', item);
                    this.userCity.appendChild(newOption);
                });
            } else {
                throw new Error('渲染地级市失败');
            }
        } else if (which === 2) {
            if (this.items[dataName] != undefined) {
                if (this.items[dataName] != undefined) {
                    this.userCounty.innerHTML = '<option value="">市、县级市</option>'; // 渲染之前先清空之前的旧选项
                    this.items[dataName].forEach((item, index, array) => {
                        var newOption = document.createElement('option');
                        newOption.innerHTML = item;
                        newOption.setAttribute('value', item);
                        this.userCounty.appendChild(newOption);
                    });
                } else {
                    throw new Error('渲染市、县级市失败');
                }
            }

        }
    }
    binds(callback1:(e)=>any, callback2:(e)=>any) {
        this.userProvince.onchange = callback1;
        this.userCity.onchange = callback2;
    }

    add(id:string, data:Array<string>) {
        this.items[id] = data;
    }
}
