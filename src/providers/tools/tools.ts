import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//配置文件
import { StorageProvider } from '../../providers/storage/storage';

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToolsProvider {

  constructor(public http: Http,public storage:StorageProvider) {
    console.log('Hello ToolsProvider Provider');
  }
  //获取用户信息
  getUserInfo(){
    var userinfo=this.storage.get('userinfo');

    return userinfo;

  }

}
