import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { LoginPage } from '../login/login';

//引入收货地址页面

import { AddressPage } from '../address/address';


import { StorageProvider } from '../../providers/storage/storage';
import { ConfigProvider } from '../../providers/config/config';

import { HttpServicesProvider } from '../../providers/http-services/http-services';


//工具服务
import { ToolsProvider } from '../../providers/tools/tools';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  public list=[];
  public LoginPage=LoginPage;
  public AddressPage=AddressPage;

  public userinfo='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageProvider,public httpService:HttpServicesProvider,public config:ConfigProvider,public tools:ToolsProvider) {
       //获取用户信息
       this.userinfo=this.tools.getUserInfo();
  }

  ionViewDidEnter(){
      //获取订单信息
      this.list=this.storage.get('order_data');
      console.log(this.list);
   

  }

}
