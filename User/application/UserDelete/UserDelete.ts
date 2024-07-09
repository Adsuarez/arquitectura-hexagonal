import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";

export class UserDelete {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<void> {
    this.repository.delete(new UserId(id));
  }
}
