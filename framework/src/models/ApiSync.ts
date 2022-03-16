import axios, {AxiosPromise} from "axios";

interface HasId {
  id?: number;
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
    // .then((response: AxiosResponse) => {
    // this.set(response.data);
    // });
  }
  async save(data: T) {
    const {id} = data;
    if (id) {
      return await axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return await axios.post(`${this.rootUrl}`, data);
    }
  }
}
