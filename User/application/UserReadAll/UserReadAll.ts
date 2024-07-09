import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserReadAll {
  constructor(private repository: UserRepository) {}

  async run(): Promise<User[]> {
    return this.repository.readAll();
  }
}
