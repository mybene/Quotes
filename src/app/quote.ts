export class Quote {
    showDescription:boolean;
    constructor ( public id:number,
         public text:string,
          public author:string,
           public writtenBy:string,
           public completeDate:Date,
           public downvote:number,
           public upvote: number){
    this.showDescription=false;
}
}

