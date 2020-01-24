import { Test, TestingModule } from '@nestjs/testing';
import { EntrysController } from './entrys.controller';

describe('Entrys Controller', () => {
  let controller: EntrysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrysController],
    }).compile();

    controller = module.get<EntrysController>(EntrysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
