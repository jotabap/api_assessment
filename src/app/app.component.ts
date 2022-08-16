import { Component } from '@angular/core';
import { forkJoin, VirtualTimeScheduler } from 'rxjs';
import { Api1Model } from './api/models/api-1-model';
import { ApiService } from './api/services';
import { ApiDosModels } from './apidos/models';
import { ApiDosService } from './apidos/services/api-dos.service';
import { Modeltres } from './apitres/models';
import { ApiTresService } from './apitres/services/api-tres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public apimodel:Api1Model ;
  public apimodelDos:ApiDosModels;
  public apimodelTres:Modeltres;
  public constructor(private app:ApiService,
                     private appdos: ApiDosService,
                     private apptres: ApiTresService){
    this.apimodel={}
    this.apimodelDos={}
    this.apimodelTres={}
      const input = {
    sourceAddress: "First Aveniu, San Jose",
    destinatioAddress:"Snd Street,San Diego",
    id: 10,
  };
   const conuno= this.app.apiApiGet$Json({sourceAdress:input.sourceAddress,
    destinationAdress:input.destinatioAddress,cartoonsDimension:input.id})
 
    const condos=this.appdos.apiApiDosGet$Json({consignee:input.sourceAddress,
  consignor:input.destinatioAddress,cartons:input.id})

  const contres=this.apptres.apiApiTresGet$Json({source:input.sourceAddress,
  destination:input.destinatioAddress,packages:input.id})

  forkJoin([conuno,condos,contres]).subscribe(res=>{
    this.apimodel=res[0]
    this.apimodelDos=res[1]
    this.apimodelTres=res[2]
  })
}
}
