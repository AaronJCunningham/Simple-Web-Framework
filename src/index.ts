import { User } from "./models/User";

const user = new User({ id: 2 });

user.set({ name: "two", age: 2 });
user.save();
