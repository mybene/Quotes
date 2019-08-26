export class Quote {
    showDescription: boolean;
    public id: number
    //   public downvotes:number
    //   public upvotes: number
    constructor(public text: string, public author: string, public writtenBy: string, public completeDate: Date, public downvotes: number, public upvotes: number) {
        this.showDescription = false;
        this.upvotes = 0;
        this.downvotes = 0;

    }
}
