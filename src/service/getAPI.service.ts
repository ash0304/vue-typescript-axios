import { axiosService } from './axios.service';

class  GetAPIService {
  public getAPI(api: string) {
    return axiosService.get(api);
  }
}

export const getAPIService = new GetAPIService();
