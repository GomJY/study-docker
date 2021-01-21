# centos:7를 기반으로 이미지를 설계 하겠다는 뜻
FROM centos:7

# 작업 디렉토리 지정
#  - 여기서 지정은 한 경우에 아래에 name.txt는 app/name.txt 이렇게 구성된다.
# WORKDIR /app

#COPY '복사할대상 경로' '붙여넣기할 경로' 
COPY name.txt .

#shall 명령어는 따로 지정을 해주어야 한다.
CMD while true; do sleep 3; cat name.txt; done;