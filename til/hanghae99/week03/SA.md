
## 🐤 JavaScript의 자료형과 JavaScript만의 특성은 무엇일까 ?
<details>
    <summary>느슨한 타입(loosely typed)의 동적(dynamic) 언어</summary>
    
  ---------------------
  자바스크립트는 느슨한 타입(loosely typed)의 동적(dynamic) 언어다.</br>
  우선 정적 언어와 동적 언어의 특징은 다음과 같다.
  * 정적 언어 (Statically Typed Language)
    * 컴파일 시간에 변수의 타입이 결정되는 언어다. 타입 즉, 자료형을 런타임 이전에 결정한다는 뜻인데 대표적인 정적 언어로는 C, C++, Java 등이 있다.</br>
    * 변수에 들어갈 값의 형태에 따라 자료형을 지정해 주어야 한다.</br>
    * 컴파일 시에 자료형에 맞지 않는 값이 들어있을 경우 컴파일 에러가 발생한다. 만약 Type Error이 발생할 코드가 있다면 컴파일 하는 과정에서 오류를 출력한다.
    * 컴파일 시간에 변수의 타입을 체크하므로 사소한 버그들을 쉽게 체크할 수 있는 장점이 있다.
      즉 타입 에러로 인한 문제점을 초기에 발견할 수 있어 타입의 안정성이 올라간다.
      
  * 동적 언어 (Dynamically Typed Language)
    * 런타임에 비로소 타입이 결정되는 언어이다. 소스가 컴파일, 빌드될 때 자료형을 결정하는 것이 아니라 실행할 때 결정되고 언어 자체에서 타입을 추론해서 형을 변환해 준다.
    * 대표적인 동적 언어로는 JavaScript, Ruby, Python 등이 있다.
    * 변수를 생성할 때 마다 매번 타입을 써줄 필요가 없기 때문에 기본적으로는 편하고 빠르게 코드를 작성하기 좋다.
    
</details>

<details>
    <summary>JavaScript 형변환</summary>
  
  -----------------------
  Javascript의 형변환에는 크게 두가지가 있다. Javascript 엔진의 필요에따라 변환하는 '암시적변환', 사용자의 의도에 따라 변환되는 '명시적변환'이 있다.</br>
  이는 Javascrip가 유연한 언어(flexible language)이기에 가능하다.
  먼저 두 가지의 변환이 어떻게 이루어지는지는 다음과 같다.
  
  
  * 암시적 변환
  
    1. 산술 연산자
    
      더하기(+) 연산자는 숫자보다 문자열이 우선시 되기때문에, 숫자형이 문자형을 만나면 문자형으로 변환하여 연산된다. (문자 > 숫자)
      
      ```JavaScript
      // 더하기(+)
      number + number // number
      number + string // string
      string + string // string
      string + boolean // string
      number + boolean // number
      50 + 50; //100
      100 + “점”; //”100점”
      “100” + “점”; //”100점”
      “10” + false; //”100"
      99 + true; //100
      ```
      
     2. 다른 연산자
      
      (-,*,/,%)는 숫자형이 문자형보다 우선시되기 때문에 더하기와 같은 문자형으로의 변환이 일어나지 않는다. (문자 < 숫자)
      
      ```JavaScript
      //다른 연산자(-,*,/,%)
      string * number // number
      string * string // number
      number * number // number
      string * boolean //number
      number * boolean //number
      “2” * false; //0
      2 * true; //2
      ```
      
     3. 동치 비교
      
      아래의 예제는 엄격하지 않은 동치(==) 비교이며, 아래의 결과값은 좌우항 변환 할 경우 모두 ‘0 == 0 이기때문에’ `true` 이다.
      
      ```JavaScript
      null == undefined
      “0” == 0
      0 == false
      “0” == false
      ```
      여기서 사용한 '=='은 '==='와 차이점이 있는데 밑에서 자세히 다루어 보겠다.
  
  
   * 명시적 변환
     
     명시적변환이란 개발자가 의도를 가지고 데이터타입을 변환시키는 것을 뜻한다.</br>

     타입을 변경하는 기본적인 방법은 `Object(), Number(), String(), Boolean()` 와 같은 함수를 이용하는데 new 연산자가 없다면 사용한 함수는 타입을 변환하는 함수로써 사용된다.
     
     ```JavaScript
     var trans = 100; //Number
     Object(trans); //100
     console.log(typeof trans); //Number
     String(trans); //”100"
     console.log(typeof trans); //String
     Boolean(trans); //true
     console.log(typeof trans); //Bolean
     ```
     
     1. A Type → Number Type
     다른 자료형을 숫자타입으로 변형하는 방법은 아래와 같다.
     
     ```JavaScript
     Number()

     Number()는 정수형과 실수형의 숫자로 변환한다.

     Number(“12345”); //12345
     Number(“2”*2); //4
     parseInt()
     ```

     parseInt()는 정수형의 숫자로 변환한다.</br>
     만약 문자열이 `숫자 0` 으로 시작하면 8진수로 인식하고(구형브라우저 O, 신형브라우저X), `0x, 0X` 로 시작한다면 해당 문자열을 16진수 숫자로 인식한다.</br>
     또한 앞부분 빈 공백을 두고 나오는 문자는 모두 무시되어 NaN을 반환한다.
     
     ```JavaScript
     parseInt(“27”) //27
     parseInt(0033); //27
     parseInt(0x1b); //27
     parseInt(“ 2”); //2
     parseInt(“ 2ㅎ”); //2
     parseInt(“ ㅎ2”); //NaN
     parseFloat()
     ```

     parseFloat()는 부동 소수점의 숫자로 변환한다.</br>
     parseInt()와는 달리 parseFloat()는 항상 10진수를 사용하며 parseFloat() 또한 앞부분 빈 공백을 두고 나오는 문자는 모두 무시되어 NaN을 반환한다.
     
     ```JavaScript
     parseFloat(“!123”); //NaN
     parseFloat(“123.123456”); //123.123456
     parseInt(“123.123456”); //123
     parseFloat(“ 123.123456”); //123.123456
     parseFloat(“ a123.123456”); //NaN
     ```
     
     2. A Type → String Type
     다른 자료형을 문자타입으로 변형하는 방법은 아래와 같다.
     
     ```JavaScript
     String()

     String(123); //”123"
     String(123.456); //”123.456"
     toString()
     ```

     toString()는 인자로 기수를 선택할 수 있다. 인자를 전달하지 않으면 10진수로 변환한다.
     
     ```JavaScript
     var trans = 100;
     trans.toString(); //”100"
     trans.toString(2); //”1100100"
     trans.toString(8); //”144"
     var boolT = true;
     var boolF = false;
     boolT.toString(); //”true”
     boolF.toString(); //”false”
     toFixed()
     ```

     toFixed()의 인자를 넣으면 인자값만큼 반올림하여 소수점을 표현하며 소수점을 넘치는 값이 인자로 들어오면 `0`으로 길이를 맞춘 문자열을 반환한다.
     
     ```JavaScript
     var trans = 123.456789;
     var roundOff = 99.987654;
     trans.toFixed(); //”123"
     trans.toFixed(0); //”123"
     trans.toFixed(2); //”123.46"
     trans.toFixed(8); //”123.45678900"
     roundOff.toFixed(2); //”99.99"
     roundOff.toFixed(0); //”100"
     ```
     3. A Type → Boolean Type
     다른 자료형을 불린(Boolean)타입으로 변형하는 방법은 아래와 같다.
     
     ```JavaScript
     Boolean()

     Boolean(100); //true
     Boolean(“1”); //true
     Boolean(true); //true
     Boolean(Object); //true
     Boolean([]); //true
     Boolean(0); //false
     Boolean(NaN); //false
     Boolean(null); //false
     Boolean(undefined); //false
     Boolean( ); //false
  
   
</details>

<details>
    <summary>=, ==, ===</summary>
  
  ----------------
 **'=' , '==' , '===' 의 차이점**

 '=' 대입연산자
    
  ```JavaScript
var a = 3
let b = 3
const c = 3
  ```
등으로 값을 대입할 때 쓴다.

 '==' 동등연산자(coercive)
  
  ```JavaScript
  var a = 3
  var b = '3'
  let c = 3
  a == b // true
  a == c // true
  b == c // true
  ```
두 변수의 값을 비교할 때 쓴다.

 '===' 일치연산자(strict) 
  
  ```JavaScript
    
  var a = 3
  var b = '3'
  let c = 3
  a === b // false
  a === c // true
  b === c // false
  ```
일치연산자인 '==='는 동등연산자인 '=='와 달리 변수의 값과 변수의 자료형을 모두 비교한다.</br>
따라서 데이터타입(자료형), 대소문자, 띄어쓰기 등이 모두 일치해야 true를 반환한다.

==는 양 옆의 값을 비교하기 전에 강제 형 변환(Type Coercion)이 이루어진다.
강제 형변환 과정을 통해 피 연산자들을 공통 타입으로 만들고 그 안에 있는 값만을 비교하는, '느슨한 비교'를 한다.</br>
=== 의 경우, 강제 형변환 과정을 수행하지 않는 '엄격한 비교'이기 때문에 false가 반환한다. 엄격한 비교이기에 이름도 'strict equality'라고 한다.
</details>

<details>
      <summary>느슨한 타입(loosely typed)의 동적(dynamic) 언어의 문제점은 무엇이고 보완할 수 있는 방법에는 무엇이 있을까.</summary>
  
  ----------------------------
  
동적 언어의 단점으로 실행 도중에 변수에 예상치 못한 타입이 들어와 Type Error가 발생하는 경우가 생길 수있고 정적 언어와 달리 실행되는 시점에서 오류를 출력한다.</br>
특히 프로젝트의 크기가 크거나 협업을 하는 과정에서 변수의 타입이 일치하지 않는 경우가 생길 수 있으므로 주의해야 한다.</br>

이런 동적 언어의 특징을 가진 Javascript의 단점을 보완하기 위해 나온것이 Typescript이다.</br>

Typescript란 Javascript에서 코드를 입력할 때 타입을 미리 부여하는 기능을 추가한 정적 타입 언어이다.
      
</details>

<details>
    <summary>undefined와 null의 차이점</summary>
  
  -------------------
  
  * undefined
    1. 아무 값도 할당받지 않은 상태를 뜻함
    2. 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 빈 상태(*대부분 비어 있지 않고 쓰레기 값이 들어 있다라고 말한다.)로 내버려두지 않고</br>
       자바스크립트 엔진이 undefined로 초기화한다.
    3. 변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.
    4. 변수를 참조했을 때 undefined가 반환된다면 선언 이후 값이 할당되지 않은 즉, 초기화되지 않은 변수라는 것을 알 수 있다.
    
  ```JavaScript
  
  let a;
  console.log(a); // undefined
  console.log(typeof a); // undefined
  ```
이처럼 undefined는 사용자가 의도적으로 할당하기 위한 값이 아니라 변수를 선언하고 아무런 값을 할당하지 않았을때 Javascript 엔진에서 변수에 주어지는 값이다.
그렇다면 만약 사용자가 의도적으로 값이 없다는 것을 알려줄때 어떻게 해야할까? 바로 null을 사용하면 된다.

  undefined를 요약해 정의하자면
  * undefined를 직역하면 ‘정의되지 않은’이란 의미이다.
  * 자바스크립트 undefined에서 말하는 정의란 ‘변수의 값을 할당하여 변수의 실체를 명확히 하는 것’를 의미한다.
  * 자바스크립트의 경우 변수를 선언하면 암묵적으로 정의가 이뤄지기 때문에 선언과 정의의 구분이 모호하다.
  * ECMAScript 사양에서 변수는 ‘선언한다.’라고 표현하고, 함수는 ‘정의한다.’라고 표현한다.

* null
  * null은 원시 자료형 null로 분류된다.
  * Javascript는 대소문자를 구분하므로 null은 Null, NULL 등과는 다르다.
  * null은 ‘비어있는, 존재하지 않는 값'(값의 부재)을 의미한다.
  * 프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시(의도적 부재)할 때 사용한다.
  * 변수에 null을 할당 하는것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다.
  * 이는 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며, 자바스크립트 엔진은 누구도 참조하지 않은 메모리 공간에 대해 가비지 콜렉션을 수행할 것이다.
 
 ```JavaScript
 
 console.log(typeof null); // object
 ```
참고로 null의 자료형을 확인해보면 object(객체)가 나오는 것을 확인할 수 있다. 이는 Javascrip 초기버전의 오류로 하위호환성을 위해 따로 수정하지는 않고 있다.

</details>

-----------------------

## 🦝 JavaScript 객체와 불변성이란?

<details>
    <summary>기본형 데이터와 참조형 데이터</summary>
  
  -------------
  * 기본형 데이터(Primative Type)
  
    객체가 아닌 데이터 유형을 뜻하고 다음과 같은 유형이 있다.
  
    * Number
    * String
    * Boolean
    * Symbol
    * null
    * undefined
  
  기본형 데이터는 값을 그대로 할당하고 불변적인 특징이 있다.</br>
  메모리상의 고정된 크기로 저장되며 원시 데이터 갑 자체를 보관하기 때문이다.
  
 * 참조형 데이터(Reference Type)
   
   참조형 데이터 타입은 할당할때의 값이 아닌 데이터의 주소를 저장한다.
   
   * Object
   * Array
   * Function RegExp
   * Map...
  
  두 타입은 변수를 선언할 때 데이터가 담길 공간을 확보하고, 확보된 데이터의 주소값을 가지고 변수명과 매칭시키는 선언과정까지 동일하지만 할당 과정에서의 차이점이 존재한다.
  
</details>

<details>
    <summary>불변 객체를 만드는 방법</summary>
  
  ------------------
  불변 객체란 단어 그대로 '변하지 않는 객체'라는 뜻이다.</br>
  Javascrip에서 불변객체를 만들 수 있는 방법은 기본적으로 2가지인데 바로 const와 Object.freeze()를 사용하면 된다.
  
* const
  
  * ES6부터 추가된 선언 방식으로 let이 함께 추가되었다.
  * 변수를 상수로 선언할 수 있는 방식으로 일반적으로 상수로 선언된 변수는 값을 바꾸지 못하는 것을 뜻한다.

```JavaScript

const a = {};
a.name = "sungin";

console.log(a);  // {"sungin"}
```
결과에서 확인할 수 있듯이 ES6에서의 const는 할당된 값이 상수가 되는 것이 아닌 바인딩된 값이 상수가 되는, 즉 test변수가 상수가 되기 때문에</br>

const 키워드로 선언된 a변수에는 객체 재할당은 불가능하지만 객체의 속성은 변경 가능하다.</br>

재할당이 불가능 한 이유는 변수와 값(객체) 사이의 바인딩 자체가 변경이 되기 때문에 상수인 test변수는 재할당이 불가능한 것이고</br>

객체의 속성이 변경가능 한 이유는 실제 객체가 변경은 되지만 ( {} -> name : "sungin" ) 객체와 변수(a)사이의 바인딩은 변경이 되지 않기 때문에 객체의 속성은 변경가능한 것이다. </br>

때문에 비록 재할당은 불가능하지만 객체의 속성을 변경함으로 인해 변수에 바인딩된 객체의 내용까지 변경이 되기 때문에 불변객체라고 하기는 힘들다.</br>

따라서 Object.freeze()라는 JS내장메소드도 살펴보도록 하겠다.

* Object.freeze()

   자바스크립트에서 기본적으로 제공하는 메소드인 Object.freeze() 메소드이다. 공식 문서에서는 "객체를 동결하기 위한 메소드" 라고 적혀있다.
  
  ```JavaScript
  
  let b = {
    name : 'cho'
  }

  Object.freeze(b);
  ```
사용법은 간단하다. b 변수에 key value를 가진 객체를 바인딩 후 Object.freeze(b)를 사용해 바인딩된 변수를 동결 객체로 만들었다. </br>
때문에 test 객체는 객체의 속성을 변경하는 시도는 불가능하다.

  ```JavaScript
  
  b = {
      age : 27
  };
  console.log(b); // {age: 27}
  ```
그러나 Object.freeze()는 동결된 객체를 반환하지만 객체의 재할당은 가능하다. 때문에 완벽한 불변객체로 볼 수는 없다.

그렇다면 불변 객체는 어떻게 만들 수 있을까.

  ```JavaScript
  
  const c = {
      'name' : 'cho'
  };

  Object.freeze(c);
  ```
  
const와 Object.freeze()를 조합하여  (const의 재할당불가 + Object.freeze()의 객체속성 변경불가)

const키워드로 바인딩 된 변수를 상수화 시킨 다음, Object.freeze()로 해당 변수를 동결 객체를 만들면

객체의 재할당과 객체의 속성 둘 다 변경불가능한 불변 객체가 된다.

</details>

<details>
    <summary>얕은 복사와 깊은 복사</summary>
  
  ----------------------
얕은 복사는 객체의 참조값(주소 값)을 복사하고, 깊은 복사는 객체의 실제 값을 복사한다. 
  
먼저, 자바스크립트에서 값은 원시값과 참조값 두 가지 데이터 타입의 값이 존재하는데
  
 * 원시값은 기본 자료형(단순한 데이터)을 의미한다.  Number, String, Boolean, Null, Undefined등에 해당하고</br>
   변수에 원시값을 저장하면 변수의 메모리 공간에 실제 데이터 값이 저장된다. 할당된 변수를 조작하려고 하면 저장된 실제 값이 조작된다.
   
 * 참조값은 여러 자료형으로 구성되는 메모리에 저장된 객체를 뜻한다. Object, Symbol등이 해당되고</br>
   변수에 객체를 저장하면 독립적인 메모리 공간에 값을 저장하고 변수에 저장된 메모리 공간의 참조(위치 값)를 저장하게 된다.</br>
   그래서 할당된 변수를 조작하는 것은 사실 객체 자체를 조작하는 것이 아닌, 해당 객체의 참조를 조작한다는 점에서 차이가 있다.

원시값을 복사할 때 그 값은 또 다른 독립적인 메모리 공간에 할당하기 때문에, 복사를 하고 값을 수정해도 기존 원시값을 저장한 변수에는 영향을 끼치지 않는다.</br>
이처럼 실제 값을 복사하는 것을 깊은 복사라고 하는데  이것은 자료형을 깊은 복사한 것이다.

  ```JavaScript
  
  const a = 'a';
  let b = 'b';
  b = 'c';
  console.log(a); // 'a';
  console.log(b); // 'c';
  // 기존 값에 영향을 끼치지 않는다.
  ```

참조값을 복사할 때는 변수가 객체의 참조를 가리키고 있기 때문에 복사된 변수 또한 객체가 저장된 메모리 공간의 참조를 가리키고 있다.</br>
그래서 복사를 하고 객체를 수정하면 두 변수는 똑같은 참조를 가리키고 있기 때문에 기존 객체를 저장한 변수에 영향을 끼친다.</br>
이처럼 객체의 참조값(주소값)을 복사하는 것을 얕은 복사라고 한다.  

  ```JavaScript
  
  const a = {
  one: 1,
  two: 2,
  };
  let b = a;
  b.one = 3;
  console.log(a); // { one: 3, two: 2 } 출력
  console.log(b); // { one: 3, two: 2 } 출력
  // 기존 값에 영향을 끼친다.
  ```

일반적으로 복사라는 개념을 생각한다면 깊은 복사가 떠오른다.

하지만 객체를 복사할 때 '=' 키워드를 사용해서 복사하면 얕은 복사가 돼서 기존 변수 또한 수정된다.</br>
그렇다면 자바스크립트에서 얕은 복사 혹은 깊은 복사를 하는 방법은 어떤 것이 있을까?

* 얕은 복사(shllow Copy) 방법
 
얕은 복사란 객체를 복사할 때 기존 값과 복사된 값이 같은 참조를 가리키고 있는 것을 말한다.</br>
또한 객체 안에 객체가 있을 경우 한 개의 객체라도 기존 변수의 객체를 참조하고 있다면 이를 얕은 복사라고 한다.

* Array.prototype.slice()

얕은 복사 방법의 대표적인 예라고 할 수 있다.</br>
start부터 end 인덱스까지 기존 배열에서 추출하여 새로운 배열을 리턴하는 method, 만약 start와 end를 설정하지 않는다면, 기존 배열을 전체 얕은 복사한다.

  ```JavaScript
  
  const original = ['a',2,true,4,"hi"];
  const copy = original.slice();
  console.log(JSON.stringify(original) === JSON.stringify(copy)); // true
  copy.push(10);
  console.log(JSON.stringify(original) === JSON.stringify(copy)); // false
  console.log(original); // [ 'a', 2, true, 4, 'hi' ]
  console.log(copy); // [ 'a', 2, true, 4, 'hi', 10 ]
  ```

기존 배열에는 영향을 끼치지 않아서 깊은 복사로 보일 수 있지만, 원시값을 저장한 1차원 배열일 뿐이다.

원시값은 기본적으로 깊은 복사이다. Slice() 메소드는 기본적으로 얕은 복사를 수행한다. 

  ```JavaScript
  
  const original = [
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  ];
  const copy = original.slice();
  console.log(JSON.stringify(original) === JSON.stringify(copy)); // true
  // 복사된 배열에만 변경과 추가.
  copy[0][0] = 99;
  copy[2].push(98);
  console.log(JSON.stringify(original) === JSON.stringify(copy)); // true
  console.log(original);
  // [ [ 99, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 2, 2, 2, 2, 98 ], [ 3, 3, 3, 3 ] ]출력
  console.log(copy);
  // [ [ 99, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 2, 2, 2, 2, 98 ], [ 3, 3, 3, 3 ] ]출력
  ```

만약 1차원 배열이 아닌 중첩 구조를 갖는 2차원 배열이면 얕은 복사를 수행하게 된다.

  ```JavaScript
  
  const original = [
  {
  a: 1,
  b: 2,
  },
  true,
  ];
  const copy = original.slice();
  console.log(JSON.stringify(original) === JSON.stringify(copy)); // true
  // 복사된 배열에만 변경.
  copy[0].a = 99;
  copy[1] = false;
  console.log(JSON.stringify(original) === JSON.stringify(copy)); // false
  console.log(original);
  // [ { a: 99, b: 2 }, true ]
  console.log(copy);
  // [ { a: 99, b: 2 }, false ]
  ```

또 다른 예시로,  배열 안에 객체를 수정하고자 할 경우 얕은 복사를 수행하는 것을 볼 수 있다.</br>
하지만 원시값은 기본적으로 깊은 복사라 기존 변수에 있는 값과는 다른 값을 도출하는 것을 볼 수 있다.

* Object.assign()
    
    Object.assign(생성할 객체, 복사할 객체)

    메소드의 첫 번째 인자로 빈 객체를 넣어주고 두 번째 인자로 복사할 객체를 넣어준다.
    
  ```JavaScript
  
  const object = {
  a: "a",
  number: {
  one: 1,
  two: 2,
  },
  };
  const copy = Object.assign({}, object);
  copy.number.one = 3;
  console.log(object === copy); // false
  console.log(object.number.one === copy.number.one); // true
  ```

복사된 객체 copy 자체는 기존 object와 다른 객체지만 그 안에 들어가 있는 값은 기존 object안의 값과 같은 참조 값을 가리키고 있다.

> 깊은 클로닝에 대한 주의사항
> 
 깊은 클로닝에 대해서, Object.assign() 은 속성의 값을 복사하기때문에 다른 대안을 사용해야합니다.</br>
 출처 값이 객체에 대한 참조인 경우, 참조 값만을 복사합니다.
 -MDN
 
  * Spread 연산자 (전개 연산자)

마찬가지로 얕은 복사이다.

  ```JavaScript
  
  const object = {
  a: "a",
  number: {
  one: 1,
  two: 2,
  },
  };
  const copy = {...object}
  copy.number.one = 3;
  console.log(object === copy); // false
  console.log(object.number.one === copy.number.one); // true
  ```

* 깊은 복사(Deep Copy) 방법
  
  깊은 복사된 객체는 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 말한다.
  
  * JSON.parse && JSON.stringify
  
 JSON.stringify()는 객체를 json 문자열로 변환하는데 이 과정에서 원본 객체와의 참조가 모두 끊어진다.

 객체를 json 문자열로 변환 후, JSON.parse()를 이용해 다시 원래 객체(자바스크립트 객체)로 만들어준다.

 방법이 가장 간단하고 쉽지만 다른 방법에 비해 느리다는 것과 객체가 function일 경우,  undefined로 처리한다는 것이 단점이다.
  
  ```JavaScript
  
  const object = {
    a: "a",
    number: {
      one: 1,
      two: 2,
    },
    arr: [1, 2, [3, 4]],
  };

  const copy = JSON.parse(JSON.stringify(object));

  copy.number.one = 3;
  copy.arr[2].push(5);

  console.log(object === copy); // false
  console.log(object.number.one === copy.number.one); // false
  console.log(object.arr === copy.arr); // false

  console.log(object); // { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
  console.log(copy); // { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }
  ```

 재귀 함수를 구현한 복사</br>
 복잡하다는 것이 단점이다.
  
  ```JavaScript
  
  const object = {
    a: "a",
    number: {
      one: 1,
      two: 2,
    },
    arr: [1, 2, [3, 4]],
  };

  function deepCopy(object) {
    if (object === null || typeof object !== "object") {
      return object;
    }
    // 객체인지 배열인지 판단
    const copy = Array.isArray(object) ? [] : {};

    for (let key of Object.keys(object)) {
      copy[key] = deepCopy(object[key]);
    }

    return copy;
  }

  const copy = deepCopy(object);

  copy.number.one = 3;
  copy.arr[2].push(5);

  console.log(object === copy); // false
  console.log(object.number.one === copy.number.one); // false
  console.log(object.arr === copy.arr); // false

  console.log(object); // { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
  console.log(copy); // { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }
  ```

 

 * Lodash 라이브러리 사용 
  
 라이브러리를 사용하면 더 쉽고 안전하게 깊은 복사를 할 수 있다. 설치를 해야 한다는 점과 일반적인 개발에는 효율적이겠지만, 코딩 테스트에는 사용할 수 없다.
  
  ```JavaScript
  
  const deepCopy = require("lodash.clonedeep")

  const object = {
    a: "a",
    number: {
      one: 1,
      two: 2,
    },
    arr: [1, 2, [3, 4]],
  };

  const copy = deepCopy(object);

  copy.number.one = 3;
  copy.arr[2].push(5);

  console.log(object === copy); // false
  console.log(object.number.one === copy.number.one); // false
  console.log(object.arr === copy.arr); // false

  console.log(object); // { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
  console.log(copy); // { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }
  ```

출처: https://bbangson.tistory.com/78 [뺑슨 개발 블로그]


</details>

----------------------------------

## 🌙 호이스팅과 TDZ는 무엇일까?

<details>
    <summary>스코프, 호이스팅, TDZ</summary>
</details>

<details>
    <summary>함수 선언문과 함수 표현식에서 호이스팅 방식의 차이</summary>
</details>

<details>
    <summary>let, const, var, function이 어떤 원리로 실행되는지 알 수 있다.</summary>
</details>

<details>
    <summary>실행 컨텍스트와 콜 스택</summary>
</details>

<details>
    <summary>스코프 체인, 변수 은닉화</summary>
</details>

------------------


## 💪 실습 과제
### 문제 👇
콘솔에 찍힐 b 값을 예상해보고, 어디에서 선언된 “b”가 몇번째 라인에서 호출한 console.log에 찍혔는지, 왜 그런지 설명해보세요.</br>
주석을 풀어보고 오류가 난다면 왜 오류가 나는 지 설명하고 오류를 수정해보세요.

<details>
<summary>문제 코드</summary>
  
```JavaScript
  
let b = 1;

function hi () {

const a = 1;

let b = 100;

b++;

console.log(a,b);

}

//console.log(a);

console.log(b);

hi();

console.log(b);
  
```
</details>

<details>
  <summary>풀이 코드</summary>
  
  ```JavaScript
    
let b = 1; //[1]
//-------------------------------------------
function hi () { //[4]

const a = 1; // [5]

let b = 100; // [6]
                                                // local scope(지역 범위)는 변수 를 지역적으로 만드는 특성이다.
                                                //즉, 이 범위 안에서 선언된 변수는 전역 범위 가 아닌 범위 내에서 해당 값 에만 바인딩된다.
b++; //[7]                                      //따라서 이 범위 안에서의 console.log(b)값은 100, 범위 밖에서의 console.log(b)의 값은 1이 출력된다.

console.log(a,b); //[8] ---> [5], [6] 출력

}
//-------------------------------------------
//console.log(a);

console.log(b); //[2] ---> [1] 출력

hi(); //[3]

console.log(b); //[9] ---> [1] 출력
    
// 1
// 1 101
// 1
  ```
    
> hi()함수가 local scope(지역범위)가 되어 범위 내에 선언된 변수는 지역 변수의 특성을 가지게 된다.</br>
따라서 함수 범위 밖에서의 b의 출력값이 제일 위에 선언되었던 let b = 1; 의 값이 출력된 것이다.

여기서 주석처리된 console.log(a)의 값을 출력한다면 참조 에러가 발생하는데 hi()라는 지역 범위 내에서 선언된 변수가 범위 밖에서 실행돼 error가 발생하는 것이다.</br>
error를 수정하려면 다음과 같이 지역 범위 내에서 값을 출력하거나 범위 내의 값을 return하여야 한다.

   ```JavaScript
let b = 1; 
//-------------------------------------------
function hi () { 

const a = 1; 

let b = 100; 

                                            
b++;                                    

console.log(a);

console.log(a,b); 

}
//-------------------------------------------

console.log(b); 

hi();

console.log(b);

// 1
// 1
// 1 101
// 1
   ```
   
   ```JavaScript
   let b = 1; 
//-------------------------------------------
function hi () { 

const a = 1; 

let b = 100; 


b++;                                    
console.log(b); 

return a;

}
//-------------------------------------------

console.log(hi());


console.log(b); 

// 101
// 1
// 1
```
</details>
