export class Gnome {
    id: number;
    name: string;
    thumbnail: string;
    age: number;
    weight: number;
    height: number;
    hair_color: string;
    professions: string[];
    friends: string[];

    constructor(brastlewark: any){
        this.id = brastlewark.id;
    }
}