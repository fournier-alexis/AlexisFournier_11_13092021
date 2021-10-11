import { DaoLocation } from "../types/DaoLocation";

export class Dbal {

    async getLocations():Promise<DaoLocation[]>{
        const row_data = await fetch(`${process.env.PUBLIC_URL}/datas.json`, undefined);
        const data:DaoLocation[] = await row_data.json();
        return data;
    }

    async getOneLocationById(id:string):Promise<DaoLocation>{
        const row_data = await fetch(`${process.env.PUBLIC_URL}/datas.json`, undefined);
        const data:DaoLocation[] = await row_data.json();
        return data.filter(loc => loc.id === id)[0];
    }
}