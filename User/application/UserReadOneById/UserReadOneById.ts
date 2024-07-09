import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserReadOneById {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.repository.readOneById(new UserId(id));

    if (!user) throw new UserNotFoundError("user not found");

    return user;
  }
}
