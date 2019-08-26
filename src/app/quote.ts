export class Quote {
    showDescription:boolean;
    constructor ( public id:number,
         public text:string,
          public author:string,
           public writtenBy:string,
           public completeDate:Date,
           public downvotes:number,
           public upvotes: number){
    this.showDescription=false;
}
}

