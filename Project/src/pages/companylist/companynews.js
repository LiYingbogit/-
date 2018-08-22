import React from 'react'
import { connect } from 'dva'
import { Carousl } from 'antd'
function CompanyNews() {
  return(
    <div>
      <li><a href="https://www.toutiao.com">今日头条</a></li>
      <li><a href="https://https://news.baidu.com/">百度新闻</a></li>
      <li><a href="https://https://https://news.qq.com">腾讯新闻</a></li>

    </div>
);

}
export default connect()(CompanyNews);
