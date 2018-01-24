
<template>
  <div class="main index">
        <div class="h_10"></div>
        <div class="h_10"></div>
        <div class="s_main1080 s_warp">
            <img src="../../static/images/setp2.png" alt="">
        </div>
        <div class="s_main1080 main" id="dropdown1">
            <div class="row-s selectingoffer">
                <h5>
                    <span class="pull-right">
                        <img src="../../static/images/corporation_1.png" alt="">
                        <button class="s-button-1" @click="adjustBrand">调整品牌</button>
                    </span>
                    <img src="/images/icon-car.png" alt="" class="selectingoffer-car-img">
                    <span> 别克SGM7104LAA1轿车</span>
                </h5>
                <div class="row">
                    <div class="col-sm-3 text-left">
                        车主:
                        <span>*填写行驶证上的车主姓名</span>
                    </div>
                    <div class="col-sm-2 text-left">
                        是否过户:
                        <span>否</span>
                    </div>
                    <div class="col-sm-3 text-left">
                        车架号:
                        <span> LS4AAB*******2393</span>
                    </div>
                    <div class="col-sm-3 text-left">
                        发动机号:
                        <span>B**C5</span>
                    </div>
                </div>
                <div class="s-lines-style"></div>
                <div class="row s-span1">
                    <span>所在省份：
                        <span>上海市</span> 协商价值：
                        <span>129900.0</span> 实际价值：
                        <span>129900.0</span> 交通违法系数：
                        <span>0.00</span>
                    </span>
                </div>
                <div class="row s-selectingoffers-list">
                    <div class="col-sm-3">
                        <div class="title">
                            <span class="span-sel">商业险选择</span>
                            <span>
                                    <input type="checkbox" name="my-checkbox" data-on-text="是" data-off-text="否" checked>
                                <!-- <input type="checkbox" class="btn-switch postion_ab"> -->
                            </span>
                            <span class="span-sel2">投保</span>
                            <p>
                                生效日期：
                                <input type="text" name="" id="" class="form-control form_datetime" placeholder="">
                            </p>
                        </div>
                        <div class="content">
                            <h4>保障项目</h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <span>车辆损失保险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>第三者责任保险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>全车盗抢保险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>车上人员责任保险（司机）</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>车上人员责任保险（乘客）</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>玻璃单独破碎险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>自燃损失险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>车身划痕损失险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>指定修理厂险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>车辆损失保险无法找到第三方特约险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>发动机涉水损失险</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                                <li class="list-group-item">
                                    <span>不计免赔特约</span>
                                    <img src="../../static/images/icon-c.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!--option1-->
                    <div class="col-sm-3 s-option s-right-sol s-border-left s-active S-Checkbox-Radio1" data-type='s-active'>
                        <div class="title">
                            <h2>推荐方案 86%</h2>
                            <h1>￥
                                <i>5775.14元</i>
                            </h1>
                            <h3>市场：7234.60元</h3>
                        </div>
                        <div class="content">
                            <div class="row titles">
                                <div class="col-sm-6 text-center">
                                    <span>保额</span>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>保费(元)</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            不投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--option2-->
                    <div class="col-sm-3 s-option s-right-sol S-Checkbox-Radio1" data-type='s-active'>
                        <div class="title">
                            <h2>高性价比方案 56%</h2>
                            <h1>￥
                                <i>6929.70元</i>
                            </h1>
                            <h3>市场：8796.65元</h3>
                        </div>
                        <div class="content">
                            <div class="row titles">
                                <div class="col-sm-6 text-center">
                                    <span>保额</span>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>保费(元)</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            不投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--option3-->
                    <div class="col-sm-3 s-option s-right-sol S-Checkbox-Radio1" data-type='s-active'>
                        <div class="title">
                            <h2>私人订制 56%</h2>
                            <h1>￥
                                <i></i>
                            </h1>
                            <h3></h3>
                        </div>
                        <div class="content">
                            <div class="row titles">
                                <div class="col-sm-6 text-center">
                                    <span>保额</span>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>保费(元)</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            不投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-default dropdown-toggle s-select-with-1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            投保
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a>投保</a>
                                            </li>
                                            <li>
                                                <a>不投保</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-center">
                                    <span>2232.15</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--option-end-->
                    <div class="option-SALI">
                        <div class="col-sm-3">
                            <div class="title">
                                <span class="span-sel">交强险选择</span>
                                <span>
                                        <input type="checkbox" name="my-checkbox" data-on-text="是" data-off-text="否" checked>
                                    <!-- <input type="checkbox" class="btn-switch postion_ab"> -->
                                </span>
                                <span class="span-sel2">投保</span>
                                <p>
                                    生效日期：
                                    <input type="text" name="" id="" class="form-control form_datetime" placeholder="">
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-3 s-option">
                            <div class="title">
                                <h2>车船税</h2>
                                <h1>市场：7234.60元</h1>
                            </div>
                        </div>
                        <div class="col-sm-3 s-option">
                            <div class="title">
                                <h2>车船税</h2>
                                <h1>市场：7234.60元</h1>
                            </div>
                        </div>
                        <div class="col-sm-3 s-option s-border-right">
                            <div class="title">
                                <h2></h2>
                                <h1></h1>
                                <h3></h3>
                            </div>

                        </div>

                    </div>
                </div>
                <!--list-end-->
                <div class="h_10"></div>
                <div class="s_main1080 s_next s-total">
                    <div class="row">
                        <span class="s-span-title">
                            方案总价
                        </span>
                        <div class="col-sm-2 text-right">
                            <span class="s-span">
                                <h5>商业险</h5>
                                <h4>5775.14</h4>
                            </span>
                        </div>
                        <span>
                            <img src="../../static/images/add.png" alt="">
                        </span>
                        <div class="col-sm-2 text-center">
                            <span class="s-span">
                                <h5>交强险</h5>
                                <h4>950.00</h4>
                            </span>
                        </div>
                        <span>
                            <img src="../../static/images/add.png" alt="">
                        </span>
                        <div class="col-sm-2 text-left">
                            <span class="s-span">
                                <h5>车船税</h5>
                                <h4>360.00</h4>
                            </span>
                        </div>
                        <span>
                            <img src="../../static/images/equal.png" alt="">
                        </span>
                        <div class="col-sm-2 text-left">
                            <span class="s-add-all">￥
                                <i>7085.14</i>
                            </span>
                        </div>
                    </div>

                </div>
                <!--s-total end-->
                <div class="h_10"></div>
                <div class="s_main1080 s_next next">
                    <div class="last_btn text-right">
                        <button type="submit" class="s-default-last" @click="last">上一步</button>
                    </div>
                    <div class="next_btn text-left">
                        <button type="submit" class="s-default" @click="next">下一步</button>
                    </div>
                </div>
            </div>
            <!--end row-s selectingoffer-->
        </div>
        <!--end s_main1080 main-->
         <footer class="foot">
        <p>车险出单平台 版权所有</p>
        <p>Copyright@2017 Chexianchudanpingtai</p>
    </footer>
    </div>
    <!--end main index-->
   
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      $("[name='my-checkbox']").bootstrapSwitch();
      app._toggle();
      app.input_Name();
      $(".form_datetime").datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        minView: "month",
        autoclose: true,
        todayBtn: false,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
      });
      $(".btn-group").click(function() {
        var mydropdown = new app.customdropdown($(this));
      });
    },
    next: function(txt) {
      this.$router.push("verify");
    },
    last: function(txt) {
      this.$router.push("home");
    },
    adjustBrand: function() {
      this.$router.push("brand");
    }
  }
};
</script>
<style>

</style>