


class APIConnection {
    
    constructor(){
      this.apiUrl = "http://127.0.0.2:5000/";
    }

    /**
     * Connects to the API and gets JSON array data.
     * @param {string} url_extension - adds to url to access 
     *                                 features of the API
     * @returns {Array} data returned from API 
     */
    async fetchData(url_extension) {
      let response = await fetch('http://127.0.0.2:5000/' + url_extension);
      var data = await response.json();
      //console.log(data[1].code);
      return data;
    }



    
}


class DataHandler{

  constructor(data){
      this.data = data;
  }

  /**
   * Takes JSON array and returns the items with low stock.
   * @param {INT} lowStockCriteria - Criteria to evaluate low stock.
   * @returns {Array} - JSON array of low stock products.
   */
  findLowStock(lowStockCriteria){
      let stock_to_order = [];
      for(var i=0; i < this.data.length; i++){

      if (this.data[i].pcsl < (this.data[i].prsl/lowStockCriteria)){
          stock_to_order.push(this.data[i]);
          }  
      }
      return(stock_to_order);
  }

  /**
   * Writes JSON array to web page.
   * @param {Array} dataToWrite - JSON array of data to write.
   */
  writeDataPage(dataToWrite){

      for(var i=0; i < dataToWrite.length; i++){
          document.getElementById("APIdata").innerHTML += 
          (
            "Code: " + dataToWrite[i]["code"] + "</br>" +
            "Name: " + dataToWrite[i]["name"] + "</br>" +
            "Supplier: " + dataToWrite[i]["supplier"] + "</br>" +
            "Cost: " + dataToWrite[i]["cost"] + "</br>" +
            "RRP: " + dataToWrite[i]["rrp"] + "</br>" +
            "pcsl: " + dataToWrite[i]["pcsl"]  + "</br>" +
            "prsl: " + dataToWrite[i]["prsl"]  + "</br>" + "</br>"
          );
          };

  }

  

}



//Tester code.


let newAPIconnection = new APIConnection;

async function someOtherFunc() {
  try {
      let val = await newAPIconnection.fetchData("products");
      console.log(val);
      let newDataHandler = new DataHandler(val);
      low_stock_data = newDataHandler.findLowStock(4);
      console.log(low_stock_data);
      newDataHandler.writeDataPage(low_stock_data);
  } catch(e) {
     // error
     console.log(e);
  }
}

someOtherFunc();




