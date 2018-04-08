import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

//引入请求数据的模块
import { Http, Jsonp} from '@angular/http';

//新闻详情
import { NewscontentPage } from '../newscontent/newscontent';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  //list用于存放数据

  public list=[];
  public NewscontentPage=NewscontentPage;   /*新闻详情页面*/

  constructor(public navCtrl: NavController,public http: Http,public jsonp: Jsonp) {
     
      var that=this;
      var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
      
      this.http.get(url).subscribe(function(data){
        // console.log(data['_body']);
        
        that.list=JSON.parse(data['_body']).result;

        console.log(JSON.parse(data['_body']));

      },function(err){

      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    
  }

}
