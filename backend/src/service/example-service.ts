import { SquidService, secureDatabase, webhook } from '@squidcloud/backend';

export class ExampleService extends SquidService {
  @secureDatabase('all', 'built_in_db')
  allowAccessToBuiltInDb(): boolean {
    return true;
  }
  @webhook('resetCounter')
  async resetCounter() {
    await this.squid.collection('count').doc('count').delete();
  }
}
