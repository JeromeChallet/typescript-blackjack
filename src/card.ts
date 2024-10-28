export default class Card {
  public name: string;
  public type: string;
  public value: number;
  public color: string;

  constructor(name: string, type: string, value: number, color: string) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.color = color;
  }
}
