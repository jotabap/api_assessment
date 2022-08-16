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

import { Api1Model } from '../models/api-1-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiApiGet
   */
  static readonly ApiApiGetPath = '/api/API';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiApiGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiGet$Plain$Response(params?: {
    sourceAdress?: string;
    destinationAdress?: string;
    cartoonsDimension?: number;
  }): Observable<StrictHttpResponse<Api1Model>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiApiGetPath, 'get');
    if (params) {
      rb.query('sourceAdress', params.sourceAdress, {});
      rb.query('destinationAdress', params.destinationAdress, {});
      rb.query('cartoonsDimension', params.cartoonsDimension, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Api1Model>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiApiGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiGet$Plain(params?: {
    sourceAdress?: string;
    destinationAdress?: string;
    cartoonsDimension?: number;
  }): Observable<Api1Model> {

    return this.apiApiGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Api1Model>) => r.body as Api1Model)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiApiGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiGet$Json$Response(params?: {
    sourceAdress?: string;
    destinationAdress?: string;
    cartoonsDimension?: number;
  }): Observable<StrictHttpResponse<Api1Model>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiApiGetPath, 'get');
    if (params) {
      rb.query('sourceAdress', params.sourceAdress, {});
      rb.query('destinationAdress', params.destinationAdress, {});
      rb.query('cartoonsDimension', params.cartoonsDimension, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Api1Model>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiApiGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiApiGet$Json(params?: {
    sourceAdress?: string;
    destinationAdress?: string;
    cartoonsDimension?: number;
  }): Observable<Api1Model> {

    return this.apiApiGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Api1Model>) => r.body as Api1Model)
    );
  }

}
