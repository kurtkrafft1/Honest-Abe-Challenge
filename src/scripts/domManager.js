import apiManager from "./apiManager.js";
import htmlFetchers from "./fetchManager.js";
const container = document.getElementById('container');
const domManager = {
    fillCards: () => {
        apiManager.getPoliticiansData().then(arr=> {
            arr.forEach(element=> {
              const bills = htmlFetchers.billHtml(element)
            const pacs = htmlFetchers.pacHtml(element)
            const corps = htmlFetchers.corpHtml(element)
            })
        })
    },
    generateCards: () => {
      apiManager.getPoliticiansData().then(arr=> {
        for(let i=0; i<arr.length;i++){
            const html = `<div id="card-${arr[i].id}" class="card">
              <h1>${arr[i].name}</h1>
                <section class="politician__bills">
                    <h3>Sponsored Bills</h3>
                        <div>
                             <ul id="bills-${arr[i].id}">
                      
                            </ul>
                         </div>
                </section>
                <section class="politician__funders">
                    <h3>Related PACs</h3>
                         <ul id="pacs-${arr[i].id}">
                            
                        </ul>
                </section>
                <section class="politician__influencers">
                <h3>Influencing Corporations</h3>
                     <ul id="corps-${arr[i].id}">
                        
                    </ul>
                </section>
              </div>`
              container.innerHTML+= html;
              
        }
      })
    }
}
export default domManager;