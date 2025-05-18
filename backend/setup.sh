mvn io.quarkus:quarkus-maven-plugin:2.16.9.Final:create \
  -DprojectGroupId=org.example \
  -DprojectArtifactId=backend \
  -DclassName="org.example.GreetingResource" \
  -Dpath="/api/hello"