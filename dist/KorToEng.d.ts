/**
 * 한글을 입력받아 영어로 변환하는 함수
 * ex) "ㅗ디ㅣㅐ" -> "hello"
 * @param {string} kor
 * @returns {string}
 */
export declare const korToEng: (kor: string) => string;
/**
 * 영어로 된 문자열을 입력받아 한글타이핑으로 변환
 * ex)engToKor("dkssudgktpdy") => 안녕하세요
 * @param {string} eng
 * @returns {boolean}
 */
export declare const engToKor: (eng: string) => string;
/**
 * 입력한 문자열과 비교할 문자열을 입력받아 일치하는지 검사 ex) "ㅎㅇㅎㅇ" === "하이하이", "ㅂㄱㅇ" === "반가워요", "반ㄱㅇ" === "반가워요"
 * @param cho 한글 초성입력
 * @param target 비교할 문자열
 * @returns {boolean}
 */
export declare const choSearch: (cho: string, target: string) => boolean;
