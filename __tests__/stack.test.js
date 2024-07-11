import makeStack from '../src/stack.js';

test("stack's main flow", () => {
  const stack = makeStack();
  // Добавляем два элемента в стек и затем извлекаем их
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});