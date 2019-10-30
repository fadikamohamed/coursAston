import { TestBed } from '@angular/core/testing';

import { TodoListeService } from './todo-liste.service';

describe('TodoListeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListeService = TestBed.get(TodoListeService);
    expect(service).toBeTruthy();
  });
});
