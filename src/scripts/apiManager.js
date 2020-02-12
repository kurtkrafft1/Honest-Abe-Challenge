const baseUrl = "http://localhost:8088/";
const apiManager = {
    getPoliticiansData: () => {
      return fetch (`${baseUrl}politicians`)
      .then(r=>r.json());
    },
    getBillData:(id) => {
      return fetch(`${baseUrl}politicianBills?_expand=bill&politicianId=${id}`)
        .then(r=>r.json());
    },
    getPacData:(id) => {
      return fetch(`${baseUrl}politicianPacs?_expand=pac&politicianId=${id}`)
      .then(r=>r.json());
    },
    getCorpPacData:(id)=> {
        return fetch(`${baseUrl}corporationPacs?_expand=corporation&pacId=${id}`)
        .then(r=>r.json());
    }
}
export default apiManager