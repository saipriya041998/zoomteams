export class Article {
  public constructor(
    public article_id:string,
    public article_name:string,
    public published_date:string,
    public published_time:string,
    public category:string,
    public created_by:string,
    public description:string,
    public image1:string,
    public image2: string,
    public isAdmin:boolean
  ){}

}
