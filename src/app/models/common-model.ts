export class Common {
  public id: number;
  public name?: string;
}

export class Note {
  public id: number;
  public title: string;
  public body: string;
  public attachment: string;
  public audioMsg: string;
  public attachmentType: number;
  public category_id: number;
  public categoryName: string;
  public sharecount: number;

}
export class SelectContactlist {
  public checked: boolean = false;
  public email: string;
  public image: string;

}