export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export enum FilterEnum {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export type Filter = FilterEnum.ALL | FilterEnum.ACTIVE | FilterEnum.COMPLETED;
