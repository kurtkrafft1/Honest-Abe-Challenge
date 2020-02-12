const htmlManager = {
    billFactory: (obj) => {
    
       return `
       <li>${obj.bill.name}</li>
       `
    },
    pacFactory:(obj) => {
     return `
     <li>${obj.pac.name}</li>`
    },
    corpFactory:(name) => {
        return `<li>${name}</li>`
    }
}
export default htmlManager;