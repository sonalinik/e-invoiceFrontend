import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DoorRefService {
    DoorTypeObject = new Array();
    // API 
    //// lead source list"; 
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: '1', label: "Door frame" },
        { value: '2', label: "Shutter" },
        { value: '3', label: "Architrave" },
        { value: '4', label: "Hardware" },
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(DoorRefService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(DoorRefService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(DoorRefService.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    }
    private loadOptions(options: Array<IOption>): Observable<Array<IOption>> {
        return new Observable((obs) => {
            setTimeout(() => {
                obs.next(this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    }

    private cloneOptions(options: Array<IOption>): Array<IOption> {
        return options.map(option => ({ value: option.value, label: option.label }));
    }

    public LeadSourcelist() {
        this.DoorTypeObject = []
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        return this.http.get<any>(this.url + '/MSTDOORTYPEBOM/find/' + result[0].COMPANY_ID)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.CODE };
                    this.DoorTypeObject.push(obj)
                });
                return this.DoorTypeObject;
            }));
    }

}
