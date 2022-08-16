/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ApiDosModels } from '../models/api-dos-models';

@Injectable({
  providedIn: 'root',
})
export class ApiDosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiApiDosGet
   */
  static readonly ApiApiDosGetPath = '/api/ApiDos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiApiDosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiDosGet$Plain$Response(params?: {
    consignee?: string;
    consignor?: string;
    cartons?: number;
  }): Observable<StrictHttpResponse<ApiDosModels>> {

    const rb = new RequestBuilder(this.rootUrl, ApiDosService.ApiApiDosGetPath, 'get');
    if (params) {
      rb.query('consignee', params.consignee, {});
      rb.query('consignor', params.consignor, {});
      rb.query('cartons', params.cartons, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiDosModels>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiApiDosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiDosGet$Plain(params?: {
    consignee?: string;
    consignor?: string;
    cartons?: number;
  }): Observable<ApiDosModels> {

    return this.apiApiDosGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiDosModels>) => r.body as ApiDosModels)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiApiDosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiDosGet$Json$Response(params?: {
    consignee?: string;
    consignor?: string;
    cartons?: number;
  }): Observable<StrictHttpResponse<ApiDosModels>> {

    const rb = new RequestBuilder(this.rootUrl, ApiDosService.ApiApiDosGetPath, 'get');
    if (params) {
      rb.query('consignee', params.consignee, {});
      rb.query('consignor', params.consignor, {});
      rb.query('cartons', params.cartons, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiDosModels>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiApiDosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiDosGet$Json(params?: {
    consignee?: string;
    consignor?: string;
    cartons?: number;
  }): Observable<ApiDosModels> {

    return this.apiApiDosGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApiDosModels>) => r.body as ApiDosModels)
    );
  }

}
