export class HeaderCategoryDTO{
    public name: string;
    public redirection: string;

    public constructor(name:string, redirection:string){
        this.name = name;
        this.redirection = redirection;
    }
}