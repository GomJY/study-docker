# docker study log

- 2021/01/19
- 2021/01/21

## 참고 자료
 - [따라하며 배우는 도커와 CI환경](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%8F%84%EC%BB%A4-ci)
 - [[2020년] 제발 도커 씁시다!](https://www.inflearn.com/course/%EB%8F%84%EC%BB%A4-docker-%EC%84%9C%EB%B2%84-%EC%9E%90%EB%8F%99%ED%99%94)

# docker 명령어

## 이미지

### 도커 이미지 빌드 (docker build [options] PATH) 

PATH에서 dockerfile을 가져와서 이미지를 빌드한다.

#### 형식
```docker 
docker build [OPTIONS] (PATH)
```
|option|매개변수|설명|
|---|---|---|
|-t |[제작자/]tag:version|이미지 태그 및 버전 설정
|-it||입력, 출력에 터미널을 보겠다, 사용시 컨테이너에 작동이 없어도 종료되지 않는다.
|-f| 다른 dockerfile이름 |해당 PATH안에 Dockerfile 이름을 빌드하는 것이 아닌, 매개변수로 지정한 이름에 dockerfile을 빌드한다.

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

### dockerHub에서 이미지 검색( docker search [OPTIONS] TERM)

docker hub에서 image 검색

#### 형식
```docker
 docker search [OPTIONS] (name)
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

## 컨테이너

### 도커 컨테이터 만들기 (docker run) 

로컬에 이미지를 검색 후에 없다면 docker hub에서 검색하여 가져온다.
|option|매개변수|설명|
|---|---|---|
|--name|이름| container 이름 설정, 설정을 안할 경우 랜덤이름으로 생성
|-p|HOST_PORT:Container_PORT|도커, PC 측 포트 설정
|-P ||Dockerfile에서 EXPOSE로 설정된 포트 컨테이너 포트와 임의에 호스트 포트와 연결 시킨다.|

#### 형식
```docker
docker run [OPTIONS] (image-tag:version)
```

#### ex
```docker
docker run juice/say-my-name:1.0

docker run -p 80:80 nginx

/** -P
* ContainerPort: Dockerfile에서 EXPOSE로 설정된 포트는 
* HostPort: 임의로 설정된다.
**/
docker run -P juice/say-my-name:1.0
```

### 도커 컨테이터 GraceFully(안전) 중지  (docker stop) 

진행하는 작업을 완료시킨 후(GraceFully)에 컨테이너를 중지 한다. 


### 도커 컨테이터 Kill(강제) 중지 (docker kill) 

작업과 무관하게 바로 중지 시킨다.


### 도커 컨테이너 삭제(docker rm )

컨테이너를 삭제한다.
중지된 상태에서만 삭제할 수 있다.

#### ex
```
//모든 컨테이너 삭제
docker rm `docker ps -a -q`
  //window powershall 에서
  docker ps -aq | foreach {docker rm $_}
  docker rm $(docker -ps -a -q)
```

### 도커 컨테이너 리스트( docker container ls )

기본값은 작동되는 컨테이너만 보여준다.

#### 형식
```
docker container ls [OPTION]
```

#### ex
```
docker container ls -a
docker container ls -a
```


### 도커 작동 컨테이너 리스트 (docker ps) 

#### ex
```docker
//켜져있는 컨테이너
docker ps
//모든 컨테이너
docker ps -a
```

### 도커 컨테이너 터미널 접속하기( docker exec -it (containerID) bash)

ctrl + D 로 탈출 가능

#### 형식
```docker
 docker exec -it (containerId) (sh | bash | zsh | powershall)
|a lot of| linux| mac | window    |
|sh      | bash | zsh | powershall|
```
#### ex
```docker
 docker exec -it fc66 bash
```

