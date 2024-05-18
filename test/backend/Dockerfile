FROM maven AS build
VOLUME /tmp
WORKDIR /home/alpine/spring
COPY . .
WORKDIR /home/alpine/spring/demo/
RUN mvn clean install -DskipTests

FROM openjdk:21
COPY --from=build /home/alpine/spring/demo/target /home/spring/target
WORKDIR /home/spring/target
ENTRYPOINT [ "java", "-jar", "demo-0.0.1-SNAPSHOT.jar" ]
EXPOSE 8080