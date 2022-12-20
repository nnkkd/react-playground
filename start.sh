run_api () {
    cd api
    yarn start
}

run_ui (){
    cd ui
    yarn start
}

run_api & run_ui
