import { api } from "./client"

const controller = new AbortController();

export const TodosAPI = {
  getAll: async function () {
    
    const response = await api.request({
      url: `/todos`,
      method: "GET",
      signal: controller.signal
    })
    if(response) {
      return response.data
    }
  },
  abort: function(){
    controller.abort()
  },
}