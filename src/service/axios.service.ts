import axios from 'axios';

class AxiosService {
  public get(api: string) {
    return axios.get(api);
  }
}
// Export a singleton instance in the global namespace
export const axiosService = new AxiosService();
