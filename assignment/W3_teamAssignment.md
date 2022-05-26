
     Q1.
     자바스크립트에서 유사배열과 배열의 차이는 무엇일까요?
     유사배열의 각 요소를 수정하고 싶다면 어떤 과정을 거쳐야할까요?
     
<details>
 
 <summary>Javascript에서의 배열(Array)</summary>
  <div markdown="1">
    
  - 이름과 인덱스로 참조되는 정렬된 값의 집합으로 정의된다.

  - 배열을 구성하는 각각의 값을 배열 요소(element)라고 하며, 배열에서의 위치를 가리키는 숫자를 인덱스(index)라고 한다.
    
  - 관련 있는 데이터를 하나의 변수에 할당해 관리하기 위해 사용하는 데이터 타입.  

  - 배열 요소의 인덱스가 연속적이지 않아도 되기 때문에 특정 배열 요소가 비어 있을 수도 있다.

  - 명시적 타입이 없는 특성 때문에, 하나의 배열은 여러 자료형을 가질 수 있는 특징이 있다.

  - 배열을 사용하면 여러 데이터를 관련성 있게 관리할 수 있기 때문에 생산성 및 코드 가독성이 높아지고 이는 유지보수 비용의 감소로 이어진다.
  
  - 이 외에도, 배열에서 기본으로 제공하는 함수를 사용할 수 있는 점, 데이터에 순차적으로 접근이 가능하다는 점 등의 장점이 있다.
    
  ### 배열(Array) 문법
    
```JavaScript
  let arr = [배열요소1, 배열요소2,...];          // 배열 리터럴을 이용하는 방법

  let arr = Array(배열요소1, 배열요소2,...);     // Array 객체의 생성자를 이용하는 방법

  let arr = new Array(배열요소1, 배열요소2,...); // new 연산자를 이용한 Array 객체 생성 방법
```
    
### 배열 사용 예시
    
```JavaScript
    
  let array = [ 'a', 100, { test:'test' } ]

  for( let index=0; index<array.length; index++ ){
  console.log( `array[ ${index} ]`, array[ index ] )
  console.log( `typeof( array[ ${index} ] )`, typeof( array[ index ] ) )
  }
  //array[0] a
  //typeof(array[0]) string
  //array[1] 100
  //typeof(array[1]) number
  //array[2] > {test:'test'}
  //typeof(array[2]) object                                     
```
  </div>
</details>

<details>
 
 <summary>Javascript에서의 유사 배열(Array-Like Object)</summary>
  <div markdown="2">       

 - 이름 그대로 배열과 유사한 객체를 말한다.

 - 함수에서 처리 결과로 배열을 반환하고 싶을때 사용한다.
    
 - Array에서 기본으로 내포되어있는 기능을 제공하고 싶지 않거나 Array에 내포되어있지 않은 기능을 제공하고싶을때 사용한다.
    
 - 배열 Method를 사용할 수 없다.
    
> Array.from( )메서드를 사용하여 유사 배열을 얕게 복사하여 새로운 Array를 만들면 배열 Method를 사용할 수 있다.
    
### 유사 배열 사용 예시
    
```JavaScript
    
  
  <div id="outer">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <script>
      let outer = document.querySelector('#outer').children;
      console.log(outer);
    
       HTMLCollection(4)
        >0: div
        >1: div
        >2: div
        >3: div
         length: 4
        >__proto__: HTMLCollection
      ------------------------------
      console.log(typeof outer);
      // object
      ------------------------------
      console.log(Array.isArray(outer));
      // false
      ------------------------------
      console.log(outer instanceof Array);
      / false
  </script>
```
    
> 이렇게 배열이 아닌데 배열인척 하는 것을  유사배열 객체 혹은 유사배열이라고 부른다.
    

### 유사 배열의 조건

  * 반드시 length가 필요해야한다. 이 조건은 필수, 없으면 유사배열이라고 인식하지 않는다.

  * index번호가 0번부터 시작해서 1씩증가해야한다. 안그래도 되긴하는데 예상치 못한 결과가 생긴다.
    
### 유사배열을 사용해야하는 이유

    만일 유사배열을 사용하지 않고, 기존 배열 객체를 이용한다고 가정한다.

    그렇다면 아마 제공하려는 함수를 배열 객체에 추가해서 사용을 할텐데, 이는 배열 객체에 직접 추가되기 때문에 관련이 없는 다른 배열 객체에서도 마치 사용 가능한 함수처럼 표시가 될 것 이고 오작동을 유발할     수 있다.

    또한, JS 버전업으로 인해 추가된 메소드 명이 prototype으로 추가한 메소드 명과 같은경우가 생길 수 있다.

    이게 유사배열을 사용해야 하는 이유이다.
  
  </div>
</details>

  

    DIY Section Q1.
  
    리액트의 라이프 사이클이란 무엇인가.
  
    
<details>
 
 <summary>리액트의 라이프 사이클이란</summary>
  <div markdown="3">
    
     리액트는 컴포넌트 기반의 View를 중심으로 한 라이브러리이다. 각각의 컴포넌트는 라이프사이클, 직역하자면 수명 주기가 존재한다.<br>
     컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작해 페이지에서 사라질 때 끝이 난다.
    
### 라이프사이클의 분류

```
       라이프 사이클은 위 그림과 같이 총 9개가 존재한다.

       크게 세가지 유형으로 나눌 수 있는데 생성 될때, 업데이트 할 때, 제거할 때이다. 이를 리액트에서는 마운트, 업데이트, 언마운트라고 한다.

       여기서 마운트는 DOM이 생성되고 웹 브라우저 상에서 나타나는 것을 뜻하고, 반대로 언마운트는 DOM에서 제거되는 것을 뜻한다.

       주의하여 볼 것은 업데이트 부분인데, 업데이트는 다음과 같은 4가지 상황에서 발생한다.
```
  * props가 바뀔 때
  * state가 바뀔 때
  * 부모 컴포넌트가 리렌더링 될 때
  * this.forceUpdate로 강제로 렌더링을 트리거할 때
    
    
### 라이프 사이클 Method
    
  * constructor
```
      컴포넌트를 만들 때 처음으로 실행된다. 이 Method에는 초기 state를 정할 수 있다.
      객체형 컴포넌트는 초기 state를 정할 때 constructor를 함수형에서는 useState 리액트 훅을 사용하면 초기 상채를 설정해 줄 수 있다.
```
  * render
```
      이는 가장 기초적인 메서드이기도하고 가장 중요한 메서드이기도 하다.<br>
      컴포넌트를 렌더링할 때 필요한 메서드로 유일한 필수 메서드이기도 하다. 함수형 컴포넌트에서는 render를 안쓰고 컴포넌트를 렌더링할 수 있다.
```

#### 사용 예시
```JavaScript
        class Example extends React.Component {
        render() {
        return <div>컴포넌트</div>
          }
        }

        // Hooks
        const example = () => {
        return <div>컴포넌트</div>
        }
```
  * componentDidMount
```
      이 메서드는 컴포넌트를 만들고 첫 렌더링을 마친 후 실행한다. 함수형 Hooks 에서는 useEffect를 활용하여 다음의 기능을 구현할 수 있다.
```
#### 사용 예시
```JavaScript
      class Example extends React.Component {
      componentDidMount() {
        ...
    }
}

// Hooks
    const Example = () => {
    useEffect(() => {
        ...
    }, []);
}
```
  * ComponentDidUpdate
```
      이것은 리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로, DOM관련 처리를 해도 무방하다.
```
#### 사용 예시
```JavaScript
      class Example extends React.Component {
      componentDidUpdate(prevProps, prevState) {
        ...
    }
}

// Hooks
const Example = () => {
    useEffect(() => {
        ...
    });
}
```
    
* componentWillUnmount
```
    이 메서드는 컴포넌트를 DOM에서 제거할 때 실행한다. componentDidMount에서 등록한 이벤트가 있다면 여기서 제거 작업을 해야한다. 함수형 컴포넌트에서는 useEffect CleanUp 함수를 통해 해당 메서     드를 구현할 수 있다.
```
    
#### 사용 예시
```JavaScript
      class Example extends React.Component {
    coomponentWillUnmount() {
        ...
    }
}

// Hooks
const Example = () => {
    useEffect(() => {
        return () => {
            ...
        }
    }, []);
}
```
    
> React 기초 강의에 언급하셨다시피 최근 객체형 컴포넌트보다 함수형 컴포넌트가 많이 쓰이고 또 쓰라고 React에서 공식적으로 이야기 했다.<br>
> 하지만 아직까지는 객체형 컴포넌트도 읽을 수 있을 정도로는 익혀야 할 필요성이 있기 때문에 두 컴포넌트를 비교하며 정리해 보았다.

  참조 링크
  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  </div>
</details>


 
    DIY Section Q2.
  
    함수형 컴포넌트와 객체형 컴포넌트의 차이점은 무엇인가.
     
<details>
 
 <summary>함수형,객체형(클래스형) 컴포넌트의 차이</summary>
  <div markdown="4">
    [클래스형과 함수형 차이]

    클래스형 컴포넌트와 함수형 컴포넌트의 역할은 동일하다. 
    차이점이 있다면 클래스형 컴포넌트의 경우 state 기능 및 라이플 사이클 기능을 사용할 수 있으며 임의 메서드를 정의할 수 있다는 점이다.
    그리고 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다.
    또한 과거의 prototype을 이용해서 구현하던 클래스 문법을 ES6 문법 부터는 class 문법을 사용하여 구현할 수도 있다.
    반면, 함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기가 좀 더 편하고, 메모리 자원을 덜 사용한다는 장점이 있다.
    과거에는 함수형 컴포넌트에서 state와 라이플 사이클 API를 사용할 수 없다는 단점이 있었는데, 이러한 단점은 리액트 훅이 도입되면서 해결되었다. 
    
### 선언 방식
    
- 클래스형
       
   1. state.lifeCycle 관련 기능 사용이 가능하다.
   2. 메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다.
   3. 임의 메서드를 정의할 수 있다.

- 함수형
       
   1. state, lifeCycle 관련 기능사용 불가능 (리액트 Hook을 통해서 해결).
   2. 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
   3. 컴포넌트 선인이 편하다.

### state 사용차이

state란? 컴포넌트 내부에서 바뀔 수 있는 값(객체)

- 클래스형
  1. constructor 안에서 this.state 초기 값 설정 가능
  2. constructor 없이 바로 state 초기값을 설정할 수 있다.
  3. 클래스형 컴포넌트의 state는 객체 형식
  4. this.setState 함수로 state의 값을 변경할 수 있다.

- 함수형
  1. 함수형 컴포넌트에서는 useState 함수로 state를 사용한다.
  2. useState 함수를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태
  3. useState의 두 번째 원소는 상태를 바꾸어 주는 함수이다.

 

### props 사용차이

props란? 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할때(서로 다른 파일끼리 데이터를 주고 받을 때) 사용한다. props를 전달 받은 자식 컴포넌트에서는 데이터를 수정할 수 없다. 데이터를 변경하기 위해서는 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 사용해야 한다.

* 컴포넌트의 속성을 설정 할 때 사용하는 요소

* 읽기 전용

* 컴포넌트 자체 props를 수정해서는 안된다.

* 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야한다.

 

### 클래스 컴포넌트의 props

* this.props를 통해 값을 불러올 수 있다.

* 부모 객체의 키 값, 자식 props를 화용

 

### 함수형 컴포넌트의 props

* props를 불러올 필요 없이 바로 호출 할 수 있다.
  </div>
</details>
