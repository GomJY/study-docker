# Docker File 이란
docker file은 docker build를 통해 이미지를 빌드할때 수행할 명령어, 
환경 세팅등을 모아 놓은 파일 이라고 할 수 있다.

## 작동 원리
docker CLI가 docker demon에 전송하기 전에, .dockerignore을 루트 폴더에서 
제외시킬 파일을 정한다

## 사용시 주의사항
- .dockerignore을 통해서 최적화를 고려한다.
- dockerFile은 공통적으로 해당 프로젝트 루트 폴더에 저장한다.


## FROM
FROM은 빌드 전 기본 이미지를 통해서 초기화 환경을 지정할때 사용한다.
ARG가 없는 경우에는 FROM으로 docker 파일이 시작된다.

- 빌드시 여러개의 이미지를 종속적으로 필요하는 경우에는 DockerFile 하나에서 FROM은 여러번 있을수 있다.
- FROM을 통해서 멀티플랫폼 이미지를 참조하는 경우,--plaform 옵션을 사용해서 이미지에 플랫폼을 지정할수 있다.
(ex: linux/amd64, linux/arm64 기본적으로 빌드 요청의 대상) 

### 형식
```
FROM [--platform=<platform>] <image> [AS <name>]
FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
```

### Example
```
FROM node:current
```

## ARG
ARG는 DockerFile에서 변수로 사용하기 위한 값으로 사용한다.

- ARG는 FROM 이전 인 build stage전에 선언 되어야 한다.

### 형식
```
ARG 변수명=값
```

### Example
```
ARG  CODE_VERSION=latest
FROM base:${CODE_VERSION}
CMD  /code/run-app

FROM extras:${CODE_VERSION}
CMD  /code/run-extras
```

# .dockerignore
.dockerignore는 docker build를 외부URL, 즉 외부 자원을 받아서 build 하는 경우,
불 필요하고 용량이 큰 파일(이미지, 동영상 등등)과 같은 파일을 받으면서 빌드하면
빌드 시간이 늘어난다.
이를 해결하기 위해서, .dockerignore로 build시 불 필요한 파일들을 제거한다.

## 파일구조
```
my-app/
├─ node_modules/
├─ public/
│  │  업로드/
│  │  ├─ img/
│  │  │  ├─img1.jpg
│  │  │  ├─img2.jpg
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ index.css
│  ├─ index.js
├─ .gitignore
├─ package.json
├─ README.md
├─ b_img1.jpg
├─ b_img2.jpg
```

## 작성법
위에 파일 리스트를 보면 업로드, node_modules, b_img1, b_img2 는 build할때,
크게 필요하지 않은 파일이다. 이럴때 작성할수 있는 다양한 방법을 아래 정리하겠습니다.

### 주석
```
# comment
```

### 특정 하나의 파일만 없앨때
<B> b_img1.jpg </B>

제외되는 파일  
- my-app/b_img1.jpg

### 특정 이름의 파일드를 없앨때
<B> *.jpg  </B> 

제외 파일
- my-app/b_img1.jpg
- my-app/b_img2.jpg

### 자식폴더안에 특정 이름의 파일드를 없앨때
<B> \*/*.jpg  </B> 

제외 파일
- my-app/public/업로드/img/b_img1.jpg
- my-app/public/업로드/img/b_img2.jpg