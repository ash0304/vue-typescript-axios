import { environment } from './../environment/environment';
import axios from 'axios';
import { authService } from './auth.service';

class BaseService {
    public apiUrl = environment.urls.api;
    // Post
    public async post<TReq, TResp>(url: string, model: TReq) {
        const httpOptions = {
          Authorization: 'Bearer ' + authService.getAccessToken(),
        };
        return await axios.post<TResp>(this.apiUrl + url, model, {headers: httpOptions});
    }
    // Login
    public async postByHeadersForm<TReq, TResp>(url: string, model: TReq) {
        const httpOptions = {
            'Content-Type':
            'application/x-www-form-urlencoded; charset=utf-8',
        };
        return await axios.post<TResp>(this.apiUrl + url, model, { headers: httpOptions});
    }
}

export const baseService = new BaseService();
