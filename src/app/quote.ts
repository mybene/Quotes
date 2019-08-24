export class Quote {
    showAuthor:boolean;
    constructor ( public id:number, public text:string, public author:string){
    this.showAuthor=false;
}
}

