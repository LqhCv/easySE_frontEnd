/*
 * @Author: hcy
 * @Date: 2022-10-13 19:30:41
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 15:37:15
 * @FilePath: \src\src\pages\User\components\UserMsgs\index.tsx
 * @Description: 账号信息
 * 
 */
import React, { useEffect } from 'react'
import style from './index.less'
import { Avatar, Button } from 'antd'
import storage from '@/utils/storage'
import { queryMsgById } from '@/api/user'
export default () => {
  const listMenu = storage.getItem("userMsg") || {
    userType: '学生',
    name: 'hcy',
    email: '1458283943@qq.com',
    phoneNum:'19980825396'
  }
  const litsType = ["管理员", "老师", "学生", "游客"]
  useEffect(() => {
    queryMsgById(storage.getItem("userMsg").id).then((res) => {
      console.log(res)
    })
  },[])
  return (
    <div className={style.usermsgs}>
      <div className={style.topcontainer}>
        <Avatar
          src={storage.getItem("userMsg").headerUrl}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} //响应式头
        />
        <div className={style.mark}>{litsType[storage.getItem('roleId')-1]}</div>
      </div>
      <div className={style.msg}>
        <div>姓名:{listMenu.username}<span className={style.btn}>修改</span></div>
        <div>邮箱:{listMenu.email}<span className={style.btn}>修改</span></div>
        <div>电话:{listMenu.phonenumber}<span className={style.btn}>修改</span></div>
        <div>密码: <span className={style.btn}>修改</span> </div>
      </div>
    </div>
  )
}

