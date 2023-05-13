//파라미터에 타입 정의
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 반환 값에 타입 정의
function add(): number {
  return 10;
}

//함수 타입을 정의
function sumType(a: number, b: number): number {
  return a + b;
}

//함수의 옵셔널 파라미터
// 1개는 무조건 넘겨야 되고 ?는 넘겨도 되고 안 넘겨도 됨
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello world", "abc");
