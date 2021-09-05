pipeline{

    //untuk define dimana mau dirun
    agent{
        node{
            label 'docker-chrome'
        }
    }

    //kumpulan task yang akan kita assign di job tersebut
    //Task: run automation test
    //1. Clone source code, masuk ke dalam project => bisa diskip karena otomatis sama jenkinsnya
    //2. Intall dependencies
    //3. Run all test => run all test
    //4. Generate report
    stages{
        stage('Install dependencies'){
            steps{
                //semua task operation bisa ditulis di sini
                sh "npm ci"
            }
        }

        stage('Run Test'){
            steps{
                sh "npm test"
            }
        }

        stage('Generate report'){
            steps{
                sh "npm run reporter"
                sh "ls cypress/reports"
                publishHTML([
                    allowMissing:false,
                    alwaysLinkToLastBuild:true,
                    keepAll:true,
                    reportDir:'cypress/reports/',
                    reportFiles:'index.html',
                    reportName:'BDD Atlas MultiCucumber
                    Reporter',
                    reportTitles:''])
            }
        })
    }    


    //yang akan diexecute setelah semua stages
    //always =>
    //failed =>
    //success =>
    post{
        always{
            echo "Ini adalah post()"
        }
    }
}