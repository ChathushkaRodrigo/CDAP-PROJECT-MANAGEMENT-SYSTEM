properties([disableConcurrentBuilds()])
pipeline {
  agent { docker { image 'node:16.17.1-alpine' } }
  tools {
    nodejs 'nodejs'
  }
  options {
    // This is required if you want to clean before build
    skipDefaultCheckout(true)
  }
  stages {
    stage('Clone SCM for sonar') {
      steps {
        // Clean before build
        cleanWs()
        git branch: 'master',
          credentialsId: '49620939-7d4b-4e5b-ac2a-8abb34c2ff3b',
          url: 'https://github.com/ChathushkaRodrigo/CDAP-PROJECT-MANAGEMENT-SYSTEM.git'
      }
    }

    node{
    stage('SonarQube analysis') {
    
      
          def scannerHome = tool 'SonarQube Scanner 2.8';
          withSonarQubeEnv() {
            sh '${scannerHome}/bin/sonar-scanner --version'
          }
    }
    }
   
    stage("Quality gate") {
      steps {
        script {
          def qualitygate = waitForQualityGate()
          sleep(10)
          if (qualitygate.status != "OK") {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }
  }
}



