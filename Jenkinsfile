pipeline {
    agent any

    stages {
        stage('Pull Docker Image') {
            steps {
                sh 'docker pull shobhitkori/portfolio:latest'
            }
        }
        stage('Stop Previous Container') {
            steps {
                script {
                    def containerId = sh(script: "docker ps -q --filter 'name=portfolio'", returnStdout: true).trim()
                    if (containerId) {
                        sh "docker stop ${containerId}"
                        sh "docker rm ${containerId}"
                    }
                }
            }
        }
        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name portfolio shobhitkori/portfolio:latest'
            }
        }
    }
}
