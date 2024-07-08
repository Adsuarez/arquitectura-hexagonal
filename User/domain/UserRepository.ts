import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository {
  create(user: User): Promise<void>;
  readAll(): Promise<User[]>;
  readOneById(id: UserId): Promise<User | null>;
  update(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}
