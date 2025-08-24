function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();

}

function include(fileName) { 
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}


function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let ws = ss.getSheetByName("Items");
  let res = {};
  res.items = ws.getRange(2, 1, ws.getLastRow()-1, 5).getValues();
  ws = ss.getSheetByName("Sales");
  res.sales = ws.getRange(2, 1, ws.getLastRow()-1, 6).getValues();
  Logger.log(res);
  return res;
}

function setData(data) {
  const importedData = JSON.parse(data);
  const orderLength = importedData.order.length;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ws = ss.getSheetByName("Sales");
  range = ws.getRange(ws.getLastRow()+1, 1, orderLength, 6);
  range.setValues(importedData.order);

  ws = ss.getSheetByName("Payments");
  range = ws.getRange(ws.getLastRow()+1, 1, 1, 5);
  range.setValues(importedData.payment);
}

    
   

  
