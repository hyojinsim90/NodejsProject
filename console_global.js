console.log('hello world'); // 일반적인 로그
console.log('hello %s', 'world'); // 일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = 'world';
console.error(new Error('에러 메시지 출력')); // 에러 로그 출력

const arr = [
    {name: 'Jone Doe', email: 'john@mail.com'},
    {name: 'Jeremy Go', email: 'jeremy@mail.com'}
];
console.table(arr);