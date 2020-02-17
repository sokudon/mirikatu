/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

//https://docs.google.com/spreadsheets/d/1CpwNLrurUVVLX2dmMgZHU-uQC7WQfyfWqLlaiooRaN8/edit#gid=0
var sid="1CpwNLrurUVVLX2dmMgZHU-uQC7WQfyfWqLlaiooRaN8";
var sname="ミリシタカツドウ";

function doGet() {
  var ss = SpreadsheetApp.openById(sid);
  var sheets = ss.getSheetByName(sname);
  
　var last_row = 50;
　var last_col = sheets.getLastColumn()-1;
  
  
   var values= sheets.getRange(1,1,last_row ,last_col).getValues();
  var str=JSON.stringify(values);
  
  var ss=JSON.parse(str);
  var moment = Moment.load();
  var st="var off=[";
  var data={};
  data.name="自分offer";
  data.data=[];
  
  for(var i=1;i<50;i++){
    if(ss[i-1][14]!=""){//O列１４
  　data.data[i-1]=[];
    data.data[i-1][0]=moment(ss[i][0]).valueOf();
    data.data[i-1][1]=ss[i][14];
    }
    else if(moment(ss[i][0])>moment("2019/8/30")){
  　data.data[i-1]=[];
    data.data[i-1][0]=moment(ss[i][0]).valueOf();
    data.data[i-1][1]=ss[i][14];
    }
  }
  
  return ContentService.createTextOutput(st+JSON.stringify(data)+"]").setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function wmap_getSheetsName(sheets){
  //var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length >= 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;
}