import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import './index.css'
import *as XLSX from 'xlsx';

function EmailForm(){
  const [emailData, setEmailData] = useState([]);
  const [isShow, setIsShow] = useState(false)
  const [verifyData, setVerifyData] = useState('')

  useEffect(()=>{
    getData()
  },[])
  const getData = ()=>{
    console.log(123)
    fetch('https://api.sweeper.boochat.cn/api/projects/query_email?project=pOP',{
      method:'GET',
    })
      .then(res =>res.json())
      .then((data) => {
        console.log(data)  
        setEmailData(data.data.emails)
      
      })
      .catch((err)=>{
        console.log('error', err)
      })
  }
  const setTime = (time:any)=>{
    // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
    const date = new Date(time);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    const D = date.getDate() + ' ';
    const h = date.getHours() + ':';
    const m = date.getMinutes() + ':';
    const s = date.getSeconds(); 
    return Y+M+D+h+m+s
  }

  const handleExportAll = (e:any) => {
    const entozh:any = {
      "email":"邮箱",
      "create_ts":"时间"
    }


    const json = emailData.map((item:any) => {
      const time = setTime(item.create_ts)
      const newItem:any = {
        email: item.email,
        create_ts: time
      }
      return Object.keys(newItem).reduce((newData:any, key:any) => {
        const newKey = entozh[key] || key
        newData[newKey] = newItem[key]
        console.log(newData)
        return newData
      }, {})
    });


    const sheet = XLSX.utils.json_to_sheet(json);

    openDownloadDialog(sheet2blob(sheet,undefined), `全部信息.xlsx`);

  }
  const openDownloadDialog = (url:any, saveName:any) => {
    if (typeof url == 'object' && url instanceof Blob) {
      url = URL.createObjectURL(url); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
  }

  const sheet2blob = (sheet:any, sheetName:any) => {
    sheetName = sheetName || 'sheet1';
    var workbook:any = {
      SheetNames: [sheetName],
      Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet; // 生成excel的配置项

    var wopts:any = {
      bookType: 'xlsx', // 要生成的文件类型
      bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], {
      type: "application/octet-stream"
    }); // 字符串转ArrayBuffer
    function s2ab(s:any) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }

    return blob;
  }

  const verifyVal = ()=>{
    if(verifyData === 'Dummy Puggy') {
      setIsShow(true)
      return
    } 
    alert('Incorrect verification code!')
  }

  const setVerify = (e:any)=>{
    setVerifyData(e.target.value)
  }
  return(
    <>
      {
        !isShow
        ?<div className="email_body verify_box">
          <div className="verify_from">
            <input type="text" placeholder='Enter verification string' onChange={setVerify}/>
            <button onClick={verifyVal}>verify</button>
          </div>
        </div>
        :<div className="email_body">
          <div className="email_title">
            <button onClick={handleExportAll}>Export</button>
          </div>
          <div className="email_tab">
            <Table className="table-module_container">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  emailData.map((ele:any, index)=>{
                    return(
                      <tr key={index}>
                        <th>{ele.email}</th>
                        <th>{setTime(ele.create_ts)}</th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      }
      
    </>
  )
}

export default EmailForm