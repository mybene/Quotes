export class Quote {
    showDescription:boolean;
    constructor ( public id:number,
         public text:string,
          public author:string,
           public writtenBy:string,
           public completeDate:Date){
    this.showDescription=false;
}
}

