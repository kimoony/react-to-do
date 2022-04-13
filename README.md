# To Do List

[My To-Do List](https://kimoony.github.io/react-to-do)

<br/>

### 기능사항
- To Do 등록
- To Do 상태변경
- To Do 삭제

<br/>

### 사용기술
- JavaScript
- TypeScript
- React 
- styled-components
- Recoil
- React Hook Form
- Data 저장
  - localStorage

<br/>

### 배포
- GitHub
  - `packge.json` scripts 수정
  ```js
  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build"
  },
  homepage: "https://kimoony.github.io/react-to-do/"
  ```
   - gh-pages 설치
    ```zsh
    $ npm install gh-pages --save-dev
    ```
  - `.env.local` 파일 만들고 GitHub token 입력  
  [참고](https://yakjeon.tistory.com/99)
  - GitHub Repository 에 gh-pages branch 생성
  - 루트 디렉토리에서 npm run deploy 실행  

<br/>

  ### 주의사항
  - To Do 등록 후 localStorage에서 데이터 확인 안될 경우 localStorage 새로고침 하기

  <br />

# 작성자

👨‍💻 김 훈
- GitHub: [@kimoony](https://github.com/kimoony)