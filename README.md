# 자바스크립트 한글 검색 관련 라이브러리

## 자바스크립트 상에서 한글검색시에 조금 더 편리하도록 지원하는 라이브러리입니다.

### 함수

#### korToEng(kor:string)

한글을 영어로 변환합니다.

```javascript
korToEng("ㅗ디ㅣㅐ ㅡㅛ ㅜ믇 ㅑㄴ ㅣㄷㄷ혓ㄴ"); // hello my name is leeguts
```

#### engToKor(eng:string)

영어를 한글로 변환합니다.

```javascript
engToKor("dkssudgktpdy wp dlfmadms rmstjddlqslek."); // 안녕하세요 제 이름은 근성입니다.
```

#### choCompare(chosung:string, target:string)

초성을 비교합니다.

```javascript
choCompare("ㅇㄴㅎㅅㅇ", "안녕하세요"); // true
choCompare("ㄱㅎㅂㅈㅇ", "안녕하세요"); // false
choCompare("ㅇㄴㅎ", "안녕하세요"); // true
choComapre("피ㅂㄹ", "피바라기"); // true
```
