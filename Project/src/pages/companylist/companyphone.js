import React from 'react'
import { connect } from 'dva'

function CompanyPhone() {
  return(
    <div>
      <a>联系人：黎英志 </a>
      <a>联系电话：13716452669</a>
      <address>北京海淀区中关村113路</address>
    </div>
  );
}


export default connect()(CompanyPhone);
