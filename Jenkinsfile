pipeline{
    agent any
    environment{
        PROJECT_NAME="test"
    }

    stages{
        
        stage('build'){
            steps{
                 sh ''' 
                          docker build --network host -t azima/nodejs-test .
                    '''
            }
        }
        stage('Docker Login'){
            steps{
             catchError(message : "Message"){
                 withCredentials([usernamePassword(credentialsId: 'DOCKER_AUTH', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    sh '''
    		        docker login -u ${user} -p ${pass}
                    echo done
                    '''
                } 
             }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            }
        }
        stage('Push Image'){
            steps{
                catchError(message : "Message") {
                    sh '''
                        docker push azima/nodejs-test
                        echo done
                    '''
                }
            }
        }
           stage('Apply Application') {
            steps{
                sh '''
                    curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"
                    chmod u+x ./kubectl
                    ./kubectl apply -f application.yaml
                    echo done
                '''
            }
        }
    }

    post{
        always{
            echo "Start Stages Pipeline"
        }
        success{
            echo "Success Deploy"
        }
        failure{
            echo "Failed Deploy"
        }
    }
}