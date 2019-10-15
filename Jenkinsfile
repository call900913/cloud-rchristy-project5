pipeline {
  agent any
  stages {
    stage('Install Serverless') {
      steps {
        sh 'sudo apt install -y nodejs'
        sh 'sudo apt install -y npm'
        sh 'sudo npm install -g serverless'
      }
    }
    stage('Serverless Deploy V') {
      steps {
        script {
          dir("/var/lib/jenkins/workspace/cloud-rchristy-project5_master/backend") {
            withAWS(credentials: 'rc-serverless', region: 'us-east-2') {
              sh '''
                export PATH=/var/lib/jenkins:$PATH
                npm install
                serverless deploy -v
                '''
            }
          }
        }
      }
    }
  }
}
