export abstract class Util {

  public static getDataFormatada(data: string): string {
    if(data === undefined || (data == null))
    {
      return null;
    }

    if(data.trim().length === 0)
    {
      return null;
    }

    const pattern = /(\d{2})\/(\d{2})\/(\d{4})/; // DD/MM/YYYY
    const dt = new Date(data.replace(pattern,'$3-$2-$1'));
    const str = dt.toISOString();
    return str.substr(0, 10)
  }

  public static addDaysToDate(date: Date, days: number): Date {
    return new Date(date.setDate(date.getDate() + days));
  }

  public static removeDaysToDate(date: Date, days: number): Date {
    return new Date(date.setDate(date.getDate() - days));
  }

  public static getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
