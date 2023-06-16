function App() {
  let variable = "hello";
  variable = "hihi";

  let age = 26;
  // age = "eighteen";
  let ageType: number;
  ageType = 26;

  let testString: string;
  testString = "test";

  let testBoolean: boolean;
  testBoolean = true;

  let testStringOrNumber: string | number;
  testStringOrNumber = "10";
  testStringOrNumber = 10;

  //Array
  let names = ["one", "two", "three"];
  names.push("hello");

  let numbers = [11, 22, 33];
  numbers.push(44);

  let testStringArray: string[];
  testStringArray = ["one", "two"];

  let testNumberArray: number[];
  testNumberArray = [1, 2, 3];

  let testStringOrNumberArray: (string | number)[]; // union type
  testStringOrNumberArray = [1, "two", 3];

  // Object
  let user = {
    username: "jane",
    age: 22,
    isAdmin: false,
  };
  user.username = "john";
  user.age = 26;
  // user.isAdmin = "true"
  user.isAdmin = true;
  // user.phone="123123" // error

  let userObject: {
    username: string;
    age: number;
    isAdmin: boolean;
  };
  userObject = {
    username: "jane",
    age: 26,
    isAdmin: true,
    // phone:"123123" // error
  };

  let userObject2: {
    username: string;
    age: number;
    isAdmin: boolean;
    phone?: string;
  };
  userObject2 = {
    username: "john",
    age: 26,
    isAdmin: true,
    phone: "0101010",
  };

  //Any
  let testAny: any;
  testAny = 123;
  testAny = "hello";
  testAny = true;
  testAny = [true];
  testAny = {};
  let testAnyArray: any[];
  testAnyArray = [1, "two", false, []];

  let sayHi = () => {
    console.log("hi");
  };

  let funcReturnString = (): string => {
    console.log("hi");
    return "hi";
  };

  let multiple = (num: number): number => {
    return num * 2;
  };
  let multiple2 = (num: number) => {
    return num * 2;
  };
  let multiple3 = (num: number): void => {
    // return num * 2;
    // void는 아무것도 반환하지 않는 함수의 타입
  };

  let sum = (num1: number, num2: number) => {
    return num1 + num2;
  };
  sum(2, 3);

  // 너무 길다! = type aliases
  let func = (user: { username: string; age: number; phone?: string }) => {
    console.log(user.username);
  };

  // Type aliases
  type UserType = {
    username: string;
    age: number;
    phone?: string;
  };
  let betterFunc = (user: UserType) => {
    console.log(user.username);
  };

  type myFunc = (a: number, b: string) => void;
  let write: myFunc = (num, str) => {
    console.log(num + "time" + str);
  };

  type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
  };
  const userWithTheme: UserType2 = {
    username: "jone",
    age: 16,
    theme: "dark",
  };
  return <>hello</>;
}

export default App;
