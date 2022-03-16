import {AxiosPromise, AxiosResponse} from "axios";

type CallBack = () => void;
interface ModelAttributes<T> {
  set(value: T): void;
  getAll();
  get<k extends keyof T>(key: k): T[k];
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface Events {
  on(eventName: string, callback: CallBack): void;
  trigger(eventName: string): void;
}
interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;
  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }
  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("User must have an id");
    }
    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
