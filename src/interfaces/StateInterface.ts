import ItemInterface from "./ItemInterface";

export default interface StateInterface {
  items: ItemInterface[];
  inputValue: null | string;
  status: null | string;
  error: null | string;
  index: null | number;
}
