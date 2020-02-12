import apiManager from "./apiManager.js";
import htmlManager from "./htmlManager.js";
const htmlFetchers = {
    billHtml: (obj) => {
        const bills = document.getElementById(`bills-${obj.id}`);
      apiManager.getBillData(obj.id).then(arr=> {
        //   console.log(arr)
          arr.forEach(element => {
              const html= htmlManager.billFactory(element);
              bills.innerHTML+= html

          });
      })
    },
    pacHtml: (obj) => {
      const pacs = document.getElementById(`pacs-${obj.id}`)
      apiManager.getPacData(obj.id).then(arr=> {
          arr.forEach(element=> {
            const html = htmlManager.pacFactory(element)
            pacs.innerHTML+= html;
          })
        
      })
    },
    corpHtml: (obj) => {
        const corps = document.getElementById(`corps-${obj.id}`)
      apiManager.getPacData(obj.id).then(arr=> {
        arr.forEach(element=> {
            apiManager.getCorpPacData(element.pac.id).then(array=> {
                array.forEach(corp=> {
                    const html = htmlManager.corpFactory(corp.corporation.name);
                    corps.innerHTML+= html;
                })
            })
        })
    
    })

      
    }
}

export default htmlFetchers;