# docker study log

- 2021/01/19
- 2021/01/21

## 참고 자료
 - [따라하며 배우는 도커와 CI환경](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%8F%84%EC%BB%A4-ci)
 - [[2020년] 제발 도커 씁시다!](https://www.inflearn.com/course/%EB%8F%84%EC%BB%A4-docker-%EC%84%9C%EB%B2%84-%EC%9E%90%EB%8F%99%ED%99%94)

# docker 명령어

### 도커 이미지 빌드 (docker build [options] PATH) 

#### 형식
```docker 
docker build [-t 자신의 이름/이미지의이름:버전] (DockerFile 경로)
```
|option|설명|
|---|---|
|-t (tag:version) |이미지 태그 및 버전 설정
|-it|입력, 출력에 터미널을 보겠다, 사용시 컨테이너에 작동이 없어도 종료되지 않는다.



    

#### ex
```docker
docker build -t juice/say-my-name:1.0 . 
```

### 도커 이미지 리스트 (docker images) 

#### ex
```docker
$ docker images
REPOSITORY          TAG       IMAGE ID       CREATED         SIZE
juice/say-my-name   1.0       e14f4ce5a7e0   3 minutes ago   204MB
```


### 도커 컨테이터 만들기 (docker run) 

로컬에 이미지를 검색 후에 없다면 docker hub에서 검색하여 가져온다.
|option|설명|
|---|---|
|-p (Docker_Port:PC_Port) |도커, PC 측 포트 설정
#### 형식
```docker
docker run tag:version
```

#### ex
```docker
docker run juice/say-my-name:1.0
docker run -p 80:80 nginx
```

### 도커 작동 컨테이너 리스트 (docker ps) 

#### ex
```docker
docker ps
```

### 도커 컨테이너 터미널 접속하기( docker exec -it (containerID) bash)

#### 형식
```docker
 docker exec -it (containerId) bash
```
#### ex
```docker
 docker exec -it fc66 bash
```


### dockerHub에서 이미지 가져오기

#### 형식
```docker
 docker pull (tag:version)
```
#### ex
```docker
 docker pull mysql:latest
 docker pull mysql:8.0.23
 docker pull mysql:8.0
 docker pull mysql:8
```