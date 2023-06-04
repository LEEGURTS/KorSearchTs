const korDict: Record<string, string> = {
  ㄱ: "r",
  ㄲ: "R",
  ㄴ: "s",
  ㄷ: "e",
  ㄸ: "E",
  ㄹ: "f",
  ㅁ: "a",
  ㅂ: "q",
  ㅃ: "Q",
  ㅅ: "t",
  ㅆ: "T",
  ㅇ: "d",
  ㅈ: "w",
  ㅉ: "W",
  ㅊ: "c",
  ㅋ: "z",
  ㅌ: "x",
  ㅍ: "v",
  ㅎ: "g",
  ㅏ: "k",
  ㅐ: "o",
  ㅑ: "i",
  ㅒ: "O",
  ㅓ: "j",
  ㅔ: "p",
  ㅕ: "u",
  ㅖ: "P",
  ㅗ: "h",
  ㅛ: "y",
  ㅜ: "n",
  ㅠ: "b",
  ㅡ: "m",
  ㅣ: "l",
  ㄳ: "rt",
  ㄵ: "sw",
  ㄶ: "sg",
  ㄺ: "fr",
  ㄻ: "fa",
  ㄼ: "fq",
  ㄽ: "ft",
  ㄾ: "fx",
  ㄿ: "fv",
  ㅀ: "fg",
  ㅄ: "qt",
  ㅘ: "hk",
  ㅙ: "ho",
  ㅚ: "hl",
  ㅝ: "nj",
  ㅞ: "np",
  ㅟ: "nl",
  ㅢ: "ml",
};

const ENG_KEY = "rRseEfaqQtTdwWczxvgkoiOjpuPhynbml";
const KOR_KEY =
  "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ";
const CHO_DATA = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const JUNG_DATA = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const JONG_DATA = "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";

/**
 * 한글을 입력받아 영어로 변환하는 함수
 * ex) "ㅗ디ㅣㅐ" -> "hello"
 * @param {string} kor
 * @returns {string}
 */
export const korToEng = (kor: string) => {
  const korArr = kor.split("");
  const engArr = korArr.map((korChar) => {
    if (korChar === " ") return " ";
    const code = korChar.charCodeAt(0);
    // 가 ~ 힣
    if (code >= 44032 && code <= 55203) {
      const cho = Math.floor((code - 44032) / 588);
      const jung = Math.floor(((code - 44032) / 28) % 21);
      const jong = ((code - 44032) % 28) - 1;
      return (
        korDict[CHO_DATA[cho]] +
        korDict[JUNG_DATA[jung]] +
        //종성이 존재하면 korDict을 통해 출력, 없으면 빈 문자열 출력
        (jong >= 0 ? korDict[JONG_DATA[jong]] : "")
      );
    }
    // 초성의 케이스, 있으면 korDict을 통해 출력, 없으면 원본 값 출력
    return korDict[korChar] ?? korChar;
  });
  return engArr.join("");
};

const choDict: Record<string, string> = {
  r: "ㄱ",
  R: "ㄲ",
  s: "ㄴ",
  e: "ㄷ",
  E: "ㄸ",
  f: "ㄹ",
  a: "ㅁ",
  q: "ㅂ",
  Q: "ㅃ",
  t: "ㅅ",
  T: "ㅆ",
  d: "ㅇ",
  w: "ㅈ",
  W: "ㅉ",
  c: "ㅊ",
  z: "ㅋ",
  x: "ㅌ",
  v: "ㅍ",
  g: "ㅎ",
};

const jungDict: Record<string, string> = {
  k: "ㅏ",
  o: "ㅐ",
  i: "ㅑ",
  O: "ㅒ",
  j: "ㅓ",
  p: "ㅔ",
  u: "ㅕ",
  P: "ㅖ",
  h: "ㅗ",
  y: "ㅛ",
  n: "ㅜ",
  b: "ㅠ",
  m: "ㅡ",
  l: "ㅣ",
  hk: "ㅘ",
  ho: "ㅙ",
  hl: "ㅚ",
  nj: "ㅝ",
  np: "ㅞ",
  nl: "ㅟ",
  ml: "ㅢ",
};

const jongDict: Record<string, string> = {
  rt: "ㄳ",
  sw: "ㄵ",
  sg: "ㄶ",
  fr: "ㄺ",
  fa: "ㄻ",
  fq: "ㄼ",
  ft: "ㄽ",
  fx: "ㄾ",
  fv: "ㄿ",
  fg: "ㅀ",
  qt: "ㅄ",
  r: "ㄱ",
  R: "ㄲ",
  s: "ㄴ",
  e: "ㄷ",
  f: "ㄹ",
  a: "ㅁ",
  q: "ㅂ",
  t: "ㅅ",
  T: "ㅆ",
  d: "ㅇ",
  w: "ㅈ",
  c: "ㅊ",
  z: "ㅋ",
  x: "ㅌ",
  v: "ㅍ",
  g: "ㅎ",
};

const codeToKor = (cho: number, jung: number, jong: number) => {
  return String.fromCharCode(cho * 588 + jung * 28 + jong + 44032);
};

const stackToKor = (stack: string[]) => {
  let result = stack.join("");
  switch (stack.length) {
    case 5:
      // 초 중중 종종
      if (
        choDict[stack[0]] &&
        jungDict[stack[1]] &&
        jongDict[stack[3] + stack[4]]
      ) {
        const cho = choDict[stack[0]],
          jung = jungDict[stack[1] + stack[2]],
          jong = jongDict[stack[3] + stack[4]];
        result = codeToKor(
          CHO_DATA.indexOf(cho),
          JUNG_DATA.indexOf(jung),
          JONG_DATA.indexOf(jong) + 1
        );
        stack.length = 0;
      }
      break;
    case 4:
      // 초 중중 종
      if (
        choDict[stack[0]] &&
        jungDict[stack[1] + stack[2]] &&
        jongDict[stack[3]]
      ) {
        const cho = choDict[stack[0]],
          jung = jungDict[stack[1] + stack[2]],
          jong = jongDict[stack[3]];

        result = codeToKor(
          CHO_DATA.indexOf(cho),
          JUNG_DATA.indexOf(jung),
          JONG_DATA.indexOf(jong) + 1
        );
        stack.length = 0;
      }
      // 초 중 종종
      if (
        choDict[stack[0]] &&
        jungDict[stack[1]] &&
        jongDict[stack[2] + stack[3]]
      ) {
        const cho = choDict[stack[0]],
          jung = jungDict[stack[1]],
          jong = jongDict[stack[2] + stack[3]];

        result = codeToKor(
          CHO_DATA.indexOf(cho),
          JUNG_DATA.indexOf(jung),
          JONG_DATA.indexOf(jong) + 1
        );
        stack.length = 0;
      }
      break;
    case 3:
      // 초 중 종
      if (choDict[stack[0]] && jungDict[stack[1]] && jongDict[stack[2]]) {
        const cho = choDict[stack[0]],
          jung = jungDict[stack[1]],
          jong = jongDict[stack[2]];

        result = codeToKor(
          CHO_DATA.indexOf(cho),
          JUNG_DATA.indexOf(jung),
          JONG_DATA.indexOf(jong) + 1
        );
        stack.length = 0;
      }
      // 초 중중
      if (choDict[stack[0]] && jungDict[stack[1] + stack[2]]) {
        const cho = choDict[stack[0]],
          jung = jungDict[stack[1] + stack[2]];

        result = codeToKor(CHO_DATA.indexOf(cho), JUNG_DATA.indexOf(jung), 0);

        stack.length = 0;
      }
      break;

    case 2:
      // 초 중
      if (choDict[stack[0]] && jungDict[stack[1]]) {
        const cho = choDict[stack[0]],
          jung = jungDict[stack[1]];

        result = codeToKor(CHO_DATA.indexOf(cho), JUNG_DATA.indexOf(jung), 0);

        stack.length = 0;
      }

      // 중
      if (jungDict[stack[0] + stack[1]]) {
        const jung = jungDict[stack[0] + stack[1]];
        result = jung;
        stack.length = 0;
      }

      // 종종
      if (jongDict[stack[0] + stack[1]]) {
        const jong = jongDict[stack[0] + stack[1]];
        result = jong;
        stack.length = 0;
      }
      break;
    case 1:
      // 초
      if (choDict[stack[0]]) {
        const cho = choDict[stack[0]];
        result = cho;
        stack.length = 0;
      }
      // 중
      if (jungDict[stack[0]]) {
        const jung = jungDict[stack[0]];
        result = jung;
        stack.length = 0;
      }
      break;
  }
  return result;
};

/**
 * 영어로 된 문자열을 입력받아 한글타이핑으로 변환
 * ex)engToKor("dkssudgktpdy") => 안녕하세요
 * @param {string} eng
 * @returns {boolean}
 */
export const engToKor = (eng: string) => {
  const engArr = eng.split("");
  let result = "";
  let stack: string[][] = [];
  let cur: string[] = [];
  console.log(stack);
  for (let i = 0; i < engArr.length; i++) {
    const eng = engArr[i];
    if (ENG_KEY.includes(eng)) {
      switch (cur.length) {
        case 0:
          // 초
          // 중
          cur.push(eng);
          break;
        case 1:
          // 초 중
          if (choDict[cur[0]] && jungDict[eng]) {
            cur.push(eng);
          }
          // 중중
          else if (jungDict[cur[0] + eng]) {
            cur.push(eng);
          } else {
            stack.push(cur);
            cur = [eng];
          }
          break;
        case 2:
          // (특이 케이스) 초중 초중
          if (
            choDict[cur[0]] &&
            jungDict[cur[1]] &&
            choDict[eng] &&
            i < engArr.length - 1 &&
            jungDict[engArr[i + 1]]
          ) {
            stack.push(cur);
            cur = [eng];
          }
          // 초 중 종
          else if (choDict[cur[0]] && jungDict[cur[1]] && jongDict[eng]) {
            cur.push(eng);
          }
          // 초 중중
          else if (choDict[cur[0]] && jungDict[cur[1] + eng]) {
            cur.push(eng);
          } else {
            stack.push(cur);
            cur = [eng];
          }
          break;
        case 3:
          //(특이 케이스) 초중종 초중
          if (
            choDict[cur[0]] &&
            jungDict[cur[1]] &&
            jongDict[cur[2]] &&
            i < engArr.length - 1 &&
            choDict[eng] &&
            jungDict[engArr[i + 1]]
          ) {
            stack.push(cur);
            cur = [eng];
          }
          //(특이 케이스) 초 중중 초중
          else if (
            choDict[cur[0]] &&
            jungDict[cur[1]] &&
            jungDict[cur[2]] &&
            i < engArr.length - 1 &&
            choDict[eng] &&
            jungDict[engArr[i + 1]]
          ) {
            stack.push(cur);
            cur = [eng];
          }
          // 초 중 종종
          else if (
            choDict[cur[0]] &&
            jungDict[cur[1]] &&
            jongDict[cur[2] + eng]
          ) {
            cur.push(eng);
          }
          // 초 중중 종
          else if (
            choDict[cur[0]] &&
            jungDict[cur[1] + cur[2]] &&
            jongDict[eng]
          ) {
            cur.push(eng);
          } else {
            stack.push(cur);
            cur = [eng];
          }
          break;
        case 4:
          //(특이케이스) 초중중종 초중
          if (
            choDict[cur[0]] &&
            jungDict[cur[1] + cur[2]] &&
            jongDict[cur[3]] &&
            i < engArr.length - 1 &&
            choDict[eng] &&
            jungDict[engArr[i + 1]]
          ) {
            stack.push(cur);
            cur = [eng];
          }

          // 초 중중 종종
          else if (
            choDict[cur[0]] &&
            jungDict[cur[1] + cur[2]] &&
            jongDict[cur[3] + eng]
          ) {
            cur.push(eng);
          } else {
            stack.push(cur);
            cur = [eng];
          }
          break;
        default:
          stack.push(cur);
          cur = [eng];
      }
    } else {
      stack.push(cur);
      cur = [eng];
    }
  }
  if (cur.length > 0) stack.push(cur);
  stack.forEach((s) => {
    result += stackToKor(s);
  });
  return result;
};

const choCompare = (cho: string, target: string) => {
  // 초중종, 그 외 케이스
  if (cho === target) return true;
  if (!/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]$/.test(target)) return cho === target;
  // 입력이 초성이라면
  if (cho.charCodeAt(0) >= 0x3131 && cho.charCodeAt(0) <= 0x314e) {
    const targetCode = target.charCodeAt(0) - 0xac00;
    const targetCho = Math.floor(targetCode / 588);
    return cho === CHO_DATA[targetCho];
  }
  // 입력이 초+중
  else if (cho.charCodeAt(0) >= 0xac00 && cho.charCodeAt(0) <= 0xd7a3) {
    const targetCode = target.charCodeAt(0) - 0xac00;
    const targetCho = Math.floor(targetCode / 588);
    const targetJung = Math.floor((targetCode / 28) % 21);
    return cho === codeToKor(targetCho, targetJung, 0);
  }
  //한글이 아님
  else {
    return cho === target;
  }
};

/**
 * 입력한 문자열과 비교할 문자열을 입력받아 일치하는지 검사 ex) "ㅎㅇㅎㅇ" === "하이하이", "ㅂㄱㅇ" === "반가워요", "반ㄱㅇ" === "반가워요"
 * @param cho 한글 초성입력
 * @param target 비교할 문자열
 * @returns {boolean}
 */
export const choSearch = (cho: string, target: string) => {
  for (let i = 0; i < cho.length; i++) {
    if (!choCompare(cho[i], target[i])) {
      return false;
    }
  }
  return true;
};
