import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment as env } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(protected http: HttpClient) { }
  async httGet() {
    try {
      return await this.http.get<any>(env.api).toPromise();
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async httPost(data: any): Promise<any> {
    try {
      let response = await this.http.post(env.api + "predict", {sintomas: data}).toPromise();
      return response;
    }
    catch (e) {
      console.log(e);
      return e;
    }
  }
}
