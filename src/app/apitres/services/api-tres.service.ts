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

import { Modeltres } from '../models/modeltres';

@Injectable({
  providedIn: 'root',
})
export class ApiTresService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiApiTresGet
   */
  static readonly ApiApiTresGetPath = '/api/ApiTres';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiApiTresGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiTresGet$Plain$Response(params?: {
    source?: string;
    destination?: string;
    packages?: number;
  }): Observable<StrictHttpResponse<Modeltres>> {

    const rb = new RequestBuilder(this.rootUrl, ApiTresService.ApiApiTresGetPath, 'get');
    if (params) {
      rb.query('source', params.source, {});
      rb.query('destination', params.destination, {});
      rb.query('packages', params.packages, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Modeltres>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiApiTresGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiTresGet$Plain(params?: {
    source?: string;
    destination?: string;
    packages?: number;
  }): Observable<Modeltres> {

    return this.apiApiTresGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Modeltres>) => r.body as Modeltres)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiApiTresGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiTresGet$Json$Response(params?: {
    source?: string;
    destination?: string;
    packages?: number;
  }): Observable<StrictHttpResponse<Modeltres>> {

    const rb = new RequestBuilder(this.rootUrl, ApiTresService.ApiApiTresGetPath, 'get');
    if (params) {
      rb.query('source', params.source, {});
      rb.query('destination', params.destination, {});
      rb.query('packages', params.packages, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Modeltres>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiApiTresGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiTresGet$Json(params?: {
    source?: string;
    destination?: string;
    packages?: number;
  }): Observable<Modeltres> {

    return this.apiApiTresGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Modeltres>) => r.body as Modeltres)
    );
  }

}
