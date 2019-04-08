import axios from 'axios';

class AxiosService {
  public get(api: string) {
    return axios.get(api);
  }
}
// 在全域導出獨立實體
export const axiosService = new AxiosService();
